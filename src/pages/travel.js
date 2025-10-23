import * as React from "react";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { Section } from "../components/Grid";
import Typography from "@mui/material/Typography"
import AnimatedTypography from "../components/AnimatedTypography";
import { AnimatedLink } from "../components/Link";
import Seo from "@openeventkit/event-site/src/components/Seo";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import PageHeader from "../components/PageHeader";
import OverlappingContentImageSection from "../components/OverlappingContentImageSection";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";
import SvgIcon from "@mui/material/SvgIcon";

const pageStyles = {
  backgroundColor: "#000"
};

const markdownOptions = {
  forceBlock: true,
  overrides: {
    h4: {
      component: AnimatedTypography,
      props: {
        variant: "hSectionContent",
        sx: {
          pb: {
            xs: 4,
            md: 5
          }
        }
      }
    },
    p: {
      component: AnimatedTypography,
      props: {
        variant: "pSection",
      }
    }
  }
};

const Hotel = ({
  name,
  //address,
  info,
  book
}) => {
  return (
    <Grid
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          xs: 140,
          md: 190,
          lg: 230,
          xl: 270
        },
        p: "10px",
        border: {
          sm: "1px solid white",
          lg: "2px solid white"
        }
      }}
    >
      <AnimatedTypography
        variant="h4"
        sx={{
          flexGrow: 1
        }}
      >
        {name}
      </AnimatedTypography>
      <AnimatedTypography
        variant="caption2"
        sx={{
          color: "white"
        }}
      >
        {info}
      </AnimatedTypography>
      {book.link &&
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "flex-start",
          mt: 2
        }}
      >
        <AnimatedLink
          to={book.link}
        >
          <AnimatedTypography
            variant="caption1"
            style={{
              color: "white"
            }}
          >
            {book.text}
          </AnimatedTypography>
        </AnimatedLink>
        <SvgIcon
          viewBox="0 0 15 15"
          sx={{
            fontSize: {
              xs: 12,
              lg: 14
            },
            alignSelf: "center",
            mt: {
              xs: "-2px!important",
              lg: "-3px!important"
            }
          }}
        >
          <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 13L13.3208 1.6792" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M2.67969 1H14.0004V12.3208" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </SvgIcon>
      </Stack>
      }
    </Grid>
  );
};

const Hotels = ({
  hotels
}) => (
  <Grid 
    xs={12}
    gap={{
      xs: 5,
      md: 3,
      lg: 4,
      xl: 5
    }}
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, auto)",
        md: "repeat(2, 1fr)"
      },
      pt: {
        xs: 5,
        md: 6,
        lg: 10
      }
    }}
  >
  {hotels.map((hotel) =>
    <Hotel
      key={hotel.name}
      name={hotel.name}
      //address={hotel.address}
      info={hotel.info}
      book={hotel.book}
    />
  )}
  </Grid>
);

const Airport = ({
  image,
  name,
  distance
}) => {
  return (
    <Grid
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 0
      }}
    >
      <Grid
        sx={{
          position: "relative",
          height: {
            xs: 220,
            md: 260,
            lg: 422
          }
        }}
      >
        <GatsbyImage
          image={getImage(image.src)}
          alt={image.alt ?? ""}
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </Grid>
      <AnimatedTypography
        variant="h4"
        sx={{
          mt: {
            xs: 4,
            md: 5,
            lg: 6.75
          }
        }}
      >
        {name}
      </AnimatedTypography>
      <AnimatedTypography
        variant="caption2"
        sx={{
          flexGrow: 1,
          color: "white",
          mt: 2
        }}
      >
        {distance}
      </AnimatedTypography>
    </Grid>
  );
};

const Airports = ({
  airports
}) => (
  <Grid 
    xs={12}
    gap={{
      xs: 5,
      md: 3,
      lg: 4,
      xl: 5
    }}
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, auto)",
        md: "repeat(3, 1fr)"
      },
      pt: {
        xs: 5,
        md: 6,
        lg: 10
      }
    }}
  >
  {airports.map((airport) =>
    <Airport
      key={airport.name}
      name={airport.name}
      image={airport.image}
      distance={airport.distance}
    />
  )}
  </Grid>
);

const TravelPage = ({
  data,
  location
}) => {
  const {
    travelPageJson: {
      hero,
      venue,
      thingsToDo,
      accommodations,
      nearbyAirports
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
        {venue &&
        <Section>
          <Grid
            xs={12}
            md={8}
          >
            <Typography
              variant="h1"
            >
              {venue.title}
            </Typography>
          </Grid>
          { venue.image &&
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
              image={getImage(venue.image.src)}
              alt={venue.image.alt ?? ""}
            />
          </Grid>
          }
          <Grid
            xs={12}
            md={6}
            mdOffset={6}
            lg={5}
            lgOffset={6}
            xl={4}
            xlOffset={7}
            sx={{
              mt: {
                xs: 4,
                md: 6,
                lg: 8,
                xl: 10
              }
            }}
          >
            <Markdown
              options={markdownOptions}
            >
              {venue.content}
            </Markdown>
            {venue.address &&
            <AnimatedTypography
              variant="caption2"
              sx= {{
                color: "white",
                pt: {
                  xs: 4,
                  md: 5
                }
              }}
            >
              {venue.address}
            </AnimatedTypography>
            }
          </Grid>
        </Section>
        }
        <OverlappingContentImageSection
          title={thingsToDo.title}
          image={thingsToDo.image}
          content={thingsToDo.content}
          markdownOptions={markdownOptions}
        />
        {accommodations &&
        <Section>
          <Grid
            xs={12}
          >
            <Typography
              variant="h1"
            >
              {accommodations.title}
            </Typography>
          </Grid>
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
              {accommodations.content}
            </AnimatedTypography>
          </Grid>
          {accommodations.hotels && accommodations.hotels.length > 0 &&
          <Hotels
            hotels={accommodations.hotels}
          />
          }
        </Section>
        }
        <Section>
          <Grid
            xs={12}
          >
            <Typography
              variant="h1"
            >
              {nearbyAirports.title}
            </Typography>
          </Grid>
          {nearbyAirports.airports && nearbyAirports.airports.length > 0 &&
          <Airports
            airports={nearbyAirports.airports}
          />
          }
        </Section>
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default TravelPage;

export const TravelPageQuery = graphql`
  query {
    travelPageJson {
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
      venue {
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
        address
      }
      thingsToDo {
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
      accommodations {
        title
        content
        hotels {
          name
          info
          book {
            text
            link
          }
        }
      }
      nearbyAirports {
        title   
        airports {
          name
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
          distance
        }
      }
    }
  }
`;

export const Head = ({
  location
}) =>
  <Seo
    title={"Travel"}
    location={location}
  />
;
