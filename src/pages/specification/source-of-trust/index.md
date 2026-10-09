---
layout: ../../../layouts/Specification.astro
title: Source of Trust – Core Definition and Conceptual Framework
description: Editor’s Draft version 0.1 defining Source of Trust, its terminology, and six fundamental principles for trustworthy information sources.
date: '2026-10-09'
version: '0.1'
---
## Abstract

This document proposes Source of Trust (SoT) as a framework for justified reliance on information from identifiable providers. It distinguishes the identity and practices of a provider from the quality of particular claims and from a reader’s perception of credibility. It introduces a core definition and six complementary principles: identity, authority, provenance, evidence, consistency, and accessibility. The framework is an original synthesis informed by the research and technical specifications cited below.

## Status of This Document

This document is an **Editor's Draft**, version **0.1**, published on **9 October 2026**. The initiative is in **Early Development**. It proposes terminology and principles for public review. Domain-specific assessment criteria and methods are subjects for subsequent specification work.

Feedback and proposed changes are welcome through [GitHub Issues](https://github.com/sourceoftrust/specification/issues) and pull requests in the [public repository](https://github.com/sourceoftrust/specification). Discussion also takes place in the [Source of Trust community](https://reddit.com/r/sourceoftrust). Git history records revisions; the Latest Version URL identifies the current draft.

## 1. Introduction

Source of Trust provides a vocabulary for describing why reliance on an information provider is justified for a particular use. It connects three objects of examination: **the provider**, **the information it supplies**, and **the context in which that information is used**. Context includes the subject, intended use, relevant time period, and consequences of error.

### 1.1. Scholarly and Technical Foundations

Research on **source credibility** examines how recipients judge believability. Metzger and Flanagin describe the roles of perceived expertise and trustworthiness, and discuss heuristics involving reputation, endorsement, and consistency. Their account motivates a distinction between perceived credibility and the evidence supporting a judgment. [Metzger and Flanagin, 2013](#ref-metzger-flanagin)

In their theoretical account of **epistemic vigilance**, Sperber and colleagues distinguish evaluation of an informant from evaluation of communicated content. They discuss competence, honesty, and the dependence of trust on topic, audience, and circumstances. This draft draws on those distinctions when proposing competence, integrity, and context as elements of justified reliance. [Sperber et al., 2010, §§4 and 6](#ref-sperber)

Wang and Strong’s empirical framework treats **data quality** from the consumer’s perspective. It includes intrinsic, contextual, representational, and accessibility dimensions. Their results motivate examining fitness for a particular use alongside accuracy, interpretability, and access. The present draft applies that insight to information supplied by a source. [Wang and Strong, 1996, pp. 19–22](#ref-wang-strong)

**Provenance** supplies a technical account of origin and responsibility. W3C PROV-DM distinguishes entities, activities, and agents, and describes attribution and derivation. W3C’s Data on the Web Best Practices recommends publishing provenance, quality information, and version history. These provide foundations for traceable, inspectable information practices. [PROV-DM](#ref-prov-dm); [DWBP, best practices 5–8](#ref-dwbp)

### 1.2. The Proposed Synthesis

This framework uses **trustworthiness** for the properties and practices that warrant reliance, and **credibility** for a recipient’s judgment of believability. An assessment connects observed evidence to a stated use. It should identify which findings concern the provider, which concern particular claims, and which depend on context.

The six principles below organize that assessment. Identity establishes who is involved; authority examines the basis of relevant knowledge; provenance traces information history; evidence supports claims; consistency examines coherence and revision; accessibility enables inspection and interpretation. Competence and integrity inform the assessment across these principles. This organization is the initiative’s proposed conceptual model, to be refined through documented applications and public review.

## 2. Terminology

<dl class="terms">
<dt id="term-entity">Information-providing entity</dt><dd>A distinguishable person, organization, or accountable service that provides information. This draft uses “entity” for the provider; a publication is an information artifact associated with that provider.</dd>
<dt id="term-source">Information source</dt><dd>The provider considered in relation to the information it supplies. When a document or dataset is called a source, its responsible provider and relevant upstream sources should also be identified.</dd>
<dt id="term-context">Context</dt><dd>The subject, intended use, time period, and conditions within which reliance is assessed, including the consequences of error.</dd>
<dt id="term-claim">Claim</dt><dd>An assertion about the world whose meaning, scope, and supporting grounds can be examined.</dd>
<dt id="term-identity">Identity</dt><dd>The attributes and identifiers used to distinguish a provider and connect it to its publications.</dd>
<dt id="term-competence">Competence</dt><dd>The relevant knowledge, capabilities, or access to observations that enable a provider to supply dependable information in a specified domain.</dd>
<dt id="term-integrity">Integrity</dt><dd>Practices directed toward honest and accurate communication, including faithful reporting, disclosure of relevant interests and uncertainty, and correction of material errors.</dd>
<dt id="term-authority">Epistemic authority</dt><dd>A supported basis for treating a provider as knowledgeable about a specified matter, such as expertise, direct observation, or responsibility for the relevant records.</dd>
<dt id="term-attribution">Attribution</dt><dd>A stated relationship between information and the agent responsible for producing, publishing, or transforming it, with the role specified.</dd>
<dt id="term-provenance">Provenance</dt><dd>Information about the origin and history of an artifact, including relevant agents, activities, derivations, and revisions. See <a href="#ref-prov-dm">PROV-DM</a>.</dd>
<dt id="term-evidence">Evidence</dt><dd>Observations, records, methods, arguments, or other inspectable material used to support or challenge a specific claim or assessment.</dd>
<dt id="term-reliability">Reliability</dt><dd>A demonstrated pattern or well-supported capacity to supply accurate, appropriately qualified information under specified conditions.</dd>
<dt id="term-credibility">Source credibility</dt><dd>A recipient’s judgment that a source is believable, informed by perceptions of expertise and trustworthiness. See <a href="#ref-metzger-flanagin">Metzger and Flanagin (2013)</a>.</dd>
<dt id="term-trustworthiness">Information-source trustworthiness</dt><dd>The extent to which a provider’s competence, integrity, and information practices warrant reliance on its information for a specified use.</dd>
<dt id="term-trust-signal">Trust signal</dt><dd>An observable feature used as an indicator when assessing a source or claim. Its evidential value depends on what it indicates, how it can be checked, and the context of use.</dd>
</dl>

## 3. Scope and Interpretation

The framework concerns information providers and the grounds for relying on their information. An assessment should specify its subject matter and use, the publications or claims examined, the evaluation date, and the available evidence. The appropriate depth of examination depends on the consequences of error.

Identity establishes a checkable connection to a provider. Provenance records how information arose. The support for a claim is then evaluated through its evidence and methods. In a PROV representation, responsible providers can be represented as agents and publications as entities; PROV-DM supplies the detailed model for those relationships. [PROV-DM, §§2.1 and 5.3](#ref-prov-dm)

The principles are complementary and address different questions. An evaluator should record findings and uncertainty for each relevant dimension, explain how they support the conclusion, and revisit the assessment when circumstances or evidence change. The meaning and importance of each observation should be justified for the stated use.

## 4. Core Definition

<blockquote class="definition">
A Source of Trust (SoT) is an identifiable information-providing entity for which evidence of relevant competence, integrity, and reliable information practices justifies reliance on its attributable information within a defined context.
</blockquote>

**Identifiable** means the provider can be distinguished and its relationship to the information checked. **Relevant competence** concerns its ability to know or establish what it reports. **Integrity** concerns the quality of its communication practices. **Reliable information practices** include appropriate methods, faithful attribution, documented provenance, and responses to material errors.

**Evidence-based justification** connects those properties to the quality and support of the information actually used. A documented assessment should examine the claims’ accuracy, relevance, timeliness, uncertainty, and fitness for the stated purpose. **Within a defined context** sets the boundaries of the conclusion.

The definition synthesizes source and content evaluation from [Sperber et al.](#ref-sperber), the distinction between perceived credibility and its evaluation discussed by [Metzger and Flanagin](#ref-metzger-flanagin), context-sensitive quality from [Wang and Strong](#ref-wang-strong), and traceable responsibility from [PROV-DM](#ref-prov-dm). The wording and organization are proposed by the Source of Trust initiative.

## 5. Fundamental Principles

### 5.1. Identity

**Question: Who is providing the information?**

A source description should identify the provider, distinguish it from similarly named entities, and supply checkable links to its publications. Useful material includes maintained identity records, attributable contact or responsibility information, and evidence connecting the provider to the publication channel. Verification should state which relationship was checked and by what method.

URIs provide a shared identification mechanism on the Web. This framework uses stable identifiers to connect descriptions, while the supporting records establish the provider’s identity and responsibility. [Web Architecture, §2](#ref-webarch)

### 5.2. Authority

**Question: What grounds the source’s knowledge in this context?**

A source description should explain relevant expertise, first-hand access, or responsibility for the records being reported. Evidence may include documented methods, relevant work, qualifications, or a defined custodial role. The scope of knowledge should be explicit: an organization may be well positioned to report its own opening hours, while a scientific claim requires evidence appropriate to that field.

This principle concerns epistemic authority. Institutional responsibility identifies a role; domain competence establishes a capacity to know. Relevant interests, methodological limitations, and communication practices should be considered alongside them. [Sperber et al., §4](#ref-sperber)

### 5.3. Provenance

**Question: Where did the information originate, and how did it reach this publication?**

A publication should identify relevant creators, publishers, dates, upstream material, and transformations. Its provenance should distinguish original observation from quotation, aggregation, and inference, and record material revisions. Links should enable readers to inspect the earlier material and the roles of the agents involved.

PROV-DM supplies relationships for attribution and derivation. This framework uses those distinctions to make the chain of responsibility inspectable. The adequacy of the resulting claims is examined through evidence. [PROV-DM, §§5.2–5.3](#ref-prov-dm)

### 5.4. Evidence

**Question: What supports this claim, and how can that support be examined?**

Claims should be connected to relevant records, observations, methods, or reasoned arguments. Readers should be able to identify the supporting material, inspect what it establishes, and understand the connection to the conclusion. Descriptions should distinguish observed results from interpretation, specify relevant uncertainty, and address material contrary evidence.

The kind and strength of support required depend on the claim and intended use. For corroboration, evaluators should examine whether cited publications draw on independent observations or repeat a common upstream account. This is a proposed application of the source-and-content distinction in [Sperber et al., §§4 and 6](#ref-sperber).

### 5.5. Consistency

**Question: Are claims coherent across comparable contexts, and are changes explained?**

A source should use coherent descriptions and explain material differences across publications. Comparisons should account for dates, definitions, methods, and scope. Corrections and substantive revisions should remain traceable, so readers can understand how the current account developed.

Metzger and Flanagin discuss cross-source agreement as a credibility heuristic. In this framework, its evidential weight is assessed through the sources’ provenance, independence, and supporting material. A documented correction can strengthen the account by resolving an identified error. [Metzger and Flanagin, §5.3](#ref-metzger-flanagin); [DWBP, best practices 7–8](#ref-dwbp)

### 5.6. Accessibility

**Question: Can the information and its supporting grounds be found and understood?**

Sources should provide stable links, clear language, meaningful document structure, and accessible supporting material. Human-readable explanations and machine-readable metadata should express the same claims, attribution, and scope. Where access is limited, descriptions should explain the available evidence and how it may be examined.

Wang and Strong identify interpretability and accessibility as quality dimensions. W3C’s publishing guidance provides technical practices for metadata, persistent identification, and provenance. This framework treats accessibility as an enabling condition for evaluation. [Wang and Strong, pp. 19–22](#ref-wang-strong); [DWBP](#ref-dwbp)

### 5.7. Interpreting Trust Signals

A trust signal should be described by **the property it indicates**, **its origin**, **the available verification method**, and **its relevance to the current assessment**. For example, a qualification can support a claim of competence in its field; a revision log can document correction practices; a primary record can support a particular factual claim.

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

### 6.3. Content License

**Creative Commons.** *CC0 1.0 Universal.* [Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/) and [legal code](https://creativecommons.org/publicdomain/zero/1.0/legalcode.en).
