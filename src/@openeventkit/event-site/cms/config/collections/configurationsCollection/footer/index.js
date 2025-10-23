import {
  stringField,
  imageField,
  linkImageField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  FOOTER_FILE_PATH
} from "@utils/filePath";

const linkImagesWithHoverField = ({
  label = "Link Images With Hover",
  name = "link-images-with-hover",
  required = false,
  imageRequired = false,
  ...rest
} = {}) => listField({
  label,
  name,
  required,
  fields: [
    imageField({
      label: "Src",
      name: "src",
      required: imageRequired
    }),
    imageField({
      label: "Hover src",
      name: "hover",
      required: imageRequired
    }),
    stringField({
      label: "Alt",
      name: "alt",
      required: false
    }),
    stringField({
      label: "Link",
      name: "link",
      required: false
    })
  ],
  ...rest
});

const footer = {
  label: "Footer",
  name: "footer",
  media_folder: "",
  public_folder: "",
  file: FOOTER_FILE_PATH,
  fields: [
    linkImagesWithHoverField({
      label: "Social",
      name: "social",
      imageRequired: true
    }),
    listField({
      label: "Links",
      name: "links",
      fields: [
        stringField({
          label: "Text",
          name: "text",
          required: true
        }),
        stringField({
          label: "Link",
          name: "link",
          required: true
        })
      ]
    }),
    linkImageField({
      label: "Logo",
      name: "logo"
    })
  ]
};

export default footer;