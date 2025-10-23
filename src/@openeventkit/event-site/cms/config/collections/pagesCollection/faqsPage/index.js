import {
  stringField,
  objectField,
  imageWithAltField,
  markdownField,
  listField
} from "@openeventkit/event-site/src/cms/config/fields";

import {
  FAQS_PAGE_FILE_PATH
} from "utils/filePath";

const markdownFieldButtons = [
  "bold",
  "italic",
  "link"
];

const faqsPage = {
  label: "FAQS Page",
  name: "faqs-page",
  file: FAQS_PAGE_FILE_PATH,
  fields: [
    objectField({
      label: "Hero",
      name: "hero",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        markdownField({
          label: "Lead",
          name: "lead",
          buttons: markdownFieldButtons,
          editor_components: []
        }),
        imageWithAltField({
          label: "Background Image",
          name: "backgroundImage"
        })
      ]
    }),
    listField({
      label: "Categories",
      name: "categories",
      fields: [
        stringField({
          label: "Title",
          name: "title"
        }),
        stringField({
          label: "Description",
          name: "description"
        }),
        listField({
          label: "Questions & Answers",
          name: "questionsAndAnswers",
          fields: [
            stringField({
              label: "Question",
              name: "question"
            }),
            stringField({
              label: "Answer",
              name: "answer"
            })
          ]
        })
      ]
    })
  ]
};

export default faqsPage;
