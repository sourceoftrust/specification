---
layout: ../../../layouts/Specification.astro
title: Source of Trust – Core Definition and Conceptual Framework
description: Editor’s Draft version 0.1 defining Source of Trust, its terminology, and six fundamental principles for trustworthy information sources.
date: '2026-10-09'
version: '0.1'
---
## Abstract

This document introduces Source of Trust (SoT) as a conceptual framework for describing trustworthy information sources in AI-mediated information systems. It provides a working definition, basic terminology, and six fundamental principles: identity, authority, provenance, evidence, consistency, and accessibility. The framework supports explicit, context-sensitive descriptions of sources and the information they provide.

## Status of This Document

This document is an **Editor's Draft**, version **0.1**, published on **9 October 2026**. The initiative is in **Early Development**. This draft establishes a shared working vocabulary and a foundation for further specification work. Its definitions and principles are open to revision through public review.

Feedback and proposed changes are welcome through [GitHub Issues](https://github.com/sourceoftrust/specification/issues) and pull requests in the [public repository](https://github.com/sourceoftrust/specification). Discussion also takes place in the [Source of Trust community](https://reddit.com/r/sourceoftrust). The repository records the history of changes. The Latest Version URL identifies the current draft; this version's text is recorded in Git history.

## 1. Introduction

Information systems increasingly mediate how people find, interpret, and reuse information. Describing a source clearly requires attention to who provides information, what it concerns, where it originates, and what supports it.

Source of Trust brings these properties into a common conceptual framework. It treats trustworthiness as a judgment grounded in identifiable properties and evidence within an explicit context. A description of a source should state the subject, intended use, and relevant time period to which that judgment applies.

The framework is intended for people who publish, evaluate, develop, or use information systems. Future work may expand these concepts into detailed specifications, RFCs, and reproducible assessment methods. This draft provides the vocabulary on which that work can build.

## 2. Terminology

<dl class="terms">
<dt id="term-entity">Entity</dt><dd>An identifiable person, organization, or other accountable provider of information.</dd>
<dt id="term-information-source">Information source</dt><dd>An entity that provides information through identifiable publications, records, or interfaces.</dd>
<dt id="term-context">Context</dt><dd>The subject area, intended use, time period, and conditions within which information and its source are evaluated.</dd>
<dt id="term-attribution">Attribution</dt><dd>The explicit association of information with the entity responsible for providing it.</dd>
<dt id="term-provenance">Provenance</dt><dd>A traceable record of the origin, publication, and relevant transformations of information.</dd>
<dt id="term-evidence">Evidence</dt><dd>Records, observations, references, or other verifiable material that supports a claim.</dd>
<dt id="term-reliability">Reliability</dt><dd>The demonstrated ability to provide accurate and dependable information within a defined context.</dd>
<dt id="term-trustworthiness">Trustworthiness</dt><dd>The degree to which a source's identifiable properties and supporting evidence justify reliance on its information for a defined use.</dd>
</dl>

## 3. Scope and Interpretation

This draft describes source-level properties and their relationship to information. Assessment should consider both the provider and the particular claims being used. The relevance and quality of supporting evidence depend on the context and should be described explicitly.

The principles are complementary. Each contributes a distinct aspect of a source's description; their significance can vary by domain and use. Any future assessment method should document its criteria, evidence, limitations, and time of evaluation so its conclusions can be reviewed.

## 4. Core Definition

<blockquote class="definition">
A Source of Trust (SoT) is an identifiable and verifiable entity that provides reliable, attributable, and evidence-supported information within a defined context.
</blockquote>

The definition connects an identifiable entity to the information it provides. Verification should allow a reader to examine the source's identity, the attribution of its information, and the supporting evidence. The defined context establishes the boundaries within which reliability and trustworthiness are considered.

A useful description therefore identifies the entity, specifies the context, links the relevant information to its provider, and explains the evidence supporting reliance on that information.

## 5. Fundamental Principles

### 5.1. Identity

The information source has a clear and verifiable identity. Names, identifiers, and public records should allow people and systems to distinguish the entity and connect its publications to the same provider. Identity claims should be supported by accessible verification material.

### 5.2. Authority

The source demonstrates expertise and authority relevant to a defined subject or context. Relevant qualifications, responsibilities, experience, or documented work should be attributable and open to examination. The basis and scope of authority should be stated.

### 5.3. Provenance

The origin and attribution of information are traceable. Publications should identify their source and provide relevant dates, references, and revision history. When information is derived or transformed, its relationship to earlier material should be documented.

### 5.4. Evidence

Claims are supported by verifiable facts, references, or other supporting information. Evidence should be accessible, relevant to the claim, and described clearly enough to permit examination. The relationship between a claim and its supporting material should be explicit.

### 5.5. Consistency

Information is coherent across relevant publications and records. Sources should explain material differences and record corrections or updates. Consistency is evaluated with attention to context, time, and the evidence available for each claim.

### 5.6. Accessibility

Information is accessible and interpretable by humans and machines. Clear language, stable URLs, semantic structure, and machine-readable descriptions help readers locate information, understand its meaning, and follow its attribution and evidence.

## 6. References

The definition and framework in this draft are proposed by the Source of Trust initiative and developed through the linked public repository. The following reference specifies the content license.

- **CC0 1.0 Universal.** Creative Commons. [Public Domain Dedication and legal code](https://creativecommons.org/publicdomain/zero/1.0/).
