// @ts-check
import { defineConfig } from "astro/config";

// When deploying to GitHub Pages, the base path is set automatically
// by the GitHub Actions workflow. For local dev, it defaults to '/'.
const envBase = process.env.BASE_PATH || "/";
const base = envBase === "/" ? "/" : `/${envBase.replace(/^\/|\/$/g, "")}/`;

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://example.github.io",
  base,
});
