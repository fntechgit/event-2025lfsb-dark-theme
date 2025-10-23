import {
  collectionDefaults
} from "@openeventkit/event-site/src/cms/config/patterns";

import faqsPage from "./faqsPage";
import termsPage from "./termsPage";
import travelPage from "./travelPage";
import onSiteInfoPage from "./onSiteInfoPage";

const pagesCollection = {
  ...collectionDefaults({
    label: "Pages",
    name: "pages"
  }),
  files: [
    faqsPage,
    termsPage,
    travelPage,
    onSiteInfoPage
  ]
};

export default pagesCollection;