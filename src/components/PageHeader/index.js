import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "../Grid";
import Grid from "@mui/material/Unstable_Grid2";
import AnimatedTypography from "../AnimatedTypography";
import Markdown from "markdown-to-jsx";
import { AnimatedLink } from "../Link";

// trails 'href' prop to 'to' prop
const LinkWrapper = ({ href, ...props }) => (
  <AnimatedLink
    to={href}
    color="#00A2FF"
    hoverColor="#00A2FF"
    {...props}
  />
);

const markdownOptions = {
  forceBlock: true,
  overrides: {
    p: {
      component: AnimatedTypography,
      props: {
        variant: "p2"
      }
    },
    a: {
      component: LinkWrapper
    }
  }
};

const PageHeader = ({
  title,
  lead,
  backgroundImage
}) => (
  <Section>
    {backgroundImage &&
    <GatsbyImage
      image={getImage(backgroundImage.src)}
      style={{
        position: "absolute",
        inset: 0,
        objectFit: "cover",
        pointerEvents: "none"
      }}
      alt=""
    />
  	}
    <Grid
      xs={12}
      sx={{
        position: "relative"
      }}
    >
      <AnimatedTypography
        variant="display1"
        whiteSpace="pre-line"
      >
        {title}
      </AnimatedTypography>
    </Grid>
    <Grid
      xs={12}
      md={6}
      mdOffset={6}
      lg={4}
      lgOffset={7}
      sx={{
        position: "relative",
        mt: {
        	xs: 5,
        	md: 6,
        	lg: 8,
        	xl: 10
        }
      }}
    >
      <Markdown
        options={markdownOptions}
      >
        {lead}
      </Markdown>
    </Grid>
  </Section>
);

export default PageHeader;