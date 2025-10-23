
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = require("./src/@openeventkit/event-site/cms/config/collections/typeDefs");
  createTypes(typeDefs);
};

// Don't delete pages - let them fail gracefully during build
// The build will continue with client-side only rendering for failed pages

// Create fallback 404.html for gatsby serve if SSR fails
exports.onPostBuild = ({ store }) => {
  const fs = require('fs');
  const path = require('path');
  const { program } = store.getState();
  const publicPath = path.join(program.directory, 'public');
  const html404Path = path.join(publicPath, '404.html');

  // Only create fallback if 404.html doesn't exist (SSR failed)
  if (!fs.existsSync(html404Path)) {
    const fallback404 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background: #000;
            color: #fff;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 4rem;
            margin: 0 0 1rem 0;
        }
        p {
            font-size: 1.2rem;
            margin: 0 0 2rem 0;
        }
        a {
            color: #fff;
            text-decoration: none;
            border: 2px solid #fff;
            padding: 0.75rem 2rem;
            border-radius: 4px;
            transition: background 0.3s;
        }
        a:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <p>Page not found</p>
        <a href="/">Go home</a>
    </div>
</body>
</html>`;

    fs.writeFileSync(html404Path, fallback404);
    console.log('✓ Created fallback 404.html (SSR failed, using client-side fallback)');
  }
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Exclude Swiper from SSR to prevent "window is not defined" errors
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /swiper/,
            use: require.resolve("null-loader"),
          },
        ],
      },
    });
  }
};
