const puppeteer = require("puppeteer");
const http = require("http");
const fs = require("fs");
const path = require("path");

// Step 0: Compile JSX source to browser-ready JavaScript before prerendering.
// This replaces Babel Standalone runtime compilation with a build-time step.
console.log("Compiling JSX to JavaScript (esbuild)...");
require("./build-js.cjs");

const ROOT_DIR = __dirname;
const OUTPUT_DIR = path.join(ROOT_DIR, "dist");
const PORT = 4173;
const BUILD_MODE = process.env.BUILD_MODE || "staging";

const robotsValue =
  BUILD_MODE === "production"
    ? "index, follow"
    : "noindex, nofollow";
const staticItems = [
  "assets",
  "public",
  "styles.css",
  "page-styles.css",
  "export-styles.css",
  "image-slot.js",
  "tweaks-panel.jsx",
  "shared.jsx",
  "header.jsx",
  "page-home.jsx",
  "page-about.jsx",
  "page-contact.jsx",
  "page-products.jsx",
  "page-rnd.jsx",
  "page-industries.jsx",
  "page-export-data.jsx",
  "page-export.jsx",
  "app.jsx",
  "build",
  "robots.txt",
  "sitemap.xml",
];

const pages = [
  "index.html",
  "Dynalektric.html",
  "about.html",
  "products-solutions.html",
  "innovation-rd.html",
  "industries-applications.html",
  "export.html",
  "contact.html",
];

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".jsx": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  let requestPath = decodeURIComponent(req.url.split("?")[0]);

  if (requestPath === "/") {
    requestPath = "/index.html";
  }

  const filePath = path.join(ROOT_DIR, requestPath);

  if (!filePath.startsWith(ROOT_DIR)) {
    console.log(`[prerender-server] 403 Forbidden: ${req.url}`);
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      const status = error.code === "ENOENT" ? 404 : 500;
      console.log(`[prerender-server] ${status} ${error.code === "ENOENT" ? "Not Found" : "Error"}: ${req.url}`);
      res.writeHead(status);
      res.end(error.code === "ENOENT" ? "Not Found" : "Server Error");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    console.log(`[prerender-server] 200 OK: ${req.url}`);
    res.writeHead(200, {
      "Content-Type": contentType,
    });

    res.end(content);
  });
});

async function prerender() {
  let browser;
  fs.rmSync(OUTPUT_DIR, {
  recursive: true,
  force: true,
});

fs.mkdirSync(OUTPUT_DIR, {
  recursive: true,
});

for (const item of staticItems) {
  const sourcePath = path.join(ROOT_DIR, item);
  const outputPath = path.join(OUTPUT_DIR, item);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`Skipping missing static item: ${item}`);
    continue;
  }

  fs.cpSync(sourcePath, outputPath, {
    recursive: true,
  });
}

console.log("Static assets copied to dist.");
console.log(`Build mode: ${BUILD_MODE}`);
console.log(`Robots directive: ${robotsValue}`);
const robotsContent =
  BUILD_MODE === "production"
    ? `User-agent: *
Allow: /

Sitemap: https://dynalektric.com/sitemap.xml
`
    : `User-agent: *
Disallow: /
`;

fs.writeFileSync(
  path.join(OUTPUT_DIR, "robots.txt"),
  robotsContent,
  "utf8"
);

console.log(`robots.txt generated for ${BUILD_MODE}.`);
  try {
    await new Promise((resolve) => {
      server.listen(PORT, "127.0.0.1", resolve);
    });

    console.log(`Local server running at http://127.0.0.1:${PORT}`);

    browser = await puppeteer.launch({
      headless: true,
    });

    for (const pageFile of pages) {
      const page = await browser.newPage();

      page.on("console", (message) => {
        if (message.type() === "error") {
          console.error(`[${pageFile}] Browser error: ${message.text()}`);
        }
      });

      page.on("pageerror", (error) => {
        console.error(`[${pageFile}] Page error: ${error.message}`);
      });

      const pageUrl = `http://127.0.0.1:${PORT}/${pageFile}`;

      console.log(`Rendering ${pageFile}...`);

      await page.goto(pageUrl, {
        waitUntil: "networkidle0",
        timeout: 120000,
      });

      await page.waitForSelector("#app h1, #app h2", {
        timeout: 30000,
      });

      const renderedHtml = await page.content();
      const finalHtml = renderedHtml.replace(
      /<meta name="robots" content="[^"]*"\s*\/?>/i,
      `<meta name="robots" content="${robotsValue}" />`
    );

      
fs.writeFileSync(
  path.join(OUTPUT_DIR, pageFile),
  finalHtml,
  "utf8"
);

      console.log(`Prerendered ${pageFile}`);

      await page.close();
    }

    console.log("All Dynalektric pages prerendered successfully.");
  } catch (error) {
    console.error("Prerender failed:", error);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }

    server.close();
  }
}

prerender();