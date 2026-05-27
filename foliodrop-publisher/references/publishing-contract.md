# FolioDrop Publishing Contract

Use this reference before publishing or when adapting generated HTML.

## Required HTML Shape

- One complete HTML document.
- Must include `<!doctype html>`, `<html>`, `<head>`, and `<body>`.
- Inline CSS in `<style>`.
- Inline JavaScript in `<script>` only when needed.
- External images, fonts, and media must use public `https://` URLs.
- No local files, build outputs, ZIP references, framework entrypoints, or relative asset paths.

## Product Boundary

FolioDrop is for finished single-file HTML works:

- Good fit: decks, resumes, one-pages, product demos, posters, portfolios, client previews.
- Bad fit: multi-page apps, React/Vite/Next source projects, ZIP sites, private file bundles, server-side apps.

## Publish Defaults

- Default access mode: public link.
- Use access key only when the user explicitly asks or when the content is sensitive.
- Access-key works should not be treated as public portfolio items.
- Do not include access keys in URLs unless FolioDrop explicitly returns such a URL.

## AI Publishing Surfaces

- Remote MCP endpoint: `https://foliodrop.app/mcp`
- Public MCP descriptor: `https://foliodrop.app/api/ai/mcp-config.json`
- OpenAPI description: `https://foliodrop.app/api/ai/openapi.json`

Expected tools:

- `publish_work`: publish one complete HTML work and return a share URL.
- `list_my_works`: list account-owned works.
- `delete_work`: remove an account-owned work.

## Pre-Publish Checklist

- Title is human-readable.
- HTML passes `scripts/validate_single_file_html.mjs`.
- Page works on mobile and desktop.
- Any external asset uses public HTTPS.
- Sensitive content has access-key protection or is removed.
- No private token, credential, API key, or personal secret is embedded.
