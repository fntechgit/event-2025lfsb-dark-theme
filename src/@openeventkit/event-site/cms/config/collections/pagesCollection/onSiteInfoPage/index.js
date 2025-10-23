import {
  stringField,
  textField,
  markdownField,
  imageWithAltField,
  objectField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  ON_SITE_INFO_PAGE_FILE_PATH
} from "utils/filePath";

const infoContentMarkdownFieldButtons = [
  "bold",
  "italic",
  "link"
];

const onSiteInfoPage = {
  label: "On-Site Info Page",
  name: "on-site-info-page",
  file: ON_SITE_INFO_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        textField({
          label: "Lead",
          name: "lead"
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        })
      ]
    }),
    objectField({
      label: "Map",
      name: "map",
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
    listField({
      label: "Info",
      name: "info",
      fields: [
        textField({
          label: "Title",
          name: "title"
        }),
        markdownField({
          label: "Content",
          name: "content",
          buttons: infoContentMarkdownFieldButtons,
          editor_components: []
        })
      ]
    })
  ]
};

export default onSiteInfoPage;
