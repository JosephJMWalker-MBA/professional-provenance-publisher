# Project Status

## Version

v0.2.0 — Public Multi-Surface Publisher

## Current Classification

The repository began as an executive technical resume and now implements a **Professional Provenance Publisher**: one canonical professional record feeds multiple static presentation surfaces through a shared normalization layer.

`data/resume.json` remains the owner-specific canonical source. Generated HTML and PDF files are outputs.

## Verified in Repository

- ✅ Canonical structured professional record in `data/resume.json`
- ✅ Neutral example record in `data/sample-profile.json`
- ✅ Shared `normalizeProfile()` renderer boundary
- ✅ Backward-compatible normalization for selected legacy publication records
- ✅ HTTP/HTTPS URL normalization for linkable evidence
- ✅ Surface visibility, ordering, and featured-state support
- ✅ Resume HTML renderer
- ✅ Mobile-first links renderer
- ✅ Portfolio renderer
- ✅ Playwright PDF rendering
- ✅ Resume, normalization, links, and portfolio renderer tests
- ✅ Generated-output smoke tests
- ✅ `npm run verify` end-to-end publisher verification command
- ✅ GitHub Actions workflow for tests, builds, PDF rendering, and artifact upload
- ✅ Successful end-to-end GitHub Actions verification has been observed
- ✅ Schema, migration, deployment, architecture, sprint-workflow, design, and contribution documentation

## Explicit Boundaries

- ❌ The publisher does **not** independently verify that professional claims are true.
- ❌ Evidence URLs are references, not automated proof of a claim.
- ❌ `SCHEMA.md` is documentation; formal JSON Schema enforcement is not currently implemented.
- ❌ The project is not a hosted multi-user service, applicant-tracking system, or automated application-submission platform.
- ❌ Private job-application answers, recruiter notes, interview preparation, and application trackers do not belong in the public canonical mainline by default.

## Remaining Work / Open Decisions

- ⬜ Select and add an explicit software license before presenting the repository as generally reusable code.
- ⬜ Decide whether formal schema versioning and runtime/build-time JSON Schema validation add enough value to implement.
- ⬜ Complete manual accessibility, device, external-link, and visual acceptance review after major presentation changes.
- ⬜ Run a clean-room fork/clone test when reuse packaging becomes a priority.
- ⬜ Test the template workflow with external users before claiming broad beginner usability.
- ⬜ Keep job-specific application archives separated from the public canonical professional record.

## Governance Rule

No presentation layer should become a second source of truth. Professional claims flow from reviewed canonical data into generated surfaces.

Development flow:

```text
Evidence → Reviewed Record → Normalize → Render → Test → Inspect → Publish
```

Publisher tests validate software behavior and generated-output integrity. Human review remains responsible for factual accuracy, evidence quality, privacy, and publication decisions.
