
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
  type ImageContentSection {
    title: String
    image: ImageWithAlt
    content: String
  }
  type OnSiteInfoPageJson implements Node {
    hero: PageHeader
    map: ImageContentSection
  }
`;
