import * as React from "react";
import {
  useState,
  useEffect,
  useCallback
} from "react";
import { graphql } from "gatsby";
import Accordion from "@mui/material/Accordion";
import AccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AnimatedTypography from "../components/AnimatedTypography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Seo from "@openeventkit/event-site/src/components/Seo";
import Navbar from "@openeventkit/event-site/src/components/Navbar";
import { Section } from "../components/Grid";
import PageHeader from "../components/PageHeader";
import JoinCallToAction from "../components/JoinCallToAction";
import Footer from "../components/Footer";
import { AnimatedLink } from "../components/Link";
import SvgIcon from "@mui/material/SvgIcon";

const pConcealAnimation = {
  opacity: 0,
  transition: "opacity cubic-bezier(0.215, 0.61, 0.355, 1)"
};
const pRevealAnimation = {
  opacity: 1,
  transition: "opacity .15s cubic-bezier(0.215, 0.61, 0.355, 1)"
};

const pageStyles = {
  backgroundColor: "#000"
};

const AccordionIcon = ({
  className,
  expanded
}) =>
  <SvgIcon
    viewBox="0 0 62 62"
    className={className}
    sx={{
      fontSize: {
        xs: 36,
        md: 44,
        lg: 52,
        xl: 60
      },
      svg: {
        fill: "black",
        rect: {
          stroke: "white",
          strokeWidth: {
            xs: 60 * 1.2 / 36,
            md: 60 * 1.2 / 44,
            lg: 60 * 2 / 52,
            xl: 60 * 2 / 60
          }
        },
        path: {
          stroke: "white",
          strokeWidth: {
            xs: 60 * 1.2 / 36,
            md: 60 * 1.2 / 44,
            lg: 60 * 2 / 52,
            xl: 60 * 2 / 60
          }
        }
      },
      "&:hover": {
        svg: {
          fill: "white",
          path: {
            stroke: "black"
          }
        }
      }
    }}
  >
    {expanded ?
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="60" height="60" />
      <path d="M19 31H43" strokeLinecap="square"/>
    </svg>
    :
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="60" height="60"/>
      <path d="M31 19V43" strokeLinecap="square"/>
      <path d="M19 31H43" strokeLinecap="square"/>
    </svg>
    }
  </SvgIcon>
;

const QuestionsAndAnswer = ({
  questionsAndAnswer
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      square
      elevation={0}
      disableGutters
      onChange={() => setExpanded(!expanded)}
      sx={{
        backgroundColor: "#000",
        boxShadow: "none",
        borderBottom: {
          xs: "1px solid #666666",
          lg: "2px solid #666666"
        },
        "&:first-of-type": {
          borderTop: {
            xs: "1px solid #666666",
            lg: "2px solid #666666"
          }
        },
        py: {
          xs: 2,
          md: 3,
          lg: 4,
          xl: 5
        }
      }}
    >
      <AccordionSummary
        expandIcon={<AccordionIcon expanded={expanded} />}
        sx={{
          px: 0,
          [`.${accordionSummaryClasses.root}`]: {
            m: 0
          },
          [`.${accordionSummaryClasses.content}`]: {
            m: 0
          },
          [`.${accordionSummaryClasses.expandIconWrapper}`]: {
            ml: {
              xs: 1,
              md: 5
            },
            transition: "none"
          }
        }}
      >
        <Typography
          variant="h4"
          sx={{
            transform: expanded ? "translateY(-1rem)" : "translateY(0)",
            transition: "transform .15s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        >
          {questionsAndAnswer.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: 0,
          width: "88%"
        }}
      >
        <AnimatedTypography
          variant="pSection"
          concealAnimation={pConcealAnimation}
          revealAnimation={pRevealAnimation}
        >
          {questionsAndAnswer.answer}
        </AnimatedTypography>
      </AccordionDetails>
    </Accordion>
  );
};

const CategoryQuestionsAndAnswers = ({
  questionsAndAnswers
}) => questionsAndAnswers.map((questionAndAnswer) => <QuestionsAndAnswer questionsAndAnswer={questionAndAnswer} />);

const CategorySection = ({ 
  category 
}) => (
  <div
    id={category.title}
  >
    <Typography
      variant="h1"
      sx={{
        pt: {
          xs: 4,
          md: 5,
          lg: 6,
          xl: 7
        }
      }}
    >
      {category.title}
    </Typography>
    <Box
      sx={{
        mt: {
          xs: 4,
          md: 6,
          lg: 8,
          xl: 10
        },
        mb: {
          lg: 1,
          xl: 2
        }
      }}
    >
      <CategoryQuestionsAndAnswers
        questionsAndAnswers={category.questionsAndAnswers}
      />
    </Box>
  </div>
);

const CategorySections = ({
  categories
}) => categories.map((category) => <CategorySection category={category} />);

const CategoryList = ({
  categories
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const getNavColor = useCallback((categoryTitle, index, length) => {
    const category = document.getElementById(categoryTitle);
    if (category === null && index === 0) return "white";
    if (category === null) return "#666666";
    const offsetY = -window.innerHeight/2;
    const fromTop = scrollTop + offsetY;
    if (
      (index === 0 && category.offsetTop > fromTop) ||
      (index === length - 1 && category.offsetTop <= fromTop) ||
      (category.offsetTop <= fromTop &&
      category.offsetTop + category.clientHeight > fromTop)
    ) {
      return "white";
    } else {
      return "#666666";
    }
  }, [scrollTop]);
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      spacing={{
        lg: 5,
        xl: 6
      }}
      sx={{
        position: "sticky",
        top: {
          lg: 48,
          xl: 56,
        },
        mt: {
          lg: 6,
          xl: 7
        },
        pb: {
          lg: 8,
          xl: 10
        }
      }}
    >
      {categories.map((category, index) => (
      <AnimatedLink
        color={getNavColor(category.title, index, categories.length)}
        onClick={() => {
          const options = ({ block: "start", behavior: "smooth" });
          document.getElementById(category.title).scrollIntoView(options);
        }}
      >
        <Typography
          variant="caption2"
        >
          {category.title}
        </Typography>
      </AnimatedLink>
      ))}
    </Stack>
)};

const FAQsPage = ({
  data,
  location
}) => {
  const {
    faqsPageJson: {
      hero,
      categories
    }
  } = data;
  return (
    <div style={pageStyles}>
      <Navbar />
      <main>
        <PageHeader
          title={hero.title}
          lead={hero.lead}
          backgroundImage={hero.backgroundImage}
        />
        <Section
          sx={{
            pt: {
              xs: 0,
              md: 1,
              lg: 2,
              xl: 3
            }
          }}
        >
          <Grid
            lg={3}
            sx={{
              display: {
                xs: "none",
                lg: "block",
              }
            }}
          >
            <CategoryList categories={categories} />
          </Grid>
          <Grid
            xs={12}
            lg={9}
          >
            <CategorySections categories={categories} />
          </Grid>
        </Section>
        <JoinCallToAction
          location={location}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default FAQsPage;

export const FAQsPageQuery = graphql`
  query {
    faqsPageJson {
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
      categories {
        title
        description
        questionsAndAnswers {
          question
          answer
        }
      }
    }
  }
`;

export const Head = ({
  location
}) =>
  <Seo
    title={"Frequently Asked Questions"}
    location={location}
  />
;
