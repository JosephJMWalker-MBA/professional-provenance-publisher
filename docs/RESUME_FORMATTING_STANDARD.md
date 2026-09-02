# Resume Formatting Standard

**Status:** normative presentation policy for resume derivatives.

This document governs how Professional Provenance Publisher should render resumes intended for recruiters, hiring managers, applicant tracking systems (ATS), and opportunity-specific submissions.

The professional record remains canonical. Formatting may select, order, shorten, and emphasize reviewed facts; it may never invent facts to fill space or satisfy a posting.

## Governing objective

A resume is a scanning surface, not a prose essay and not a portfolio.

The first human read is often brief, so the document should make the strongest relevant evidence visible without requiring the reader to decode a dense block of text.

The default optimization order is:

```text
truth
  -> relevance to the opportunity
  -> scanability
  -> ATS parseability
  -> visual balance
  -> page-count preference
```

Page count must never outrank readability or truth.

## Default layout

For recruiter-facing and opportunity-specific resumes:

- use a **single-column** reading order;
- use standard section headings such as `Professional Summary`, `Skills`, `Experience`, `Selected Projects`, `Education`, and `Certifications`;
- use a common readable sans-serif or serif font;
- keep body text generally within **10-12 pt**;
- keep margins generally within **0.5-1.0 inch**, with roughly **0.7-0.8 inch** preferred when content permits;
- left-align body content;
- keep contact information in the document body rather than a header/footer when ATS compatibility matters;
- use ordinary round bullets or dashes, not custom icons;
- avoid tables, text boxes, graphics, charts, photos, decorative columns, and information encoded only through color;
- allow the renderer to paginate naturally rather than forcing section-level page breaks.

A text-based PDF is acceptable when requested or when the recipient is a human recruiter. A DOCX remains the safest default when an ATS or application portal does not specify a file type.

## Information hierarchy

The document should answer these questions in order:

1. **Who is this person for this role?**
2. **Which required capabilities are already supported by evidence?**
3. **Where has that capability been demonstrated?**
4. **What measurable or inspectable evidence supports the claim?**
5. **What education, credentials, or adjacent experience strengthens the case?**

Opportunity-specific derivatives should normally prioritize:

```text
Name + contact
Target role / professional headline
Professional Summary
Core Skills
Professional Experience
Selected Projects / Technical Systems
Education + Certifications
Optional publications / awards only when materially relevant
```

The exact order may change when the opportunity makes another section more important.

## Anti-wall-of-text rules

Dense prose is a formatting defect even when every sentence is accurate.

Default constraints:

- Professional Summary: **2-3 compact sentences**, normally no more than about **3-4 rendered lines**.
- Experience: use bullets rather than narrative paragraphs.
- Most relevant/current role: normally **3-5 bullets**.
- Older or less relevant roles: normally **2-3 bullets**.
- Selected Projects / Systems: normally **3-4 projects** for an opportunity derivative unless more are essential.
- Project description: prefer a one-line context statement followed by **2-4 evidence bullets**.
- Avoid bullets that routinely render beyond two lines; split or tighten them when possible.
- Prefer one concrete accomplishment, system boundary, metric, deployment fact, or responsibility per bullet.
- Do not create filler bullets merely to consume whitespace.

When a section becomes visually dense, the first remedy is **selection and editing**, not smaller type.

## Bullet construction

Bullets should be specific, active, and fact-based.

Preferred pattern:

```text
Action / ownership + technical or business object + meaningful result / evidence / boundary
```

Examples:

- `Architected a Python provenance pipeline with deterministic validation and human review boundaries.`
- `Shipped four App Store applications across Swift and Flutter release workflows.`
- `Built CI/CD verification with automated tests and reproducible publication artifacts.`

Avoid generic bullets such as:

- `Responsible for AI projects.`
- `Worked with Python.`
- `Helped with software development.`

## Keyword policy

Keywords from an opportunity may be repeated where they naturally describe supported evidence, especially in the headline, summary, skills, and relevant experience.

A keyword is not permission to manufacture experience.

Use these states from the opportunity evidence map:

- `supported` -> may state directly;
- `partial` -> may state the demonstrated adjacent capability with a truthful boundary;
- `unknown` -> do not convert into a claim;
- `gap` -> do not include as experience merely because the job requests it;
- `ineligible` -> do not obscure or rewrite the underlying fact.

## Page-count policy

One page is useful when the relevant evidence fits comfortably. Two pages are acceptable for experienced candidates when both pages carry meaningful information.

Never:

- shrink body text below readable professional norms merely to hit one page;
- force a two-page document when the content fits naturally on one;
- leave a page half-empty because of a hard page break;
- split content into artificial page buckets;
- pad a page with irrelevant history or unsupported claims.

The correct question is not `Can this be one page?` but `Is every page dense enough to justify its existence while remaining easy to scan?`

## Render-and-review gate

A resume derivative is not send-ready until its rendered form has been inspected.

Review every page for:

- clipping or overflow;
- accidental hard page breaks;
- sparse pages followed by additional content;
- dense uninterrupted prose blocks;
- headings stranded at the bottom of a page;
- bullets split awkwardly across pages;
- body text that is too small to scan comfortably;
- inconsistent spacing, indentation, capitalization, or date treatment;
- multi-column or decorative structures that harm linear parsing;
- contact information that disappears from ATS-readable body text.

If a page is sparse while later content exists, reflow naturally before changing content. If a page is too dense, reduce or tighten content before reducing font size.

## Machine-checkable invariants

The default recruiter-facing print renderer should preserve these structural invariants:

1. one linear `.page` content container rather than hard-coded `page-one` / `page-two` buckets;
2. no `page-break-after: always` on the resume content container;
3. no fixed `height: 11in` combined with `overflow: hidden`;
4. print grids collapse to a single column;
5. system/project bullet lists do not use CSS columns;
6. headings avoid page breaks immediately after them;
7. body text remains within the documented readable size range.

Tests should fail when these invariants regress.

## External guidance reviewed

This policy was calibrated against current resume guidance available in September 2026, including:

- Harvard FAS Mignone Center for Career Success, **Harvard College Guide to Creating a Strong Resume** — emphasizes concise, fact-based language, easy scanning, consistent formatting, and balanced white space: https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/
- Harvard FAS, **GSAS Master's Resume & Cover Letter** — recommends common readable fonts, 10-12 pt type, at least three-quarter-inch margins, and avoiding text boxes, color, and shading: https://careerservices.fas.harvard.edu/resources/gsas-masters-resume-cover-letter/
- Indeed, **How to Write an ATS Resume** — recommends standard headings, simple formatting, and avoiding headers, tables, graphics, columns, and text boxes: https://www.indeed.com/career-advice/resumes-cover-letters/ats-resume-template
- Indeed, **ATS-Friendly Resume: 18 Tips** — recommends single-column layout, simple bullets, standard headings, readable contact information, and quantified evidence where possible: https://www.indeed.com/career-advice/resumes-cover-letters/automated-screening-resume
- Jobscan, **Anatomy of an ATS Friendly Resume Format (2026)** — recommends a clean single-column structure, standard fonts, 10-12 pt body type, conventional margins, standard bullets, and standard headings: https://www.jobscan.co/blog/20-ats-friendly-resume-templates/

These are presentation references, not authorities over professional truth. If employer-specific instructions conflict with this default, follow the employer's explicit submission requirements while preserving the provenance and factual-grounding rules.
