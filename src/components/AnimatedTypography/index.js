import * as React from "react";
import {
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import Typography from "@mui/material/Typography";

import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";

/**
 * using “text reveal” effect
 * @see https://conference.awwwards.com/
 */
const pConcealAnimation = {
  opacity: 0,
  transform: "translateY(2rem)",
  transition: "opacity .3s cubic-bezier(0.215, 0.61, 0.355, 1), transform .6s cubic-bezier(0.215, 0.61, 0.355, 1)",
};

const pRevealAnimation = {
  opacity: 1,
  transform: "translateY(0)",
  transition: "opacity .3s cubic-bezier(0.215, 0.61, 0.355, 1), transform .6s cubic-bezier(0.215, 0.61, 0.355, 1)",
};

/**
 * using “text reveal” effect
 * @see https://conference.awwwards.com/

const hConcealAnimation = {
  clipPath: "inset(100% 0 0 0)",
  transitionProperty: "clip-path",
  transitionDuration: ".5s",
  transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  transitionDelay: ".1s"
};
const hRevealAnimation = {
  clipPath: "inset(0 0 -10% 0)",
  transitionProperty: "clip-path",
  transitionDuration: ".5s",
  transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  transitionDelay: ".1s"
};
*/

const AnimatedTypography = ({
  children,
  style,
  concealAnimation: defaultConcealAnimation = pConcealAnimation,
  revealAnimation: defaultRevealAnimation = pRevealAnimation,
  shouldConceal = false,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const intersecting = useIntersectionObserver(ref, { rootMargin: "1px" });
  useLayoutEffect(() => {
    if (shouldConceal) {
      setVisible(intersecting);
      return;
    }
    if (intersecting) setVisible(true);
  }, [intersecting, shouldConceal]);
  //const isHeaderVariant = rest.variant?.startsWith("h") || rest.variant?.startsWith("display");
  //const concealAnimation = isHeaderVariant ? hConcealAnimation : defaultConcealAnimation;;
  //const revealAnimation = isHeaderVariant ? hRevealAnimation : defaultRevealAnimation;
  return (
    <Typography
      ref={ref}
      style={{
        //...(visible ? revealAnimation : concealAnimation),
        ...(visible ? defaultRevealAnimation : defaultConcealAnimation),
        ...(style ?? {})
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default AnimatedTypography;
