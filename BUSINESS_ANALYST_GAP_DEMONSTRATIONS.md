# Business Analyst Gap Demonstrations

**Status:** planning / evidence-building only  
**Research snapshot:** September 27, 2026  
**Purpose:** identify the smallest honest technical demonstrations that close recurring evidence gaps in current Business Analyst, Business Systems Analyst, Reporting Analyst, and adjacent Data Analyst job listings in Northeast Ohio and broader Ohio.

> **Rule:** Nothing in this document becomes a resume claim merely because it is planned. A capability moves into the canonical professional record only after the demonstration exists, can be inspected, and can be explained without exaggeration.

## Why This File Exists

The current professional record already demonstrates unusually strong software engineering, AI systems, architecture, deployment, testing, technical documentation, REST APIs, and SQL. It also already contains business-facing language around process improvement, technical requirements, decision support, and operational workflows.

The recurring analyst-job gap is therefore not "become technical." It is **make common analyst tools and artifacts directly visible**.

A scan of current Ohio listings repeatedly asks for combinations of:

- advanced Excel;
- Power BI;
- SQL used for business analysis and data validation;
- requirements documentation;
- process mapping;
- user stories and acceptance criteria;
- UAT / test cases / traceability;
- KPI definition, dashboards, and recurring reporting;
- Jira / Confluence / Azure DevOps or similar work-tracking tools;
- REST / JSON / API and data-mapping literacy for technical BA roles;
- data quality, source-to-target mapping, and reconciliation;
- Agile / SDLC familiarity.

Examples reviewed include current roles from Creative Financial Staffing in North Canton, FirstEnergy in Akron, Robert Half in Massillon, Signet in Akron, Brooksource in Cleveland, Insight Global in Columbus, and several technical BA postings in Columbus/Cleveland.

## Current Record: What Is Already Defensible

The canonical resume already supports:

- SQL as a listed technical capability;
- REST APIs;
- Python / TypeScript / JavaScript;
- production systems and deployment;
- automated testing and QA;
- technical documentation;
- workflow automation;
- process improvement;
- converting ambiguous business problems into workflows, standards, technical requirements, decision-support tools, and implementation plans;
- full-stack systems with analytics and operational workflows;
- governance, provenance, and evidence-oriented engineering.

Do **not** build redundant toy projects merely to re-prove these.

## Highest-Leverage Evidence Gaps

### 1. Excel + Power BI are not visible

These are among the most repeated tools in the current analyst market. The professional record does not presently list Excel or Power BI in the technical environment.

This is the fastest high-value gap to close.

### 2. SQL is listed, but analyst-style SQL evidence is not obvious

The resume says SQL, but a hiring manager scanning for business analysis may want evidence of:

- joins;
- aggregation;
- CTEs;
- window functions;
- reconciliation;
- data-quality checks;
- source-to-target validation;
- reporting datasets.

A compact analyst case study would make the existing SQL claim much stronger without inflating it.

### 3. Requirements/process work is described but not packaged as standard BA artifacts

The resume already describes technical requirements and workflow design. What is missing is a visible packet containing recognizable artifacts such as:

- current-state / future-state process map;
- business requirements;
- functional requirements;
- user stories;
- acceptance criteria;
- data definitions;
- assumptions / risks / dependencies.

### 4. QA is strong, but UAT is not explicitly demonstrated

Automated testing is already well represented. Analyst listings frequently ask for **UAT**, manual test cases, issue logs, and traceability.

That is a different artifact class and can be demonstrated quickly.

### 5. API literacy exists, but technical-BA integration analysis is not packaged

REST APIs are already in the resume. A small integration-analysis artifact can translate existing engineering strength into language a Technical Business Analyst hiring manager immediately recognizes:

- endpoint;
- request / response JSON;
- field mapping;
- validation rules;
- error paths;
- sequence flow;
- acceptance criteria.

## P1 Demonstration: One Integrated Operations Analytics Case

Instead of creating five disconnected portfolio toys, build **one small but complete analyst evidence pack** around a synthetic multi-site asset / maintenance operation.

This fits the local hiring market well because Northeast Ohio postings repeatedly touch manufacturing, utilities, operations, asset management, reporting, data quality, and enterprise systems.

Use only synthetic or intentionally public data.

### Suggested scenario

A company operates several sites with:

- assets;
- inspections;
- work orders;
- vendors;
- maintenance costs;
- downtime;
- risk classifications;
- completion dates;
- planned vs. actual work.

Management wants to know:

1. Which assets are creating the most operational risk?
2. Where are maintenance costs increasing?
3. Which work orders are overdue?
4. Which sites have recurring exceptions?
5. Which vendors or asset classes correlate with repeat failures?
6. What should management inspect first?

The data can be intentionally small enough to understand completely.

---

## Demonstration A — Excel / Power Query / Power BI / SQL

**Target time:** 4–6 focused hours  
**Priority:** P1  
**Market coverage:** very high

### Deliverables

- `data/raw/*.csv` — synthetic operational source files;
- `data/schema.md` — field definitions and assumptions;
- `sql/schema.sql` — relational tables;
- `sql/analysis.sql` — documented analysis queries;
- Excel workbook containing:
  - Power Query imports / transformations;
  - XLOOKUP or equivalent lookup logic;
  - PivotTables;
  - data validation;
  - at least one exception / reconciliation sheet;
  - KPI summary;
- Power BI report containing:
  - data model;
  - defined relationships;
  - several measures;
  - at least one DAX measure that is not trivial;
  - executive summary page;
  - operations / exception page;
  - drill-down or filtering;
- screenshots or exported PDF for public inspection;
- short README explaining the business questions and conclusions.

### Minimum SQL proof

Demonstrate, where justified:

- multi-table joins;
- grouping / aggregation;
- CTE;
- window function;
- CASE logic;
- duplicate detection;
- null / orphan detection;
- source-to-target reconciliation;
- one query that directly supports a dashboard metric.

### Resume claim unlocked **only after completion**

Examples of honest wording:

- "Built a synthetic operations analytics case study using Excel, Power Query, SQL, and Power BI to model KPIs, reconcile source data, and surface maintenance exceptions."
- "Power BI — hands-on project: data modeling, DAX measures, interactive reporting."
- "Excel — Power Query, PivotTables, lookup logic, data validation, reporting."

Do **not** convert this into "3+ years Power BI experience," "enterprise Power BI experience," or any similar duration / production claim.

---

## Demonstration B — Requirements-to-UAT Packet

**Target time:** 3–4 focused hours  
**Priority:** P1  
**Market coverage:** very high

Use the same operations case so the artifacts form one coherent body of evidence.

### Deliverables

1. **Problem statement**
2. **Stakeholder map**
3. **Current-state process**
4. **Future-state process**
5. **Business requirements**
6. **Functional requirements**
7. **Non-functional requirements**
8. **User stories**
9. **Acceptance criteria**
10. **Assumptions / dependencies / risks**
11. **UAT test cases**
12. **Requirements traceability matrix**
13. **Issue / defect log with 2–3 deliberately seeded failures and resolutions**
14. **Decision log**

Use Mermaid for the committed process diagrams. If a target role specifically values Visio and access is available, reproduce one diagram in Visio and preserve an exported PDF / image as evidence.

### Important truth boundary

If no outside stakeholder was interviewed, do **not** claim "requirements elicitation from stakeholders."

Use:

- "requirements analysis";
- "requirements documentation";
- "modeled business requirements";
- "translated a defined business scenario into functional requirements."

Actual stakeholder elicitation becomes defensible only when a real stakeholder interaction occurs and can be accurately described.

### Resume claim unlocked after completion

- "Created a requirements-to-UAT case study covering process mapping, functional requirements, user stories, acceptance criteria, traceability, and test cases."
- "Business analysis artifacts: process maps, requirements, user stories, acceptance criteria, UAT."

---

## Demonstration C — Technical BA API / JSON Mapping

**Target time:** 2–3 hours  
**Priority:** P2  
**Market coverage:** high for technical BA / systems analyst roles

This should reuse an existing public API or one of the owner's existing systems instead of building another application.

### Deliverables

- one-page integration context;
- endpoint inventory;
- sample request / response JSON;
- source-to-target field map;
- data-type and validation rules;
- error / retry matrix;
- sequence diagram;
- acceptance criteria;
- Postman collection or equivalent executable request set;
- short note separating business rules from transport / implementation details.

### Resume claim unlocked after completion

- "Produced a technical business-analysis integration packet covering REST/JSON contracts, source-to-target mapping, validation rules, exception handling, and acceptance criteria."

The current resume already lists REST APIs. This artifact makes that capability legible to a BA hiring manager rather than creating a new claim.

---

## Demonstration D — Use Jira / Confluence as Real Working Tools, Not Keywords

**Target time:** 1–2 hours added to the work above  
**Priority:** P2

If access is available:

- create one Jira project for the analyst evidence pack;
- create an Epic for the reporting solution;
- enter user stories with acceptance criteria;
- create a small backlog;
- move work through a simple workflow;
- record one defect and resolution;
- use Confluence for the requirements / decision page if available.

### Truth boundary

After a small personal project, it is reasonable to say:

- "Jira — hands-on project familiarity";
- "Used Jira to manage a small analyst case-study backlog."

It is **not** reasonable to imply enterprise-team Jira experience, Scrum-team tenure, or years of Agile delivery.

GitHub Issues are useful evidence of work tracking but are not the same thing as Jira. Do not silently substitute one product name for another.

---

## P3 / Role-Specific Demonstrations

Only pursue these when a specific application justifies the time:

### Power Automate / Power Fx

Relevant to FirstEnergy-style analyst roles. Build a small bounded workflow against synthetic data and document inputs, conditions, outputs, failure handling, and audit trail.

### Dynamics 365 / SAP / Maximo / ServiceNow / Salesforce

These are platform/domain gaps, not generic resume gaps.

Do not add them because a tutorial was watched. A vendor sandbox or training lab can establish **exposure** or **hands-on lab familiarity**, but not production experience.

### Snowflake

A small Snowflake lab can be useful for a specific role, but SQL/data-modeling evidence has broader value first.

### IIBA / CBAP

Some Ohio contract postings make certification mandatory. That cannot be replaced with a weekend demo. Treat it as a separate credential decision rather than attempting to word around it.

---

## Recommended Build Order

### Sprint 1 — Analytics evidence
1. Create synthetic asset / work-order dataset.
2. Build relational model.
3. Write analysis SQL.
4. Build Excel analysis workbook.
5. Build Power BI dashboard.
6. Export screenshots / PDF.
7. Document insights and limitations.

### Sprint 2 — BA artifact evidence
1. Write problem statement.
2. Create current / future process map.
3. Write requirements.
4. Convert requirements to user stories and acceptance criteria.
5. Create UAT cases.
6. Seed 2–3 defects.
7. Complete traceability matrix.

### Sprint 3 — Technical BA translation
1. Pick one REST integration.
2. Document JSON contract.
3. Build source-to-target mapping.
4. Add error matrix and sequence diagram.
5. Save executable API requests.

### Sprint 4 — Resume update
Only after the artifacts exist:

1. review evidence;
2. decide which capabilities are truly demonstrated;
3. add concise project evidence to `data/resume.json`;
4. add only tools that can be defended in an interview;
5. rebuild resume / portfolio / PDF;
6. visually inspect;
7. commit the professional-record update separately from the demo implementation.

---

## Resume Honesty Framework

Use four different evidence states.

### 1. Listed capability

Use when the tool or method has been used enough to explain and reproduce competently.

Example:

> Power BI

### 2. Demonstrated project capability

Preferred for newly acquired tools.

Example:

> Power BI — built a synthetic operations dashboard with relational modeling, DAX measures, drill-down, and KPI reporting.

### 3. Professional / production experience

Use only when the capability was applied in actual professional, operational, client, or production work.

Example:

> Built and maintained Power BI reporting for a live business operation.

Do not use this wording for a portfolio exercise.

### 4. Exposure / lab familiarity

Use when work is limited to tutorials, sandbox exercises, or vendor labs.

Example:

> Microsoft Dynamics 365 — lab familiarity.

Do not collapse these four categories into one generic "Skills" claim when the evidence level differs materially.

---

## What Not To Spend Time On

Avoid résumé theater.

Do not:

- create ten shallow dashboards;
- clone a tutorial dataset and present it as original analysis;
- list every Microsoft product touched once;
- claim Agile-team experience from a solo Jira board;
- claim stakeholder elicitation when requirements were self-generated;
- turn a sandbox into "enterprise systems experience";
- add years of experience inferred from adjacent work;
- stuff the resume with ATS keywords unsupported by inspectable evidence.

The purpose is not to imitate a Business Analyst résumé. The purpose is to make already-strong analytical and technical capability legible in the artifact language employers are currently requesting.

---

## Current-Market References Reviewed

Research snapshot only; job listings can expire or change.

- Creative Financial Staffing — Business Analyst (Power BI), North Canton, OH: https://www.ihiretechnology.com/jobs/view/538833203
- Insight Global — Business Analyst, Columbus, OH: https://www.linkedin.com/jobs/view/business-analyst-at-insight-global-4465921731
- FirstEnergy — Advanced Business Analyst, Akron, OH: https://www.linkedin.com/jobs/view/advanced-business-analyst-akron-at-firstenergy-4463549315
- FirstEnergy — Business Analyst, Asset Management & Records, Akron, OH: https://www.linkedin.com/jobs/view/business-analyst-asset-management-records-at-firstenergy-4458916398
- Robert Half — Master Data Analyst, Massillon / Canton area: https://www.roberthalf.com/us/en/job/massillon-ohio/master-data-analyst/03340-0013510640-usen
- Brooksource — Business Analyst, Cleveland, OH: https://www.linkedin.com/jobs/view/business-analyst-at-brooksource-4460604122
- Signet Jewelers — IT Business Analyst, Akron, OH: https://www.theladders.com/job/it-business-analyst-si-dot-net-jewelers-akron-oh_88627118
- Greenfield Talent — Senior Technical Business Analyst, Cleveland area: https://www.monster.com/job-openings/senior-technical-business-analyst-onsite-in-cleveland-brooklyn-oh--5701bddb-fc0f-415c-93ff-2999715d3be4
- Central Point Partners — Business Systems Analyst Sr., Columbus, OH: https://www.linkedin.com/jobs/view/business-systems-analyst-sr-technical-delivery-at-central-point-partners-4469785102
- DataVerify — Business System Analyst, Columbus, OH: https://www.simplyhired.com/job/BwPnu4eUZmQsPzJgLUZ3_83pDui9YhR1slpR7UEgaR5Nt71T8W5hxA

## Decision

The highest-return gap-closing move is **not another full application**.

It is one coherent analyst evidence pack that demonstrates:

```text
business question
    -> requirements
    -> data model
    -> SQL validation
    -> Excel analysis
    -> Power BI reporting
    -> process map
    -> user stories
    -> acceptance criteria
    -> UAT
    -> documented evidence
```

That single case study would cover a large share of the repeated technical vocabulary in current analyst postings while keeping every resume claim grounded in work that actually exists.
