# Auth And Safety

## Token Handling

- Treat FolioDrop AI tokens like passwords.
- Never print, store, screenshot, or summarize private tokens.
- Do not commit tokens into generated HTML, markdown, logs, or final responses.
- If a token appears in user-provided text, avoid repeating it and recommend rotation if it may have been exposed.

## Connection Flow

When no publishing tool is already connected:

1. Ask the user to open `https://foliodrop.app/ai`.
2. They can review the public MCP and OpenAPI setup without signing in.
3. They sign in only when they need a private AI connection token or OAuth authorization.
4. For generic MCP clients, configure `https://foliodrop.app/mcp` with an `Authorization: Bearer <token>` header.
5. For OpenAPI-compatible tools, use `https://foliodrop.app/api/ai/openapi.json` and bearer auth.

## Sensitive Works

Use access-key protection when:

- The work contains client previews.
- The work contains private career or personal information.
- The user asks for a private or protected link.
- Public sharing would create obvious reputational or privacy risk.

Do not overstate access-key protection. It is sharing control, not a replacement for removing sensitive data.

## Content Safety

Do not publish content designed for credential theft, malware, harassment, illegal behavior, or hidden tracking. Remove secrets, private keys, and account credentials before publishing.
