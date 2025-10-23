
module.exports = `
  type ImageWithAlt {
    src: File @fileByRelativePath
    alt: String
  }
  type PageHeader {
    title: String
    lead: String
    backgroundImage: ImageWithAlt
  }
  type TermsPageJson implements Node {
    hero: PageHeader
  }
`;
