import defaultConfig from "@openeventkit/event-site/src/cms/config";
import { collections as defaultCollections } from "@openeventkit/event-site/src/cms/config";
import pagesCollection from "./collections/pagesCollection";

export const collections = defaultCollections.concat([
  pagesCollection
]);

const config = { ...defaultConfig };
config.collections = collections;

export default config;