# Professional Profile Schema

The canonical source is `data/resume.json`. The build first passes this file through `normalizeProfile()`, then uses the normalized result for the resume, links, and portfolio surfaces.

This document describes the **current application-level record shape**. It is not a formal JSON Schema and is not automatically enforced as a complete factual or structural validation layer.

## Compatibility

Legacy plain strings remain accepted for books and technical disclosures. Structured records are preferred when links, ordering, featured state, or surface visibility are needed.

## Identity

```json
{
  "identity": {
    "name": "Full Name",
    "documentLabel": "Executive Resume",
    "title": "Professional headline",
    "positioning": "One-sentence positioning statement"
  }
}
```

## Contact

Contact values are optional. Store only information intended for publication.

```json
{
  "contact": {
    "location": "City, State",
    "phone": "Optional",
    "email": "name@example.com",
    "linkedin": "https://...",
    "github": "https://..."
  }
}
```

## Experience record

```json
{
  "organization": "Organization",
  "role": "Role",
  "period": "2024–Present",
  "highlights": [
    "Reviewed responsibility or outcome",
    "Another reviewed responsibility or outcome"
  ]
}
```

The publisher renders experience as presentation content. Dates, titles, responsibilities, and outcomes remain human-reviewed professional claims; the software does not independently verify them.

## Linkable publication record

```json
{
  "id": "stable-human-readable-id",
  "title": "Publication title",
  "url": "https://example.com/evidence",
  "featured": false,
  "order": 10,
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": false
  }
}
```

Only HTTP and HTTPS URLs become clickable. Invalid or missing URLs leave the title readable and unlinked.

## System record

Systems may represent software, products, organizations, research platforms, operating systems, or other substantial work.

```json
{
  "id": "example-system",
  "name": "System name",
  "subtitle": "Concise classification",
  "summary": "What it does and why it matters.",
  "url": "https://example.com",
  "validation": "Optional reviewed validation statement",
  "featured": true,
  "order": 10,
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": true
  },
  "highlights": ["Reviewed capability", "Another capability"]
}
```

Additional evidence links may be retained on a system record when useful to richer surfaces. The current normalization layer preserves system fields while normalizing the primary URL, ordering, featured state, and surface visibility.

## Surface rules

- `resume`: include in formal resume output when not explicitly `false`.
- `portfolio`: include in the richer contextual web presentation when not explicitly `false`.
- `links`: include in the compact link surface only when explicitly enabled and a valid HTTP/HTTPS URL exists.

Visibility controls presentation, not truth. **Do not delete canonical evidence merely to shorten one surface.** Keep the underlying record intact and change the relevant surface flag instead.

The resume renderer now applies `surfaces.resume` to structured systems and publication/book records. Other sections that do not yet have per-record surface metadata should be curated deliberately at the section/data-model level rather than silently discarded.

## Ordering

Lower `order` values appear first within their group. Featured records are prioritized on surfaces that support featured ordering.

## Stable identifiers

IDs are optional during migration but recommended for new structured records. Use lowercase, human-readable identifiers that remain stable when a title changes.

## Other supported sections

The current resume renderer accepts:

- `executiveProfile`: array of reviewed profile paragraphs
- `experience`: organization / role / period / highlights records
- `capabilities`: grouped skill arrays
- `deploymentEvidence`: array of reviewed production/deployment statements
- `achievements`: array of reviewed achievement statements
- `systems`: structured system records, filtered by `surfaces.resume`
- `publications`: technical disclosures and books, filtered by `surfaces.resume`
- `education`: credential records
- `technicalEnvironment`: object of categorized tool/technology arrays
- `footer`: concise evidence or workflow statement

The canonical record may retain additional historical or portfolio-oriented fields even when the current two-page resume renderer does not display them. Generated surfaces are views of the record, not replacements for it.

## Evidence and validation boundary

The publisher can preserve URLs, version history, structured records, and reviewed metrics. Those mechanisms strengthen provenance, but they do not turn a professional claim into an independently verified fact.

Before publishing or applying:

1. review factual claims and dates;
2. verify metrics against their underlying source;
3. confirm URLs point to the intended evidence;
4. distinguish implemented work from prototypes, research, and planned capability; and
5. rebuild and inspect every affected surface.

See `data/sample-profile.json` for a neutral example and `README.md` for the project’s provenance and privacy boundaries.
