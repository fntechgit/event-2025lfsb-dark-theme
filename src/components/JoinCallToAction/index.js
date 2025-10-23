import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Unstable_Grid2";
import { Section } from "../Grid";
import AnimatedTypography from "../AnimatedTypography";
import { RegisterButton, LoginButton } from "../Button";
import RegistrationLiteComponent from "@openeventkit/event-site/src/components/RegistrationLiteComponent";
import AuthComponent from "@openeventkit/event-site/src/components/AuthComponent";
import useMarketingPageData from "../../utils/hooks/useMarketingPageData";
import Link from "../../../src/components/Link";

const JoinCallToAction = ({
  location,
  defaultPath
}) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const {
    callToAction: {
      display,
      title,
      backgroundImage,
      buttons: {
        registerButton,
        loginButton
      }
    }
  } = useMarketingPageData();
  if (!display) return null;
  return (
    <Section
      disableEqualOverflow={false}
      sx={{
        position: "relative",
        py: {
          xs: 2,
          md: 4,
          lg: 10
        },
        mx: 0,
        my: {
          xs: 4.5,
          md: 6.5,
          lg: 8.5,
          xl: 10.5
        }
      }}
    >
      {backgroundImage &&
      <GatsbyImage
        image={getImage(backgroundImage.src)}
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          opacity: 0.8,
          pointerEvents: "none"
        }}
        alt={backgroundImage.alt ?? ""}
      />
      }
      <Grid
        xs={12}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          p: 0
        }}
      >
        <AnimatedTypography
          variant="h1"
          align="center"
          textTransform="uppercase"
        >
          {title}
        </AnimatedTypography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--Grid-columnSpacing)",
          mt: {
            xs: 4,
            lg: 6
          },
          p: 0
        }}
      >
        {registerButton.display &&
        <RegistrationLiteComponent ignoreAutoOpen={true}>
          <RegisterButton
            sx={{
              flexBasis: {
                xs: "50%",
                md: "unset"
              }
            }}
          >
            {registerButton.text}
          </RegisterButton>
        </RegistrationLiteComponent>
        }
        {loginButton.display &&
        <AuthComponent
            ignoreAutoOpen={true}
            location={location}
            style={{
            flexBasis: matchesXs ? "50%" : "unset"
            }}
          renderLoginButton={(onClick) => (
              <LoginButton onClick={onClick}>
                {loginButton.text}
              </LoginButton>
            )
          }
          renderEnterButton={(onClick) => (
              <Link
                to={defaultPath}
                style={{
                  flexBasis: matchesXs ? "50%" : "unset",
                  textDecoration: "none"
                }}
                onClick={onClick}
              >
                <LoginButton>
                  Enter
                </LoginButton>
              </Link>
            )
          }
        />
        }
      </Grid>
    </Section>
  );
};

export default JoinCallToAction;