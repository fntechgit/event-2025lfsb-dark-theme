
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
  type VenueImageContentSection {
    title: String
    image: ImageWithAlt
    content: String
    address: String
  }
  type BookingLink {
    text: String
    link: String
  }
  type AccommodationsHotel {
    name: String
    info: String
    book: BookingLink
  }
  type AccommodationsSection {
    title: String
    content: String
    hotels: [AccommodationsHotel]
  }
  type Airport {
    name: String
    image: ImageWithAlt
    distance: String
  }
  type AirportsSection {
    title: String
    airports: [Airport]
  }
  type TravelPageJson implements Node {
    hero: PageHeader
    venue: VenueImageContentSection
    thingsToDo: ImageContentSection
    accommodations: AccommodationsSection
    nearbyAirports: AirportsSection
  }
`;
