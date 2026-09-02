# Resume Build Procedure

This resume is built from source.

That phrase is intentional.

It means the final PDF is not treated as the source of truth. The PDF is an output generated from version-controlled files.

## Source Files

The primary source files are:

```text
data/resume.json
styles/screen.css
styles/print.css
styles/print-layout.css
scripts/build-html.mjs
scripts/render-pdf.mjs
docs/RESUME_FORMATTING_STANDARD.md
```

## Build Pipeline

```text
reviewed professional record
    -> opportunity-specific selection / emphasis when applicable
    -> generated HTML
    -> ATS-safe print CSS
    -> naturally paginated PDF
    -> automated structure checks
    -> visual review of every page
    -> approved submission artifact
```

## Expected Procedure

1. Update or confirm the reviewed professional record.
2. For a specific opportunity, select and order only the facts materially relevant to that role; do not invent missing requirements.
3. Apply `docs/RESUME_FORMATTING_STANDARD.md` before rendering.
4. Generate the HTML resume.
5. Render the PDF from the HTML and print CSS.
6. Run the full verification suite.
7. Visually inspect **every rendered page**, not just the first page.
8. Confirm there is no clipped text, overlap, forced section-level page break, sparse page followed by more content, or dense wall of uninterrupted prose.
9. Confirm body text remains readable and the print surface preserves a single linear reading order.
10. Confirm factual claims still match the professional evidence and opportunity projection policy.
11. Only then treat the artifact as send-ready.
12. Commit meaningful source or publisher changes with a clear message.

## Layout triage order

When a resume does not fit or looks visually unbalanced, fix it in this order:

```text
1. remove irrelevant content
2. shorten / split dense prose into evidence bullets
3. improve section ordering and spacing
4. allow natural additional pages when justified
5. make small margin/spacing adjustments within the formatting standard
6. reduce type size only as a last resort, never below the readable policy floor
```

Do **not** solve layout pressure by adding filler, inventing claims, forcing page breaks, introducing multi-column print layouts, or shrinking text until it is difficult to scan.

## Sparse-page regression rule

A page is suspect when substantial blank vertical space remains while later resume content exists.

Before release, determine whether the cause is:

- a hard page break;
- a fixed-height content bucket;
- `overflow: hidden`;
- an over-aggressive `break-inside: avoid` rule;
- a large keep-with-next cluster;
- or genuinely insufficient relevant content.

The first five are publisher defects. The last is a content-selection question and must not be repaired with filler.

## Local Commands

```bash
npm install
npm run verify
npm run render
```

The rendered PDF is written under:

```text
dist/
```

## Engineering Intent

The repository demonstrates the same discipline the resume claims:

- structured source of truth;
- deterministic publication pipeline;
- evidence-bounded opportunity projection;
- standard, scan-friendly presentation;
- automated regression checks;
- human visual review before use;
- version history for meaningful changes; and
- reproducible artifacts.

The submitted resume is a derivative artifact.

The repository is the governed system that produced it.
