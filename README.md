# Professional Provenance Publisher

A source-controlled publishing system that turns one reviewed professional record into a resume, portfolio, mobile links page, printable PDF, and machine-readable source.

This repository began as the executive technical resume for **Joseph Jeremy Michael Walker, MBA**. It evolved into a multi-surface publisher so the resume could remain one presentation of a broader, version-controlled professional record rather than becoming the only place where career history and evidence are maintained.

> A resume should be generated from a reviewed record of work and evidence—not become the only place that record exists.

## What This Repository Is

The **Professional Provenance Publisher** is a static-first publishing system. One canonical JSON record feeds multiple outputs through a shared normalization layer.

```text
meaningful work
    -> preserved evidence
    -> structured professional record
    -> reviewed commit
    -> resume / portfolio / links / PDF
```

The project is not a Linktree clone, visual resume editor, hosted career platform, or automated truth-verification service.

## What It Produces

The canonical file, `data/resume.json`, feeds:

- `index.html` — executive or conventional resume
- `links/index.html` — compact mobile-first links page
- `portfolio/index.html` — richer professional portfolio
- a printable PDF under `dist/`
- a machine-readable professional record

Generated HTML and PDF files are presentation outputs. Professional content changes belong in the canonical structured source.

## What “Provenance” Means Here

Provenance in this repository means that professional presentation is downstream of an inspectable source record and version history.

The system provides:

- Git history for intentional changes to professional content and publisher behavior;
- structured records rather than independently maintained copies;
- optional evidence URLs attached to publications, systems, and other records;
- one normalization boundary shared by multiple renderers;
- reproducible build and PDF-generation workflows; and
- tests that check publisher behavior and generated-output integrity.

**It does not independently prove that a career claim is true.** Evidence quality, factual accuracy, dates, metrics, credentials, and professional claims remain the responsibility of the repository owner and human reviewer. A URL is a reference to evidence, not automatic verification of that evidence.

## Implemented Boundary

### Implemented

- canonical JSON professional record
- shared `normalizeProfile()` boundary
- resume HTML renderer
- mobile links renderer
- portfolio renderer
- printable PDF generation with Playwright
- optional HTTP/HTTPS evidence links
- surface visibility and ordering metadata
- backward compatibility for selected legacy string records
- renderer and normalization tests
- generated-output smoke tests
- GitHub Actions verification and artifact generation

### Not implemented as core behavior

- automated factual verification of professional claims
- formal JSON Schema enforcement of the canonical record
- hosted multi-user accounts or database-backed editing
- analytics or applicant-tracking infrastructure
- automated recruiter/application submission
- a visual drag-and-drop editor

Future features should preserve the project’s source-controlled, evidence-oriented, static-first architecture rather than quietly turning it into a hosted SaaS product.

## Quick Start

```bash
npm install
npm test
npm run build
npm run render
```

Then open:

- `index.html`
- `links/index.html`
- `portfolio/index.html`

The generated PDF is written under `dist/`.

For the full verification path used by CI:

```bash
npm run verify
npm run render
```

## Canonical Data and Normalization

`data/resume.json` is the source of truth for the owner-specific professional record. The build passes it through the shared `normalizeProfile()` boundary before rendering any public surface.

The normalization layer:

- preserves compatibility with selected legacy plain-text records;
- supports structured `{ title, url }` evidence records;
- accepts clickable destinations only for valid HTTP and HTTPS URLs;
- supplies safe visibility and ordering defaults;
- avoids mutating source data; and
- gives every renderer one consistent model.

Normalization is not factual validation. It makes the data structurally safer and more consistent for rendering.

## Surface Visibility

Structured records can specify where they appear:

```json
{
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": false
  }
}
```

Visibility controls presentation, not truth. A record hidden from a surface remains part of the canonical professional history if it is retained in the source. A links-page record must also contain a valid HTTP or HTTPS URL before it becomes interactive.

## Privacy Boundary

This repository is public. The canonical record should therefore contain only information intentionally suitable for public professional presentation.

Keep the following outside the public mainline unless there is an explicit reason to publish them:

- application-form answers beyond ordinary public profile information;
- recruiter or hiring-process notes;
- interview preparation and private truth-boundary notes;
- private referral details;
- voluntary demographic, veteran, disability, or other sensitive application responses;
- job-application trackers; and
- tailored application packages intended only for a specific employer.

A job-specific resume or cover letter may be derived from the canonical record without becoming part of the canonical public record. Public professional provenance and private application history are different data classes.

## Repository Structure

```text
.
├── data/
│   ├── resume.json
│   └── sample-profile.json
├── links/
│   └── index.html
├── portfolio/
│   └── index.html
├── scripts/
│   ├── profile/
│   │   └── normalize-profile.mjs
│   ├── renderer/
│   ├── build-html.mjs
│   ├── build-links.mjs
│   ├── build-portfolio.mjs
│   └── render-pdf.mjs
├── styles/
├── index.html
├── SCHEMA.md
├── MIGRATION.md
├── DEPLOYMENT.md
└── package.json
```

## Evidence Workflow

At the end of a noteworthy sprint, ask:

> What evidence did this work produce that future readers should be able to inspect, understand, or ask about?

Then:

1. preserve the evidence;
2. update the canonical record;
3. add only evidence links and metrics that have been reviewed;
4. run tests and builds;
5. inspect every affected surface;
6. distinguish implemented behavior from prototypes, plans, and transfer skills;
7. commit with a clear explanation of what changed.

Example commit messages:

```text
Add reviewed research publication
Document production launch milestone
Correct certification date
Publish new portfolio system record
```

## What CI Verifies

The GitHub Actions workflow exercises the publisher, not the truth of the biography.

It verifies that:

- renderer and normalization tests pass;
- the resume, links, and portfolio outputs build;
- generated HTML passes the repository’s smoke checks;
- PDF rendering completes; and
- publisher artifacts can be collected from the workflow.

External-link validity, factual accuracy, visual acceptance, accessibility review, and the evidentiary strength of professional claims remain separate review responsibilities.

## Design and Governance Principles

- Evidence before claims.
- Truthful metrics only.
- Structured data is canonical.
- One source should feed multiple views.
- Generated files are outputs, not independent authorities.
- Missing or invalid URLs must not create broken interactive elements.
- AI may assist with drafting or transformation, but the repository owner remains responsible for accuracy.
- Static deployment should remain understandable and inexpensive.
- Accessibility and human readability take priority over visual novelty.
- Repository history should preserve authorship and decision provenance.
- Application-specific private information should not silently migrate into the public professional record.

## Documentation

- [Schema reference](SCHEMA.md)
- [Migration guide](MIGRATION.md)
- [Deployment guide](DEPLOYMENT.md)
- [Multi-surface architecture](MULTI_SURFACE_ARCHITECTURE.md)
- [Sprint workflow](SPRINT_WORKFLOW.md)
- [Design principles](DESIGN.md)

## Reuse and License Status

`data/sample-profile.json` documents a neutral example of the record shape, and the architecture is intentionally written so the pattern can be studied and adapted.

**No software license is currently included in this repository.** Public source visibility does not by itself grant permission to copy, modify, or redistribute the code. An explicit license should be selected before treating this repository as a generally reusable software template.

## Official Project Rule

This repository optimizes for truthfulness, reproducibility, portability, accessibility, and clarity over visual novelty.
