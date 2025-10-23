import createCache from "@emotion/cache";

const createEmotionCache = (options) => createCache(options ?? { key: "css" });

export default createEmotionCache;