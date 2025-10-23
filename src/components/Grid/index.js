import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

export const GridContainer = ({
  children,
  ...rest
}) => (
  <Grid
    container
    disableEqualOverflow
    columnSpacing={{
      xs: 2,
      md: 3,
      lg: 4,
      xl: 5
    }}
    {...rest}
  >
    {children}
  </Grid>
);

export const Section = ({
  children,
  ...rest
}) => (
  <Container
    maxWidth="xl"
    sx={{
      position: "relative",
      px: {
        xs: 2,
        md: 3,
        lg: 4,
        xl: 5
      },
      py: {
        xs: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    }}
  >
    <GridContainer
      {...rest}
    >
      {children}
    </GridContainer>
  </Container>
);
