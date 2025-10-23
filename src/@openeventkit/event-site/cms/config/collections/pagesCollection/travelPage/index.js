import {
  stringField,
  textField,
  markdownField,
  imageWithAltField,
  objectField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  TRAVEL_PAGE_FILE_PATH
} from "utils/filePath";

const markdownFieldButtons = [
  "heading-four"
];

const travelPage = {
  label: "Travel Page",
  name: "travel-page",
  file: TRAVEL_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        textField({
          label: "Lead",
          name: "lead",
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        })
      ]
    }),
    objectField({
      label: "Venue",
      name: "venue",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        imageWithAltField({
          label: "Image",
          name: "image"
        }),
        markdownField({
          label: "Content",
          name: "content",
          buttons: markdownFieldButtons,
          editor_components: []
        }),
        stringField({
          label: "Venue Address",
          name: "address"
        }),
      ]
    }),
    objectField({
      label: "Things to Do",
      name: "thingsToDo",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        imageWithAltField({
          label: "Image",
          name: "image"
        }),
        textField({
          label: "Content",
          name: "content"
        })
      ]
    }),
    objectField({
      label: "Accommodations",
      name: "accommodations",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        textField({
          label: "Content",
          name: "content"
        }),
        listField({
          label: "Hotels",
          name: "hotels",
          fields: [
            stringField({
              label: "Name",
              name: "name"
            }),
            textField({
              label: "Info",
              name: "info"
            }),
            objectField({
              label: "Book",
              name: "book",
              fields: [
                stringField({
                  label: "Text",
                  name: "text"
                }),
                stringField({
                  label: "Link",
                  name: "link"
                })
              ]
            })
          ]
        })
      ]
    }),
    objectField({
      label: "Nearby Airports",
      name: "nearbyAirports",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        listField({
          label: "Airports",
          name: "airports",
          fields: [
            stringField({
              label: "Name",
              name: "name"
            }),
            imageWithAltField({
              label: "Image",
              name: "image"
            }),
            stringField({
              label: "Distance",
              name: "distance"
            })
          ]
        })
      ]
    })
  ]
};

export default travelPage;
