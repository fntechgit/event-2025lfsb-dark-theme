
module.exports = `
  type LinkImageWithHover {
    src: File @fileByRelativePath
    hover: File @fileByRelativePath
    alt: String
    link: String
  }
  type LinkImageWithAlt {
    src: File @fileByRelativePath
    alt: String
    link: String
  }
  type FooterLink {
    text: String
    link: String
  }
  type FooterJson implements Node {
    social: [LinkImageWithHover]
    links: [FooterLink]
    logo: LinkImageWithAlt
  }
`;