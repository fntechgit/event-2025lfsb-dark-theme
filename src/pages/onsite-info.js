import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section } from "../components/Grid";
import Grid from "@mui/material/Unstable_Grid2";
import AnimatedTypography from "../components/AnimatedTypography";
import Markdown from "markdown-to-jsx";
import { AnimatedLink } from "../components/Link";
import Seo from "@openeventkit/event-site/src/components/Seo";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";

const pageStyles = {
  backgroundColor: "#000"
};

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
        variant: "pSection",
        paragraph: true
      }
    },
    a: {
      component: LinkWrapper
    }
  }
};

const InfoSection = ({
  title,
  contentMarkdown
}) => (
  <Section>
    <Grid
      xs={12}
    >
      <AnimatedTypography
        variant="h1"
        sx={{
          whiteSpace: {
            md: "pre-line"
          }
        }}
      >
        {title}
      </AnimatedTypography>
    </Grid>
    <Grid
      xs={12}
      md={8}
      mdOffset={2}
      lg={6}
      lgOffset={3}
      sx={{
        mt: {
          xs: 5,
          md: 6,
          lg: 8,
          xl: 10
        },
        ul: {
          color: "white",
          mb: 2,
          pl: 4,
          listStyleType: "none",
          li: {
            pl: 1
          }
        }
      }}
    >
      <Markdown
        options={markdownOptions}
      >
        {contentMarkdown}
      </Markdown>
    </Grid>
  </Section>
);

const InfoSections = ({
  info
}) => info.map((entry) => (
  <InfoSection
    key={entry.title}
    title={entry.title}
    contentMarkdown={entry.content}
  />
));

const OnSiteInfoPage = ({
  data,
  location
}) => {
  const {
    onSiteInfoPageJson: {
      hero,
      info,
      map
    }
  } = data;
  return (
    <div style={pageStyles}>
      <Navbar/>
      <main>
        <PageHeader
          title={hero.title}
          lead={hero.lead}
          backgroundImage={hero.backgroundImage}
        />
        <Section>
          <Grid
            xs={12}
            md={8}
            lg={9}
          >
            <AnimatedTypography
              variant="h1"
            >
              {map.title}
            </AnimatedTypography>
          </Grid>
          { map.image &&
          <Grid
            xs={12}
            sx={{
              mt: {
                xs: 4,
                md: 6,
                lg: 8,
                xl: 10
              }
            }}
          >
            <GatsbyImage
              image={getImage(map.image.src)}
              alt={map.image.alt ?? ""}
            />
          </Grid>
          }
          <Grid
            xs={12}
            md={6}
            mdOffset={6}
            lg={4}
            lgOffset={7}
            sx={{
              mt: {
                xs: 4,
                md: 6,
                lg: 8,
                xl: 10
              }
            }}
          >
            <AnimatedTypography
              variant="pSection"
            >
              {map.content}
            </AnimatedTypography>
          </Grid>
        </Section>
        <InfoSections info={info} />
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default OnSiteInfoPage;

export const OnSiteInfoPageQuery = graphql`
  query {
    onSiteInfoPageJson {
      hero {
        title
        lead
        backgroundImage {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
        }
      }
      map {
        title
        content
        image {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
        }
      }
      info {
        title
        content
      }
    }
  }
`;

export const Head = ({
  location
}) =>
  <Seo
    title={"On-Site Info"}
    location={location}
  />
;
