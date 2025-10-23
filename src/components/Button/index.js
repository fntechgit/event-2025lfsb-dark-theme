import * as React from "react";
import { Button as BaseButton } from "@mui/base";
import { styled } from "@mui/material/styles";

import LoginButton from "./Login";
import RegisterButton from "./Register";

const StyledButton = styled(BaseButton)(({
  theme,
  variant = "default"
}) => {
  const color = variant === "default" ? "white" : "black";
  const colorInvert = variant ===  "default" ? "black" : "white";
  const defaultStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    color: colorInvert,
    backgroundColor: color,
    borderRadius: 0,
    textTransform: "uppercase",
    transition: "box-shadow 150ms ease",
    cursor: "pointer",
    ...(
      theme.unstable_sx({
        border: {
          xs: "1px solid white",
          lg: "2px solid white"
        },
        p: {
          xs: 2
        },
        height: {
          xs: 56,
          lg: 92
        },
        width: {
          xs: "max(135px, 100%)",
          md: 162,
          // TODO: check if value in figma is correct
          lg: 216
        }
      })
    ),
    svg: {
      stroke: colorInvert
    }
  };
  const hoverStyles = {
    color: color,
    ...(
      theme.unstable_sx({
        boxShadow: {
          xs: `inset 0 -56px 0 0 ${colorInvert}`,
          lg: `inset 0 -92px 0 0 ${colorInvert}`
        }
      })
    ),
    svg: {
      stroke: color
    }
  };
  return ({
    ...(defaultStyles),
    "&:hover": hoverStyles
  });
});

const Button = ({
  children,
  ...rest
}) => {
  return (
    <StyledButton 
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export {
  LoginButton,
  RegisterButton
};

export default Button;
