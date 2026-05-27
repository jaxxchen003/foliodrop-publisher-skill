# Examples

## Existing HTML

User:

> Publish this HTML to FolioDrop.

Agent:

1. Save or inspect the HTML.
2. Run `scripts/validate_single_file_html.mjs`.
3. Publish with `publish_work` if connected.
4. Return the share URL and access mode.

## One-Page

User:

> Make a one-page for my micro SaaS and publish it.

Agent:

1. Use `assets/templates/onepage/micro-saas-launch.html`.
2. Replace placeholders with the user's product facts.
3. Validate.
4. Publish.

## Deck

User:

> Turn this product idea into a short pitch deck link.

Agent:

1. Use `assets/templates/deck/product-demo.html`.
2. Create 5 to 8 slides.
3. Keep one idea per slide.
4. Validate and publish.

## Resume

User:

> Build me a designer resume page I can share.

Agent:

1. Use `assets/templates/resume/operator-resume.html`.
2. Ask only for missing high-impact facts if the resume cannot be credible without them.
3. Validate and publish.

## Protected Client Preview

User:

> Publish this client preview privately.

Agent:

1. Validate the HTML.
2. Use access-key protection.
3. Do not reveal the access key except through the returned FolioDrop result or explicit user-approved channel.
