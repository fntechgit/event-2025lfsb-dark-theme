import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./src/utils/createEmotionCache";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./src/theme";

import { HeadComponents } from "./src/components/HeadComponents";

export const replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const cache = createEmotionCache();
  const {
    extractCritical,
  } = createEmotionServer(cache);

  const html = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {bodyComponent}
      </ThemeProvider>
    </CacheProvider>
  );

  const { css, ids } = extractCritical(html);
  const style = (
    <style
      key="theme-styles"
      data-emotion={`css ${ids.join(" ")}`}
      dangerouslySetInnerHTML={{ __html: css }}
    />
  );

  setHeadComponents([style]);
  replaceBodyHTMLString(html);
};

export const onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  setHeadComponents(HeadComponents);
};
