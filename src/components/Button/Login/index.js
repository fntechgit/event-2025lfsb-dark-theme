import * as React from "react";
import Button from "../";
import Typography from "@mui/material/Typography";

const LoginButton = ({
  onClick = () => {},
  children,
  ...rest
}) => (
  <Button
    onClick={onClick}
    variant="invert"
    {...rest}
  >
    <Typography
        variant="caption2"
      >
      {children}
    </Typography>
  </Button>
);

export default LoginButton;
