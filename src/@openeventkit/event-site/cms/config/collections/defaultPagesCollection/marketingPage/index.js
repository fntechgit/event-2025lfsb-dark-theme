import {
  booleanField,
  stringField,
  textField,
  fileField,
  markdownField,
  imageWithAltField,
  objectField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  MARKETING_PAGE_FILE_PATH
} from "@openeventkit/event-site/src/utils/filePath";

const markdownFieldButtons = [
  "heading-four"
];

const marketingPage = {
  label: "Marketing Page",
  name: "marketing-page",
  file: MARKETING_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        stringField({
          label: "Lead Title",
          name: "leadTitle"
        }),
        textField({
          label: "Lead",
          name: "lead"
        }),
        objectField({
          label: "Buttons",
          name: "buttons",
          fields: [
            objectField({
              label: "Register Button",
              name: "registerButton",
              fields: [
                textField({
                  label: "Text",
                  name: "text"
                }),
                booleanField({
                  label: "Display",
                  name: "display"
                })
              ]
            }),
            objectField({
              label: "Login Button",
              name: "loginButton",
              fields: [
                textField({
                  label: "Text",
                  name: "text"
                }),
                booleanField({
                  label: "Display",
                  name: "display"
                })
              ]
            })
          ]
        }),
        fileField({
          label: "Background Media",
          name: "backgroundMedia",
          hint: "1280x720 mp4, around 15mb in size, no sound, moov atom at the begining. Images accepted."
        })
      ]
    }),
    objectField({
      label: "Featuring",
      name: "featuring",
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
      label: "Attend",
      name: "attend",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        listField({
          label: "Benefits",
          name: "benefits",
          fields: [
            stringField({
              label: "Concept",
              name: "concept"
            }),
            stringField({
              label: "Description",
              name: "description"
            }),
            imageWithAltField({
              label: "Background Image",
              name: "backgroundImage"
            }),
            imageWithAltField({
              label: "Foreground Image",
              name: "foregroundImage"
            })
          ]
        })
      ]
    }),
    objectField({
      label: "Awards",
      name: "awards",
      fields: [
        stringField({
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
        })
      ]
    }),
    objectField({
      label: "Call To Action",
      name: "callToAction",
      fields: [
        booleanField({
          label: "Display",
          name: "display",
          default: true
        }),
        stringField({
          label: "Title",
          name: "title"
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        }),
        objectField({
          label: "Buttons",
          name: "buttons",
          fields: [
            objectField({
              label: "Register Button",
              name: "registerButton",
              fields: [
                textField({
                  label: "Text",
                  name: "text"
                }),
                booleanField({
                  label: "Display",
                  name: "display"
                })
              ]
            }),
            objectField({
              label: "Login Button",
              name: "loginButton",
              fields: [
                textField({
                  label: "Text",
                  name: "text"
                }),
                booleanField({
                  label: "Display",
                  name: "display"
                })
              ]
            })
          ]
        })
      ]
    })
  ]
};

export default marketingPage;
