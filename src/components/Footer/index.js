import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GridContainer } from "../Grid";
import Link, { AnimatedLink } from "../Link";

const footerQuery = graphql`
  query {
    footerJson {
      social {
        src {
          childImageSharp {
            gatsbyImageData (
              quality: 100
            )
          }
        }
        hover {
          childImageSharp {
            gatsbyImageData (
              placeholder: NONE
            )
          }
        }
        alt
        link
      }
      links {
        text
        link
      }
      logo {
        src {
          childImageSharp {
            gatsbyImageData (
              quality: 100
              placeholder: NONE
            )
          }
        }
        alt
        link
      }
    }
  }
`;

const SocialNetworks = styled(GridContainer)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)"
  },
  ...(
    theme.unstable_sx({
      pt: {
        xs: 3.5,
        md: 5.5,
        lg: 7.5,
        xl: 9.5
      }
    })
  )
}));

const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 60,
  width: 60,
  img: {
    height: 24,
    width: 24
  },
  "&:hover": {
    backgroundColor: "white"
  }
}));

const NetworkLink = ({
  to,
  image,
  hoverImage,
  hoverImageUrl,
  alt,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  return (
    <StyledLink
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ?
      <>
        {hoverImage &&
        <GatsbyImage
          image={image}
          alt={alt ?? ""}
          {...rest}
        />
        }
        {hoverImageUrl &&
        <img
          src={hoverImageUrl}
          alt={alt ?? ""}
          {...rest}
        />
        }
      </>
      :
      <>
        {hoverImage &&
        <GatsbyImage
          image={image}
          alt={alt ?? ""}
          style={{
            position: "absolute"
          }}
          {...rest}
        />
        }
        {hoverImageUrl &&
        <img
          src={hoverImageUrl}
          alt={alt ?? ""}
          style={{
            position: "absolute"
          }}
          {...rest}
        />
        }
        <GatsbyImage
          image={image}
          alt={alt ?? ""}
          style={{
            position: "absolute"
          }}
          {...rest}
        />
      </>
      }
    </StyledLink>
  );
};

const FooterLinks = styled(GridContainer)(({ theme }) => ({
  justifyContent: "center",
  textTransform: "uppercase",
  color: "white",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridRowGap: 8
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: 32
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: 32
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: 40
  }
}));

const FooterLinkItem = styled(Grid)(({ theme }) => ({
  //backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    minHeight: 32,
    minWidth: 144
  },
  [theme.breakpoints.down("lg")]: {
    maxHeight: 14,
  },
  [theme.breakpoints.up("lg")]: {
    maxHeight: 16,
  }
}));

const LogoContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: 48,
    paddingBottom: 32
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: 48,
    paddingBottom: 48
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: 64,
    paddingBottom: 64
  },
  [theme.breakpoints.up("xl")]: {
    paddingTop: 80,
    paddingBottom: 80
  }
}));

const Logo = styled(Grid)(({ theme }) => ({
  //backgroundColor: "red",
  [theme.breakpoints.down("md")]: {
    height: 16,
    width: 88.53
  },
  [theme.breakpoints.up("md")]: {
    height: 24,
    width: 132.8
  }
}));

const Footer = () => {
  const {
    footerJson: {
      social,
      links,
      logo
    }
  } = useStaticQuery(footerQuery);
  return (
    <div
      style={{backgroundColor: "#000"}}
    >
      <SocialNetworks
        rowSpacing={1}
      >
        {social?.map((network, index) => (
          <Grid key={index}>
            <NetworkLink
              to={network.link}
              image={getImage(network.src)}
              hoverImageUrl={getSrc(network.hover)}
              alt={network.alt ?? ""}
            />
          </Grid>
        ))}
      </SocialNetworks>
      <FooterLinks
        rowSpacing={0}
      >
        {links?.map((link, index) => (
        <FooterLinkItem key={index}>
          {link.link ?
          <AnimatedLink to={link.link}>
            <Typography
              variant="caption2"
              style={{
                color: "white",
              }}
            >
              {link.text}
            </Typography>
          </AnimatedLink>
          :
          <Typography
            variant="caption2"
            style={{
              color: "white",
            }}
          >
            {link.text}
          </Typography>
          }
        </FooterLinkItem>
        ))}
      </FooterLinks>
      <LogoContainer
        container
        spacing={0}
      >
        <Logo>
          {logo.link ?
          <Link to={logo.link}>
            <GatsbyImage
              image={getImage(logo.src)}
              alt={logo.alt ?? ""}
            />
          </Link>
          :
          <GatsbyImage
            image={getImage(logo.src)}
            alt={logo.alt ?? ""}
          />
          }
        </Logo>
      </LogoContainer>
    </div>
  );
};

export default Footer;
