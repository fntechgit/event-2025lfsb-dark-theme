import * as React from "react";
import { graphql } from "gatsby";
import Seo from "@openeventkit/event-site/src/components/Seo";
import MarketingPage from "@openeventkit/event-site/src/pages/index";

export const marketingPageQuery = graphql`
  query {
    marketingPageJson {
      hero {
        title
        leadTitle
        lead
        backgroundMedia {
          publicURL
        }
        buttons {
          registerButton {
            display
            text
          }
          loginButton {
            display
            text
          }
        }
      }
      featuring {
        title
        image {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
          alt
        }
        content
      }
      attend {
        title
        benefits {
          concept
          description
          backgroundImage {
            src {
              childImageSharp {
                gatsbyImageData (
                  quality: 100
                )
              }
            }
            alt
          }
          foregroundImage {
            src {
              childImageSharp {
                gatsbyImageData (
                  quality: 100
                )
              }
            }
            alt
          }
        }
      }
      awards {
        title
        image {
          src {
            childImageSharp {
              gatsbyImageData (
                quality: 100
              )
            }
          }
          alt
        }
        content
      }
    }
  }
`;

export default MarketingPage;

export const Head = ({ location }) => <Seo location={location} />;
