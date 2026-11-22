# Role and keyword evidence map (November 2026)

This file is a **truth-boundary guide for tailoring applications**, not a claim that an ATS keyword or job title was formally conferred. Canonical professional evidence lives in `data/resume.json`; this document explains how to project that evidence into a specific vacancy without inflating tenure, people leadership, credentials, or deployed scope.

## Strongest supported job families

| Search / role family | Supported wording to use when relevant | Demonstrated evidence | Boundary |
| --- | --- | --- | --- |
| AI Systems Architect / Solutions Architect | Systems architecture; solution design; multi-agent workflows; AI governance; deterministic controls; human-in-the-loop evaluation | Hermeneia, Label Lens TTB, published architecture disclosures | Architecture demonstrated through projects; do not imply vendor certifications or formal enterprise architect appointments |
| Technical Lead / Engineering Lead (hands-on) | Technical leadership; requirements-to-release execution; architecture decisions; integration; technical review; quality gates | 729 LLC portfolio, deployed systems, Big Joke and other App Store releases | Technical/project leadership, **not** a claim of line management or a staffed engineering organization |
| Senior Software Engineer / Staff or Principal IC *scope* | Full-stack engineering; backend integration; system boundaries; testing strategy; reliability; release engineering | Python, TypeScript, Swift/iOS products, commerce workflows, Hermeneia and Big Joke | This is a **role-matching search category**, not a statement that a Staff/Principal title was held; tailor to actual responsibilities |
| Applied AI Engineer / AI Evaluation Engineer | AI orchestration; evaluation design; provenance; auditability; model-risk controls; RAG; computer vision / OCR | Hermeneia, Label Lens TTB and AI research | Do not imply large-scale model training or employer-owned ML platform operations without evidence |
| Technical Product / Technology Strategy | Product architecture; requirements engineering; roadmap; stakeholder translation; operating procedures; implementation planning | Masters Consulting Group and 729 LLC | Do not claim budget size, direct reports, enterprise revenue or client outcomes without records |
| Quality / Reliability Engineering | Automated testing; fault injection; regression; CI/CD; data preservation; failure analysis; release gates | Test and preservation work on Big Joke, Hermeneia, publisher and Label Lens | Do not conflate a guarded development harness with a public SRE incident-response role |

## Recruiter-ready headline

**AI Systems Architect | Technical Lead | Applied AI & Software Engineering**

## Short professional summary

AI systems architect and MBA-trained technical lead who connects strategy, requirements, software architecture, implementation, automated verification, and delivery. Builds published mobile products, deployed web applications, and governed AI systems with deterministic controls, evidence provenance, human review, and recovery-aware workflows. Strengths include Python, TypeScript, Swift/iOS, agentic AI, solution architecture, quality engineering, and release execution.

## Evidence-linked project anchors

- **Hermeneia:** AI governance, source-of-truth and provenance architecture, semantic contracts, steward review, automated test strategy. [Repository](https://github.com/JosephJMWalker-MBA/Hermeneia). Test counts in the canonical record are dated snapshots; refresh only against verified evidence.
- **Label Lens TTB:** OCR-assisted compliance prescreening, versioned rules, reviewer authority, integrity metadata, automated regression. [Repository](https://github.com/JosephJMWalker-MBA/label-lens-ttb). Describe development status accurately rather than treating every branch as a production release.
- **Big Joke:** Shipped iOS product; post-release SwiftUI/AVFoundation development, timing and state-management work, accessible performance UI, XCTest/Swift Testing, data-preserving validation. [App Store](https://apps.apple.com/us/app/big-joke/id6771604436). **Do not present unpublished #71 work as an already-released App Store feature.**
- **Published apps:** user-facing software release, mobile testing, store delivery, and iterative product engineering. [App Store example](https://apps.apple.com/us/app/headroomcalc/id6754173227).
- **SODATERU.shop:** full-stack systems, webhooks, payments and fulfillment integration. [Website](https://sodateru.shop).
- **Professional Provenance Publisher:** canonical JSON, normalization, static renderers, GitHub Actions, automated tests and reproducible publication. [Repository](https://github.com/JosephJMWalker-MBA/professional-provenance-publisher).
- **Published research:** multi-agent composition, AI governance, provenance and human oversight. [Technical Disclosure Commons example](https://www.tdcommons.org/dpubs_series/9043/).

## Search keywords and honest boundaries

**Use where supported:** AI Systems Architecture, Solutions Architecture, Technical Leadership, Applied AI Engineering, Agentic AI, Multi-Agent Systems, AI Evaluation, Human-in-the-Loop, Software Architecture, Full-Stack Development, Python, TypeScript, SwiftUI, REST APIs, SQL, Requirements Engineering, CI/CD, Automated Testing, Quality Engineering, Reliability Engineering, Fault Injection, Data Integrity, Recovery, Governance, Provenance, Architecture Decision Records, Release Engineering, Product Delivery.

**Do not claim without new evidence:** formal Staff/Principal job appointment, direct-report headcount, enterprise budget authority, SOC 2 or ISO certification, large-scale model-training operations, Kubernetes/SRE ownership, regulated clinical production deployment, external client results or quantitative performance gains not recorded in reviewed sources.

For any job application, select a **small relevant subset** of these terms and substantiate them with the associated project bullets. The public source retains recorded ownership titles in `recordedTitle`; `role` contains the evidence-supported functional projection used in the generated résumé.

## Publication checks

After merging a change to `data/resume.json`, run `npm run verify` and `npm run render`, inspect the generated résumé, portfolio, links and PDF, and confirm no stale published artifact remains. Review factual claims against the underlying source. The publisher validates rendering, not truth.
