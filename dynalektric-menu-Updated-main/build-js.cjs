/**
 * build-js.cjs — Dynalektric build-time JSX transpiler
 *
 * Replaces browser-side Babel Standalone with a build-step transpile.
 * Uses esbuild's transform API (NOT bundle) so:
 *   - All existing window.* global variables are preserved unchanged
 *   - CDN React / ReactDOM globals continue to work (no import needed)
 *   - The current multi-file script loading order in each HTML page is preserved
 *   - Source JSX files are never overwritten
 *
 * Output: build/<filename>.js for each JSX source file
 *
 * Script loading order in HTML pages (unchanged):
 *   tweaks-panel.js → shared.js → header.js → page-*.js → app.js
 */

'use strict';

const { transformSync } = require('esbuild');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const BUILD_DIR = path.join(ROOT, 'build');

// All JSX source files, in dependency order (for documentation — individual
// files are transpiled separately, not bundled, so order here is reference only)
const JSX_FILES = [
  'tweaks-panel.jsx',
  'shared.jsx',
  'header.jsx',
  'page-home.jsx',
  'page-about.jsx',
  'page-contact.jsx',
  'page-products.jsx',
  'page-rnd.jsx',
  'page-industries.jsx',
  'page-export-data.jsx',
  'page-export.jsx',
  'app.jsx',
];

// Ensure build output directory exists
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

let errorCount = 0;

for (const fileName of JSX_FILES) {
  const sourcePath = path.join(ROOT, fileName);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`[build-js] Skipping missing file: ${fileName}`);
    continue;
  }

  const outputName = fileName.replace(/\.jsx$/, '.js');
  const outputPath = path.join(BUILD_DIR, outputName);

  try {
    const source = fs.readFileSync(sourcePath, 'utf8');

    // esbuild transform: JSX → plain JS, no bundling, no module wrapping.
    // jsxFactory / jsxFragment match the CDN React global available in the browser.
    const result = transformSync(source, {
      loader: 'jsx',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      // Target a broad browser baseline — esbuild keeps the output readable
      // and compatible without aggressive downleveling.
      target: 'es2017',
      // No sourcemap in the output — the source JSX files themselves serve as
      // the development reference. Enable if debugging is needed.
      sourcemap: false,
      // No minification — keep output readable for QA and debugging.
      minify: false,
    });

    fs.writeFileSync(outputPath, result.code, 'utf8');
    console.log(`[build-js] ✓ ${fileName} → build/${outputName} (${result.code.length} bytes)`);
  } catch (err) {
    console.error(`[build-js] ✗ Failed to transpile ${fileName}:`, err.message);
    errorCount++;
  }
}

if (errorCount > 0) {
  console.error(`[build-js] Build failed with ${errorCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log('[build-js] All JSX files transpiled successfully.');
}
