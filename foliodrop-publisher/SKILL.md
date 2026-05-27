---
name: foliodrop-publisher
description: Use this skill when the user wants to create, polish, validate, or publish a complete single-file HTML work through FolioDrop, including beautiful shareable decks, resumes, email campaign previews, one-pages, portfolio case studies, posters, demos, or AI-made HTML pages.
---

# FolioDrop Publisher

## Overview

Turn an idea or existing HTML into a polished single-file HTML work, validate that it is FolioDrop-ready, then publish it through FolioDrop or guide the user to the manual connection path.

FolioDrop publishes one complete HTML work as a real shareable URL. It is not for ZIP sites, framework deployments, or multi-page apps.

## Workflow

1. Determine the job type:
   - Existing HTML to publish: inspect and validate the file.
   - New visual work: choose a template category from `assets/templates/`.
   - Account management: use FolioDrop tools to list or delete works when available.
2. If creating a visual work, read `references/template-selection.md` and only load the relevant template asset.
3. Generate or adapt one complete HTML document with inline CSS and inline JavaScript.
4. Read `references/publishing-contract.md` before publishing or when constraints are unclear.
5. Run `scripts/validate_single_file_html.mjs <file>` before any publish attempt.
6. Publish with FolioDrop when a connected MCP/OpenAPI tool or valid user-provided auth path is available.
7. Return the share URL, access mode, and any deletion or expiry note that the tool returns. Do not expose private tokens.

## Publishing Paths

Prefer the path already available in the agent host:

- Remote MCP: `https://foliodrop.app/mcp`
- Public MCP descriptor: `https://foliodrop.app/api/ai/mcp-config.json`
- OpenAPI: `https://foliodrop.app/api/ai/openapi.json`
- Manual fallback: ask the user to open `https://foliodrop.app/ai` to connect an AI tool, or `https://foliodrop.app/publish` to paste/upload manually.

Use public link access by default. Use access-key protection only when the user explicitly asks for it or the content is sensitive.

## Template Pack

Bundled HTML-first template categories:

- `assets/templates/deck/product-demo.html`: 16:9 presentation deck.
- `assets/templates/resume/operator-resume.html`: polished resume/profile page.
- `assets/templates/email-campaign/product-launch.html`: product launch email preview.
- `assets/templates/onepage/micro-saas-launch.html`: public one-page product launch.
- `assets/templates/portfolio/case-study.html`: design portfolio case study.

Templates are assets, not required reading. Copy one template, replace the content, then keep the output as a complete HTML document.

## Quality Bar

Read `references/visual-quality-rules.md` for visual work. The output should feel designed, not merely formatted. Prefer specific content, strong hierarchy, restrained color, responsive layout, and share-safe defaults.

## Safety

Read `references/auth-and-safety.md` before handling tokens, private works, access keys, or user content that may be sensitive. Never print, store, or summarize a private token.

## Examples

Read `references/examples.md` for prompt patterns and expected outputs.
