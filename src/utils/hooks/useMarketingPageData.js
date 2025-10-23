import { graphql, useStaticQuery } from "gatsby";

const marketingPageQuery = graphql`
  query {
    marketingPageJson {
      callToAction {
        display,
        title,
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
    }
  }
`;

const useMarketingPageData = () => {
  const { marketingPageJson } = useStaticQuery(marketingPageQuery);
  return marketingPageJson;
};

export default useMarketingPageData;
