import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import { useSwiper } from "swiper/react";

const NextCarouselIcon = ({
  className,
  disabled = false,
  invert = false,
  ...rest
}) =>
  <SvgIcon
    viewBox="0 0 60 60"
    className={className}
    sx={{
      cursor: disabled ? "inherit" : "pointer",
      fontSize: {
        xs: 36,
        md: 44,
        lg: 52,
        xl: 60
      },
      svg: {
        rect: {
          fill: "black",
          stroke: disabled ? "#666666" : "white",
          strokeWidth: {
            xs: 60 * 1.2 / 36,
            md: 60 * 1.2 / 44,
            lg: 60 * 2 / 52,
            xl: 60 * 2 / 60
          }
        },
        path: {
          stroke: disabled ? "#666666" : "white",
          strokeWidth: {
            xs: 60 * 1.2 / 36,
            md: 60 * 1.2 / 44,
            lg: 60 * 2 / 52,
            xl: 60 * 2 / 60
          }
        }
      },
      ...(!disabled && {
        "@media (hover: hover) and (pointer: fine)": {
          "&:hover": {
            svg: {
              rect: {
                fill: "white"
              },
              path: {
                stroke: "black"
              }
            }
          }
        }
      })
    }}
    {...rest}
  >
    {invert ?
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-1" y="1" width="58" height="58" transform="matrix(-1 0 0 1 58 0)"/>
      <path d="M30 42L18 30L30 18"strokeLinecap="square"/>
      <path d="M43 30H19" strokeLinecap="square"/>
    </svg>
    :
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-1" y="1" width="58" height="58" transform="matrix(-1 0 0 1 58 0)"/>
      <path d="M30 42L42 30L30 18" strokeLinecap="square"/>
      <path d="M17 30H41" strokeLinecap="square"/>
    </svg>
    }
  </SvgIcon>
;

const PrevCarouselIcon = ({
  ...rest
}) =>
  <NextCarouselIcon
    invert="true"
    {...rest}
  />
;

const Navigation = () => {
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const swiper = useSwiper();
  useEffect(() => {
    swiper.on("slideChange", (swipe) => {
      setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
    });
  }, [swiper]);
  return (
    <Stack
      direction="row"
      spacing={{
        xs: 2,
        md: 3
      }}
      sx={{
        mt: {
          xs: 4,
          md: 6
        },
        justifyContent: {
          xs: "center",
          md: "flex-end"
        },
        display: {
          xs: "flex",
          lg: "none"
        }
      }}
    >
      {slideConfig.isBeginning ?
      <PrevCarouselIcon
        disabled
      />
      :
      <PrevCarouselIcon
        onClick={() => swiper.slidePrev()}
      />
      }
      {slideConfig.isEnd ?
      <NextCarouselIcon
        disabled
      />
      :
      <NextCarouselIcon
        onClick={() => swiper.slideNext()}
      />
      }
    </Stack>
  );
};

export default Navigation;
