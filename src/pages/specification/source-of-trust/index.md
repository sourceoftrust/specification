---
layout: ../../../layouts/Specification.astro
title: Source of Trust – Core Definition and Conceptual Framework
description: 'Editor’s Draft 0.3.0: an open reference model for contextual source trust, recognition, selection, and citation in AI Search and GEO.'
date: '2026-10-10'
firstPublishedDate: '2026-10-09'
version: '0.3.0'
releaseTag: true
---
## Abstract

This document proposes Source of Trust (SoT) as an open reference framework for examining information sources in **AI Search and Generative Engine Optimization (GEO)**. Its research question is: **What makes an information source a Source of Trust for AI search engines?** It connects contextual source trust with the study of source recognition, selection, and citation, preserving the distinction between a provider’s practices, particular claims, and observed search behavior. Six complementary assessment dimensions organize the model: identity, authority, provenance, evidence, consistency, and accessibility. The framework is an original synthesis informed by scholarly research, technical specifications, and official provider documentation.

## Status of This Document

This document is an **Editor's Draft**, version **0.3.0**, published on **10 October 2026**. The initiative is in **Early Development**. It proposes a research reference model for public review; its dimensions are not presented as a search provider’s algorithm or mandatory standard. Recommendations guide source descriptions and AI search assessments according to the roles and scope defined in §3. The [proposal record](#7-proposal-and-change-record) documents this revision’s rationale.

Feedback and proposed changes are welcome through [GitHub Issues](https://github.com/sourceoftrust/specification/issues) and pull requests in the [public repository](https://github.com/sourceoftrust/specification). A [Reddit discussion space](https://reddit.com/r/sourceoftrust) is also available. Git history records revisions; the Latest Version URL identifies the current draft.

## 1. Introduction

Source of Trust examines why an information source is relevant and warrants reliance for a particular AI search information need, and how those properties relate to observed source recognition, selection, and citation. It connects three objects of examination: **the provider**, **the information it supplies**, and **the query context in which that information is used**. Context includes the subject, intended use, relevant time period, and consequences of error.

AI search systems retrieve and combine information to answer user queries. The initiative studies this process through official documentation, technical research, contextual observations, and public discussion. Its purpose is to make source-selection behavior more understandable and derive practically useful findings for AI visibility. Broader research on credibility and information quality supplies foundations for this specific research scope.

### 1.1. Scholarly and Technical Foundations

Research on **source credibility** examines how recipients judge believability. Metzger and Flanagin describe the roles of perceived expertise and trustworthiness, and discuss heuristics involving reputation, endorsement, and consistency. Their account motivates a distinction between perceived credibility and the evidence supporting a judgment. [Metzger and Flanagin, 2013](#ref-metzger-flanagin)

In their theoretical account of **epistemic vigilance**, Sperber and colleagues distinguish evaluation of an informant from evaluation of communicated content. They discuss competence, honesty, and the dependence of trust on topic, audience, and circumstances. This draft draws on those distinctions when proposing competence, integrity, and context as elements of justified reliance. [Sperber et al., 2010, §§4 and 6](#ref-sperber)

Wang and Strong’s empirical framework treats **data quality** from the consumer’s perspective. It includes intrinsic, contextual, representational, and accessibility dimensions. Their results motivate examining fitness for a particular use alongside accuracy, interpretability, and access. The present draft applies that insight to information supplied by a source. [Wang and Strong, 1996, pp. 19–22](#ref-wang-strong)

**Provenance** supplies a technical account of origin and responsibility. W3C PROV-DM distinguishes entities, activities, and agents, and describes attribution and derivation. W3C’s Data on the Web Best Practices recommends publishing provenance, quality information, and version history. These provide foundations for traceable, inspectable information practices. [PROV-DM](#ref-prov-dm); [DWBP, best practices 5–8](#ref-dwbp)

### 1.2. The Proposed Synthesis

This framework uses **trustworthiness** for the properties and practices that warrant reliance, and **credibility** for a recipient’s judgment of believability. An assessment connects observed evidence to a stated use. It should identify which findings concern the provider, which concern particular claims, and which depend on context.

The six principles below organize that assessment. Identity establishes who is involved; authority examines the basis of relevant knowledge; provenance traces information history; evidence supports claims; consistency examines coherence and revision; accessibility enables inspection and interpretation. Competence and integrity inform the assessment across these principles. This organization is the initiative’s proposed conceptual model, to be refined through documented applications and public review.

In this draft, **principle** names the conceptual guidance and **dimension** names the corresponding aspect examined in an assessment. There are six dimensions. Section 5.7 explains how to interpret signals across them; it is not an additional dimension.

### 1.3. Documented AI Search Context

Google documents query fan-out and variation between AI Mode and AI Overviews. It also states that eligibility for supporting links depends on indexing and snippet eligibility, with no special Schema.org markup required. These are provider-specific statements, not universal selection rules. [Google AI features](#ref-google-ai)

Google’s content guidance describes contextual expertise and trust-related considerations, while distinguishing E-E-A-T from a specific ranking factor. This informs the discussion of source quality without establishing the initiative’s dimensions as algorithmic inputs. [Google helpful content](#ref-google-content)

OpenAI documents separate controls for search crawling and model-training crawling. The framework consequently treats retrieval access and training access as distinct technical observations. [OpenAI crawlers](#ref-openai-crawlers)

The initiative separates **documented facts**, **observed behavior**, and **its own interpretations**. Observations should identify the product, query, language, market, time, and session conditions where known. A correlation between a source property and citation is an observation to examine, not proof of an internal ranking mechanism.

## 2. Terminology

<dl class="terms">
<dt id="term-entity">Information-providing entity</dt><dd>A distinguishable person, organization, or accountable service that provides information. This draft uses “entity” for the provider; a publication is an information artifact associated with that provider. A described person, product, place, or other subject is distinguished from the provider of its description.</dd>
<dt id="term-source">Information source</dt><dd>The provider considered in relation to the information it supplies. When a document or dataset is called a source, its responsible provider and relevant upstream sources should also be identified.</dd>
<dt id="term-context">Context</dt><dd>The subject, intended use, time period, and conditions within which reliance is assessed, including the consequences of error.</dd>
<dt id="term-claim">Claim</dt><dd>An assertion about the world whose meaning, scope, and supporting grounds can be examined.</dd>
<dt id="term-identity">Identity</dt><dd>The attributes and identifiers used to distinguish a provider and connect it to its publications.</dd>
<dt id="term-competence">Competence</dt><dd>The relevant knowledge, capabilities, or access to observations that enable a provider to supply dependable information in a specified domain.</dd>
<dt id="term-verification">Verification</dt><dd>A documented examination of a specified claim or relationship against stated criteria, reporting the method, evidence, outcome, and limitations. Independent confirmation is corroboration by an assessor whose relevant independence is explained.</dd>
<dt id="term-integrity">Integrity</dt><dd>Practices directed toward honest and accurate communication, including faithful reporting, disclosure of relevant interests and uncertainty, and correction of material errors.</dd>
<dt id="term-authority">Epistemic authority</dt><dd>A supported basis for treating a provider as knowledgeable about a specified matter, such as expertise, direct observation, or responsibility for the relevant records.</dd>
<dt id="term-attribution">Attribution</dt><dd>A stated relationship between information and the agent responsible for producing, publishing, or transforming it, with the role specified.</dd>
<dt id="term-provenance">Provenance</dt><dd>Information about the origin and history of an artifact, including relevant agents, activities, derivations, and revisions. See <a href="#ref-prov-dm">PROV-DM</a>.</dd>
<dt id="term-evidence">Evidence</dt><dd>Observations, records, methods, arguments, or other inspectable material used to support or challenge a specific claim or assessment.</dd>
<dt id="term-reliability">Reliability</dt><dd>A demonstrated pattern or well-supported capacity to supply accurate, appropriately qualified information under specified conditions.</dd>
<dt id="term-credibility">Source credibility</dt><dd>A recipient’s judgment that a source is believable, informed by perceptions of expertise and trustworthiness. See <a href="#ref-metzger-flanagin">Metzger and Flanagin (2013)</a>.</dd>
<dt id="term-trustworthiness">Information-source trustworthiness</dt><dd>The extent to which a provider’s competence, integrity, and information practices warrant reliance on its information for a specified use.</dd>
<dt id="term-trust-signal">Trust signal</dt><dd>An observable feature used as an indicator when assessing a source or claim. Its evidential value depends on what it indicates, how it can be checked, and the context of use.</dd>
<dt id="term-ai-search">AI Search</dt><dd>Search experiences that use generative systems to retrieve, interpret, and synthesize information in response to user queries, including answers with supporting source links.</dd>
<dt id="term-geo">Generative Engine Optimization (GEO)</dt><dd>The discipline of examining and improving how information is understood and used in generative search experiences. This framework focuses on the source properties and evidence relevant to that examination.</dd>
<dt id="term-source-trust">Source Trust</dt><dd>A context-bound judgment about the grounds for relying on a source’s information, supported by evidence of relevant competence, integrity, and information practices.</dd>
<dt id="term-source-recognition">Source Recognition</dt><dd>The identification or representation of a source and its relationship to information by an AI search system. Observations should distinguish an identified provider from an unattributed document or ambiguous name.</dd>
<dt id="term-source-selection">Source Selection</dt><dd>The retrieval or use of a source’s information for a particular AI search response. Visible output provides evidence of particular uses; it does not expose every source considered internally.</dd>
<dt id="term-citation">Citation</dt><dd>An explicit reference or link attributing information in an AI search response to a source. A citation records attribution; whether the linked source supports the associated statement requires examination.</dd>
<dt id="term-ai-visibility">AI Visibility</dt><dd>The observed presence and representation of a source, organization, or offering in AI search outputs under stated conditions, including mentions and citations. Visibility observations are distinct from judgments of source trust.</dd>
</dl>

<span id="3-scope-and-interpretation"></span>

## 3. Scope and Applicability

The framework’s research scope is **AI Search / GEO**: the recognition, contextual assessment, selection, and citation of information sources by AI search systems. It examines source properties, their supporting evidence, and their relationship to observable AI search behavior. The scholarly foundations inform this scope rather than extending it to a general theory of trust. Its recommendations apply according to the following roles:

- **Information source:** responsible for its own claims, information practices, disclosures, and corrections.
- **Signal publisher:** responsible for accurately representing a signal's origin, meaning, status, and any transformations it performs.
- **Evaluator:** responsible for the scope, methods, evidence, uncertainty, and conclusions of an assessment.
- **Supporting tool:** responsible for accurately performing and describing its stated functions. It may support selected dimensions through collection, publication, comparison, or examination of information.

AI search providers determine their own retrieval and selection processes. This reference model supports investigation and interpretation; it does not prescribe their algorithms. An evaluator should name the product and distinguish an end-user search observation from an API-generated answer or an assessment of the source itself.

One participant may perform several roles. A tool provider publishing its own signals or assessments also acts as their publisher or evaluator. Responsibility follows the claims made and the activities performed.

An assessment should specify its query or information need, subject matter and use, publications or claims examined, dimensions addressed, evidence base, methods, and evaluation date. Partial assessments are useful when their conclusions remain within that scope. Findings about a selected dimension support conclusions about that dimension; a broader judgment of trustworthiness requires evidence adequate to its broader scope. Examination depth should reflect the consequences of error.

Participants should distinguish activities they control, properties they can examine with limited evidence, and outcomes dependent on other parties. Sources can maintain their own records and corrections; external records, upstream disclosures, and downstream use depend on the relevant parties. Assessments should distinguish information that is unavailable, not examined, insufficiently supported, or contradicted, and explain how material gaps affect their conclusions. Reassessment should respond to relevant changes in evidence or context.

The principles describe properties and assessment practices. Implementations may use suitable human, organizational, or technical methods for the selected purpose. The role and scope of a tool determine its contribution. In a PROV representation, providers can be represented as agents and publications as entities; this is one model for expressing provenance. [PROV-DM, §§2.1 and 5.3](#ref-prov-dm)

## 4. Core Definition

<blockquote class="definition">
A Source of Trust (SoT) is an identifiable information-providing entity for which evidence of relevant competence, integrity, and reliable information practices justifies reliance on its attributable information within a defined context.
</blockquote>

**Identifiable** means the provider can be distinguished and its relationship to the information checked. **Relevant competence** concerns its ability to know or establish what it reports. **Integrity** concerns the quality of its communication practices. **Reliable information practices** include appropriate methods, faithful attribution, documented provenance, and responses to material errors.

**Evidence-based justification** connects those properties to the quality and support of the information actually used. A documented assessment should examine the examined claims’ accuracy, relevance, timeliness, uncertainty, and fitness for the stated purpose. Reliability judgments should state their observation period, conditions, and supporting grounds; documented practices supply evidence whose significance is assessed through their operation and results. **Within a defined context** sets the boundaries of the conclusion.

The definition synthesizes source and content evaluation from [Sperber et al.](#ref-sperber), the distinction between perceived credibility and its evaluation discussed by [Metzger and Flanagin](#ref-metzger-flanagin), context-sensitive quality from [Wang and Strong](#ref-wang-strong), and traceable responsibility from [PROV-DM](#ref-prov-dm). The wording and organization are proposed by the Source of Trust initiative.

### 4.1. Contextual Trust Assessment

For AI search source selection, trust assessment is tied to the **query, subject, and information need**. The following principles apply to the interpretation of this reference model:

1. **Source Trust is contextual.** A judgment identifies the claims and circumstances for which reliance is justified.
2. **Dimension relevance varies.** A query about a business’s own services, a scientific explanation, and a report of personal experience call for different kinds of competence and evidence.
3. **Sources need not satisfy every dimension equally.** An assessment selects relevant dimensions and explains material gaps in relation to the information need, rather than applying a universal checklist.
4. **General prominence is distinct from contextual competence.** Familiarity, reputation, or a domain-authority metric does not by itself establish knowledge of the matter under examination. A less prominent primary source can hold directly relevant evidence.
5. **Citation is not proof of trustworthiness.** A visible AI citation establishes an observed reference; the source’s competence, the claim’s support, and the fit to the query must be examined separately.
6. **The model assumes no universal Trust Score.** Findings may be reported by dimension and context without collapsing them into one number.

These are the initiative’s applications of context-sensitive source and content evaluation to AI search, grounded in [Sperber et al.](#ref-sperber), [Wang and Strong](#ref-wang-strong), and the credibility distinctions discussed by [Metzger and Flanagin](#ref-metzger-flanagin). They are not statements about a provider’s internal weighting. Comparing observed selection with this assessment helps identify questions for GEO research while keeping source quality and search behavior distinct.

## 5. Fundamental Principles

The following six principles serve as the model’s **trust dimensions for AI search assessment**. Their application is contextual, as defined in §4.1. The AI search interpretations below are the initiative’s proposed use of the existing foundations, not a list of confirmed ranking factors.

### 5.1. Identity

**Question: Who is providing the information?**

A source description should identify the provider, distinguish it from similarly named entities, and supply checkable links to its publications. Useful material includes maintained identity records, attributable contact or responsibility information, and evidence connecting the provider to the publication channel. Identity assertions and links should identify the relationship claimed. Reports of verification should identify the examiner, criteria, evidence, date, outcome, and limitations; independent confirmation should explain the relevant independence of the confirming party.

URIs provide a shared identification mechanism on the Web. This framework uses stable identifiers to connect descriptions, while supporting records provide evidence for the specific identity or responsibility relationship examined. [Web Architecture, §2](#ref-webarch)

For AI search, identity assessment asks whether an answer refers to the intended provider and attributes information to the correct source. Ambiguous names and mismatched publication identities are relevant observations even when a source is mentioned.

### 5.2. Authority

**Question: What grounds the source’s knowledge in this context?**

A source description should explain relevant expertise, first-hand access, or responsibility for the records being reported. Evidence may include documented methods, relevant work, qualifications, or a defined custodial role. The scope of knowledge should be explicit: an organization may be well positioned to report its own opening hours, while a scientific claim requires evidence appropriate to that field.

This principle concerns epistemic authority. Institutional responsibility identifies a role; domain competence establishes a capacity to know. Qualifications and identity checks support conclusions within their demonstrated scope. Relevant interests, methodological limitations, and communication practices should be considered alongside them. [Sperber et al., §4](#ref-sperber)

For AI search, assess authority against the question being answered. A primary source for its own offering and an independent source for an evaluation play different evidential roles. General recognition does not replace the inquiry into relevant knowledge.

### 5.3. Provenance

**Question: Where did the information originate, and how did it reach this publication?**

A publication should identify relevant creators, publishers, dates, upstream material, and transformations. Its provenance should distinguish original observation from quotation, aggregation, and inference, and record material revisions. Available links or other suitable records should enable inspection of earlier material and agent roles. Publishers should describe known upstream history, their own transformations, and material gaps, including limits on access to supporting records.

PROV-DM supplies relationships for attribution and derivation. This framework uses those distinctions to make the chain of responsibility inspectable. The adequacy of the resulting claims is examined through evidence. [PROV-DM, §§5.2–5.3](#ref-prov-dm)

For AI search, distinguish the cited publication, its responsible provider, and any upstream evidence. Several cited pages may derive from one original account; their number alone does not establish independent corroboration.

### 5.4. Evidence

**Question: What supports this claim, and how can that support be examined?**

Claims should be connected to relevant records, observations, methods, or reasoned arguments. Readers should be able to identify the supporting material, inspect what it establishes, and understand the connection to the conclusion. Descriptions should distinguish observed results from interpretation, specify relevant uncertainty, and address material contrary evidence known or found within the stated examination scope.

The kind and strength of support required depend on the claim and intended use. A documented procedure provides evidence about that procedure; assessment of integrity also examines its operation, disclosures, and responses to errors. An attributable customer experience can support claims about that experience; generalization depends on the collection method, selection, and relevant context. For corroboration, evaluators should examine whether cited publications draw on independent observations or repeat a common upstream account. This is a proposed application of the source-and-content distinction in [Sperber et al., §§4 and 6](#ref-sperber).

For AI search, examine whether a cited passage supports the particular statement in the generated answer and whether that statement fits the query. Preserve the distinction between the source’s claim, the system’s summary, and the evaluator’s conclusion.

### 5.5. Consistency

**Question: Are claims coherent across comparable contexts, and are changes explained?**

A source should use coherent descriptions and explain material differences across publications. Comparisons should identify the publications examined and account for dates, definitions, methods, and scope. Corrections and substantive revisions should remain traceable, so readers can understand how the current account developed.

Metzger and Flanagin discuss cross-source agreement as a credibility heuristic. In this framework, its evidential weight is assessed through the sources’ provenance, independence, and supporting material. A documented correction can strengthen the account by resolving an identified error. [Metzger and Flanagin, §5.3](#ref-metzger-flanagin); [DWBP, best practices 7–8](#ref-dwbp)

For AI search, separate a source’s changed information from variation in generated answers. Comparisons should keep the query and observation conditions explicit and check whether contradictory statements originate in the source material or its interpretation.

### 5.6. Accessibility

**Question: Can the information and its supporting grounds be found and understood?**

Sources should provide stable links, clear language, meaningful document structure, and accessible supporting material. Where human-readable explanations and machine-readable metadata are both provided, they should express consistent claims, attribution, and scope. Where access is limited, descriptions should explain the available evidence and how it may be examined. Publishers maintain the access mechanisms they control; assessments distinguish observed availability from downstream discovery, processing, or use by other systems.

Wang and Strong identify interpretability and accessibility as quality dimensions. W3C’s publishing guidance provides technical practices for metadata, persistent identification, and provenance. This framework treats accessibility as an enabling condition for evaluation. [Wang and Strong, pp. 19–22](#ref-wang-strong); [DWBP](#ref-dwbp)

For AI search, record whether relevant content and its supporting material can be retrieved and interpreted. **JSON-LD, Schema.org, and structured data are optional representation methods, not prerequisites for Source Trust or established ranking factors in this model.** Where used, they should faithfully describe the visible information. Technical access and source trust remain distinct findings.

### 5.7. Interpreting Trust Signals

A trust signal should be described by **the property it indicates**, **its origin**, **its examination status**, and **its relevance to the current assessment**. Descriptions should distinguish the assertion and its publication, available means of examination, checks actually performed, their outcomes, and any independent confirmation. These describe different aspects of evidence; its strength depends on method, scope, and supporting grounds. For example, a qualification can support a claim of competence in its field; a revision log can document correction practices; a primary record can support a particular factual claim.

Research describes how familiarity, reputation, and social endorsement enter credibility judgments. This draft proposes examining the grounds behind such cues and preserving the distinction between an observed signal and the conclusion drawn from it. [Metzger and Flanagin, §§5.1–5.3](#ref-metzger-flanagin)

## 6. References

These references provide scholarly and technical foundations. The Source of Trust definition and six-principle organization are the initiative’s synthesis. Section references identify the material used; the cited works retain their own licenses.

### 6.1. Research

<div id="ref-metzger-flanagin"></div>

**Metzger, Miriam J., and Andrew J. Flanagin (2013).** “Credibility and trust of information in online environments: The use of cognitive heuristics.” *Journal of Pragmatics*, 59, 210–220. [DOI: 10.1016/j.pragma.2013.07.012](https://doi.org/10.1016/j.pragma.2013.07.012). [Author-hosted full text](https://flanagin.faculty.comm.ucsb.edu/CV/Metzger%26Flanagin%2C2013%28JoP%29.pdf).

<div id="ref-sperber"></div>

**Sperber, Dan; Fabrice Clément; Christophe Heintz; Olivier Mascaro; Hugo Mercier; Gloria Origgi; and Deirdre Wilson (2010).** “Epistemic Vigilance.” *Mind & Language*, 25(4), 359–393. [DOI: 10.1111/j.1468-0017.2010.01394.x](https://doi.org/10.1111/j.1468-0017.2010.01394.x). [Author-hosted full text](https://www.dan.sperber.fr/wp-content/uploads/Epistemic-Vigilance-published.pdf).

<div id="ref-wang-strong"></div>

**Wang, Richard Y., and Diane M. Strong (1996).** “Beyond Accuracy: What Data Quality Means to Data Consumers.” *Journal of Management Information Systems*, 12(4), 5–33. [DOI: 10.1080/07421222.1996.11518099](https://doi.org/10.1080/07421222.1996.11518099). [University-hosted full text](https://courses.washington.edu/geog482/resource/14_Beyond_Accuracy.pdf).

### 6.2. Technical Specifications

<div id="ref-prov-dm"></div>

**Moreau, Luc, and Paolo Missier, editors (2013).** *PROV-DM: The PROV Data Model.* W3C Recommendation, 30 April 2013. [Dated specification](https://www.w3.org/TR/2013/REC-prov-dm-20130430/).

<div id="ref-dwbp"></div>

**W3C (2017).** *Data on the Web Best Practices.* W3C Recommendation, 31 January 2017. [Dated specification](https://www.w3.org/TR/2017/REC-dwbp-20170131/).

<div id="ref-webarch"></div>

**Jacobs, Ian, and Norman Walsh, editors (2004).** *Architecture of the World Wide Web, Volume One.* W3C Recommendation, 15 December 2004. [Dated specification](https://www.w3.org/TR/2004/REC-webarch-20041215/).

### 6.3. Official Provider Documentation

<div id="ref-google-ai"></div>

**Google Search Central.** *AI features and your website.* Official provider documentation on Google AI Overviews and AI Mode; consulted 10 October 2026. [Documentation](https://developers.google.com/search/docs/appearance/ai-features).

<div id="ref-google-content"></div>

**Google Search Central.** *Creating helpful, reliable, people-first content.* Official provider guidance on content quality and contextual expertise; consulted 10 October 2026. [Documentation](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

<div id="ref-openai-crawlers"></div>

**OpenAI.** *Overview of OpenAI Crawlers.* Official provider documentation distinguishing search and training crawlers; consulted 10 October 2026. [Documentation](https://developers.openai.com/api/docs/bots).

These provider documents describe their stated practices. The framework’s contextual dimensions and their AI search application remain the initiative’s synthesis.

<span id="63-content-license"></span>

### 6.4. Content License

**Creative Commons.** *CC0 1.0 Universal.* [Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/) and [legal code](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en).

## 7. Proposal and Change Record

This table records the editorial rationale for changes published in this draft. It records neither votes nor external endorsement.

| Proposal | Rationale | Resolution | Version |
| --- | --- | --- | --- |
| P-001: AI Search Research Focus | The previous scope was broader than the intended research objective. | Focused the abstract, introduction, scope, terminology, and dimension interpretations on AI search source recognition, assessment, selection, and citation; retained the scholarly foundations and Core Definition. | 0.3.0 |
| P-002: Contextual Trust Assessment | Source trust depends on the query, information need, and application context. | Added §4.1 on contextual dimension relevance, competence, citation interpretation, and assessment without a universal Trust Score. | 0.3.0 |
