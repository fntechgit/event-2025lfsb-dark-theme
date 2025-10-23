const configurationsCollectionTypeDefs = require("./configurationsCollection/typeDefs");
const defaultPagesCollectionTypeDefs = require("./defaultPagesCollection/typeDefs");
const pagesCollectionTypeDefs = require("./pagesCollection/typeDefs");

module.exports = [
  configurationsCollectionTypeDefs,
  defaultPagesCollectionTypeDefs,
  pagesCollectionTypeDefs
].join("");