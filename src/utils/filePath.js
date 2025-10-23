const {
  STATIC_CONTENT_DIR_PATH
} = require("@openeventkit/event-site/src/utils/filePath");

const FAQS_PAGE_FILE_PATH = `${STATIC_CONTENT_DIR_PATH}/faqs-page/index.json`;
const TERMS_PAGE_FILE_PATH = `${STATIC_CONTENT_DIR_PATH}/terms-page/index.json`;
const TRAVEL_PAGE_FILE_PATH = `${STATIC_CONTENT_DIR_PATH}/travel-page/index.json`;
const ON_SITE_INFO_PAGE_FILE_PATH = `${STATIC_CONTENT_DIR_PATH}/on-site-info-page/index.json`;

exports.FAQS_PAGE_FILE_PATH = FAQS_PAGE_FILE_PATH;
exports.TERMS_PAGE_FILE_PATH = TERMS_PAGE_FILE_PATH;
exports.TRAVEL_PAGE_FILE_PATH = TRAVEL_PAGE_FILE_PATH;
exports.ON_SITE_INFO_PAGE_FILE_PATH = ON_SITE_INFO_PAGE_FILE_PATH;