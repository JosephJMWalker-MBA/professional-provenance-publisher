# Opportunity Provenance Bridge

**Status:** architecture note; no runtime integration is implemented by this document.

## Purpose

Professional Provenance Publisher (PPP) should remain the canonical publishing boundary for a reviewed professional record while becoming capable, over time, of participating in opportunity-specific workflows without absorbing job-search, grant-search, or application-management responsibilities.

The intended bridge is with **Opportunity Provenance Engine (OPE)**.

The governing separation is:

```text
Professional Provenance Publisher
  reviewed professional record
  + public/general publication surfaces
        |
        | frozen person-subject export
        v
Opportunity Provenance Engine
  opportunity source provenance
  + requirements
  + evidence mapping
  + gaps / eligibility
  + human pursue decision
  + application workspace
        |
        | reviewed projection context
        v
Professional Provenance Publisher
  opportunity-specific professional surface
```

PPP answers:

> What reviewed professional information exists, and how should it be rendered?

OPE answers:

> What does this opportunity require, what does the frozen subject evidence support, what remains unresolved, and what may an opportunity-specific derivative safely emphasize?

Neither repository should quietly take over the other's authority.

## Prior-art review: `MadsLorentzen/ai-job-search`

A 2026-08-27 review of the MIT-licensed public repository `MadsLorentzen/ai-job-search` surfaced several useful workflow patterns. The goal is to learn from the demonstrated workflow, not copy its product boundary or make PPP into a clone.

Useful patterns include:

1. **Treat the job posting as a specification.** Extract and address requirements rather than generically "tailoring" prose.
2. **Separate cheap triage from deep application evaluation.** Discovery/ranking need not carry the same evidentiary weight as the final application analysis.
3. **Ground every application claim.** Reframing is allowed; invented dates, titles, metrics, and capabilities are not.
4. **Use draft/reviewer separation.** Generated application material benefits from a second pass focused on factual grounding, requirement coverage, and voice.
5. **Archive what was actually submitted.** A later interview or outcome should be tied to the exact posting and documents the employer received.
6. **Preserve interview and outcome history.** Applications become useful evidence about market response rather than disappearing after submission.
7. **Use outcomes for calibration carefully.** Repeated outcomes can create observations and hypotheses about positioning or fit, but they should not automatically rewrite professional truth.
8. **Keep application history private by default.** Personal application state, recruiter notes, salary expectations, interview feedback, and similar records are a different data class from a public professional record.

These patterns align strongly with OPE's provenance-first architecture and should mostly be implemented there.

## PPP responsibility

PPP should continue to own:

- the reviewed canonical professional record;
- identity, experience, education, systems, publications, and other professional history intended for publication;
- stable professional record identifiers where introduced;
- normalization of the canonical professional record;
- general/public projection policy;
- resume, portfolio, links, PDF, CV, biography, or related professional renderers;
- rendering correctness, accessibility, print/layout behavior, and publication verification; and
- the rule that a presentation surface never becomes a second source of professional truth.

## OPE responsibility

OPE should own opportunity-specific state such as:

- discovery and source observations;
- job/grant/contract opportunity normalization;
- requirement extraction and review;
- deterministic eligibility gates;
- requirement-to-evidence mapping;
- `supported`, `partial`, `gap`, `ineligible`, and `unknown` states;
- company/opportunity research and freshness;
- pursue/decline/watch decisions;
- application workspaces;
- drafting authorization;
- submission manifests;
- contacts, communications, interviews, and outcomes; and
- market-response observations and calibration hypotheses.

PPP should not become the database for those records.

## Proposed bridge: PPP -> OPE person-subject snapshot

A future adapter should transform the reviewed PPP record into the subset of OPE's person-subject model needed for opportunity evaluation.

The adapter should be one-way and snapshot-bound.

Conceptually:

```text
data/resume.json
    -> normalizeProfile()
    -> PPP/OPE person-subject adapter
    -> OPE subject snapshot
```

The exported subject should record enough provenance to recover its basis, such as:

- PPP repository identity;
- canonical record version/schema version;
- Git commit or equivalent source revision;
- deterministic content hash;
- stable professional record/evidence IDs where available; and
- adapter version.

An OPE application should therefore be able to state which exact professional state was evaluated without copying authority for that state into OPE.

## Proposed bridge: OPE -> PPP projection context

After OPE evaluates a frozen professional subject against a frozen opportunity, it may provide PPP with a reviewed projection context for rendering.

That context should express policy and provenance, not replacement biography.

Possible concepts include:

```text
opportunity_id
application_workspace_id
subject_snapshot
opportunity_snapshot
approved/emphasized record IDs
requirement-to-evidence references
known partial/gap/unknown requirements
prohibited unsupported claims
review/drafting authorization provenance
```

PPP may then render an opportunity-specific resume/CV or related professional surface while continuing to source substantive professional facts from its canonical record.

OPE decides what the evidence permits the opportunity derivative to emphasize. PPP decides how the approved professional projection is rendered.

## Factual-grounding rule

A generated opportunity-specific professional artifact may:

- select;
- order;
- shorten;
- expand with already-reviewed context;
- translate presentation terminology where factually equivalent; and
- reframe emphasis for an audience.

It may not create a new professional fact merely because a requirement would benefit from it.

If an application workflow surfaces a genuinely new or corrected professional fact, the safe flow is:

```text
new/corrected fact encountered
    -> proposed professional-record change
    -> evidence/review as appropriate
    -> human acceptance
    -> new canonical PPP revision
    -> new OPE subject snapshot if needed
```

Opportunity pressure must not mutate professional truth automatically.

## Submitted-artifact provenance

A future integration should distinguish at least three artifacts/states:

1. **canonical professional record** — maintained by PPP;
2. **generated opportunity derivative** — produced from a reviewed projection context; and
3. **submitted snapshot** — the exact artifact actually sent to the opportunity owner.

The submitted snapshot belongs with the application history in OPE. PPP may render it, but PPP should not treat the submitted copy as a new canonical authority.

## Interview surfaces

Interview preparation is not a new professional source of truth. It is an opportunity-specific projection combining:

```text
frozen professional subject
+ frozen opportunity/posting
+ requirement map
+ submitted artifacts
+ current company/opportunity research
+ prior stage feedback
```

OPE should orchestrate that context. PPP may eventually provide reusable rendering components if useful, but interview lifecycle state belongs outside PPP's canonical public record.

## Outcome calibration boundary

Application outcomes are valuable evidence but not self-interpreting facts about professional capability.

Prefer:

```text
observation
  5 applications of class X -> 3 interviews

hypothesis
  evidence/positioning Y may be resonating

future test
  compare against the next cohort
```

Do not allow:

```text
3 rejections -> canonical professional claim is false
```

or:

```text
3 interviews -> inferred capability becomes canonical fact
```

PPP should accept canonical changes only through its own reviewed professional-record workflow.

## Privacy boundary

PPP is currently public. Its canonical mainline should remain suitable for intentional public professional presentation.

Private opportunity state should live in OPE or another private workspace by default, including:

- application trackers;
- recruiter correspondence;
- salary expectations;
- interview feedback;
- private referrals;
- demographic/application-form responses;
- outcome notes; and
- employer-specific strategic research that is not intended for publication.

A public-safe opportunity derivative may exist when deliberately chosen, but that is an exception, not the default storage model.

## What PPP should not absorb from job-search prior art

Do not make PPP's core responsible for:

- job-board scraping or portal-specific clients;
- employer/company research caches;
- fit scoring;
- eligibility interpretation;
- application CRM/tracking;
- Gmail or external-message synchronization;
- interview-stage state;
- outcome calibration;
- automated application submission;
- a specific model/provider such as Claude Code; or
- a specific document toolchain such as LaTeX.

Those may be adapters or downstream integrations. They are not the professional record or publisher.

## Initial bridge acceptance criteria

A first real PPP/OPE bridge is successful when:

1. one reviewed PPP professional record can be deterministically exported as an OPE `person` subject;
2. the export identifies the exact PPP revision and produces a stable snapshot hash;
3. OPE can evaluate that subject against a reviewed `job` opportunity without modifying PPP;
4. OPE can create a reviewed projection context that distinguishes supported, partial, gap, ineligible, and unknown requirements;
5. PPP can render an opportunity-specific resume from that context without duplicating professional facts into the application workspace;
6. an unsupported opportunity requirement cannot cause PPP to invent a claim;
7. the exact rendered/submitted artifact can be archived by OPE with its subject and opportunity snapshots;
8. private application state remains outside PPP's public canonical mainline; and
9. a later professional-record change creates a new subject snapshot rather than retroactively changing the historical application basis.

## Architectural rule

The bridge should increase contextual usefulness without weakening source authority.

```text
PPP owns professional truth and rendering.
OPE owns opportunity truth and application state.
The bridge owns provenance-preserving projection between them.
```
