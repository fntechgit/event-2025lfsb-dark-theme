#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');
const html404Path = path.join(publicPath, '404.html');
const indexHtmlPath = path.join(publicPath, 'index.html');

// Create fallback 404.html if it doesn't exist
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
} else {
  console.log('✓ 404.html already exists (SSR succeeded)');
}

// CRITICAL: Check if index.html exists - if not, the build completely failed
if (!fs.existsSync(indexHtmlPath)) {
  console.error('');
  console.error('⚠️  WARNING: No index.html generated! The build completely failed at SSR.');
  console.error('⚠️  This means gatsby serve will NOT work.');
  console.error('');
  console.error('The issue is that one of the pages in src/pages/ (likely faqs.js) is causing');
  console.error('SSR to fail with browser-only dependencies, which stops Gatsby from generating');
  console.error('HTML for ALL pages including the homepage.');
  console.error('');
  console.error('Solutions:');
  console.error('  1. Use "yarn develop" for local development (no SSR issues)');
  console.error('  2. Deploy to Netlify (will work with client-side rendering)');
  console.error('  3. Temporarily move src/pages/*.js files to allow build to succeed');
  console.error('');
  process.exit(1); // Exit with error so user knows there's a problem
}
