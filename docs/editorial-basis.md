# Editorial basis — draft 0.3.0

Reviewed 10 October 2026. The public specification contains complete citations
and links to the texts used. Original synthesis is identified in sections 1.2
and 4; the six principles are proposed editorial guidance.

## Sources and use

- Metzger & Flanagin (2013), DOI 10.1016/j.pragma.2013.07.012:
  author-hosted article, sections 1 and 5. Source and message credibility;
  reputation, endorsement, and consistency as evaluation heuristics.
- Sperber et al. (2010), DOI 10.1111/j.1468-0017.2010.01394.x:
  author-hosted article, sections 4 and 6. Theoretical account distinguishing
  evaluation of the informant from evaluation of communicated content;
  competence, honesty, and contextual calibration.
- Wang & Strong (1996), DOI 10.1080/07421222.1996.11518099:
  university-hosted article, research methods and pp. 19–22. Empirical
  consumer-oriented framework of intrinsic, contextual, representational,
  and accessibility data quality. Its application to source descriptions is
  this initiative's synthesis.
- W3C PROV-DM (2013), sections 2.1, 5.2, 5.3:
  distinctions among artifacts, responsible agents, attribution and derivation.
- W3C Data on the Web Best Practices (2017), practices 5–9:
  provenance, quality information, versions, history, and persistent identifiers.
- W3C Web Architecture (2004), section 2:
  URI identification and the distinction between identifiers and resources.

## Definition revision

The initial wording assumed reliability and trustworthiness without specifying
how those judgments are grounded. The revised definition makes justification
by evidence explicit, includes relevant competence and integrity, and retains
identity, attribution, and a defined context. Its wording is original.

The principles address distinct questions. Integrity is considered across
communication, evidence disclosure, interests, uncertainty, and correction
practices. Consistency is assessed with provenance and source independence;
accessibility enables evaluation. The current draft proposes a framework whose
domain-specific assessment methods remain open for subsequent work.

## Refinement in 0.2.0

The core definition is unchanged from 0.1. Role allocation, partial assessments,
control boundaries, and verification reporting clarify the initiative's proposed
framework. These are editorial applications of the existing foundations, rather
than requirements attributed to the cited research. Source properties remain
subject to evidence appropriate to the intended use; selected tool functions and
limited observations justify conclusions within their stated scope.

## AI Search / GEO focus in 0.3.0

The Core Definition and six scholarly/technical foundations are retained.
The research object is now exclusively source recognition, contextual assessment,
selection, and citation in AI search. Section 4.1 and the AI search applications
of the six dimensions are the initiative's synthesis, not confirmed ranking
factors. Section 5.7 interprets signals across the six dimensions.

Official documentation consulted 10 October 2026:

- Google Search Central, AI features and your website: query fan-out, product
  variation, eligibility, and absence of special Schema.org requirements.
- Google Search Central, Creating helpful, reliable, people-first content:
  contextual expertise and the distinction between E-E-A-T and a ranking factor.
- OpenAI, Overview of OpenAI Crawlers: separate search and training access.

Provider-specific statements are separated from observations and editorial
interpretation in §1.3. Citation is observed attribution rather than an automatic
finding of trustworthiness. JSON-LD and structured data remain optional means of
representation. P-001 and P-002 record the prepared changes without implying
external participation or a vote. Publication and a version tag require approval.

## Publication discipline

Keep the definition identical on both pages. Support substantive new claims with
primary sources and identify interpretations. State whether a cited account is
empirical, theoretical, or a technical specification. Keep an observation of a
trust signal separate from the conclusion it supports. Record subsequent
revisions in Git and retain immutable version tags for citation.
