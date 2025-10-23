import * as React from "react";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "../";

const RegisterButton = ({
  onClick = () => {},
  children,
  ...rest
}) => (
  <Button
    onClick={onClick}
    style={{
      justifyContent: "space-between"
    }}
    {...rest}
  >
    <Typography
      variant="caption2"
      textAlign="left"
      whiteSpace="pre-line"
    >
      {children}
    </Typography>
    <SvgIcon
      viewBox="0 0 15 15"
      sx={{
        fontSize: {
          xs: 10,
          lg: 15
        }
      }}
    >
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 13L13.3208 1.6792" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        <path d="M2.67969 1H14.0004V12.3208" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
      </svg>
    </SvgIcon>
  </Button>
);

export default RegisterButton;