---
title: "RAG Question Answering"
summary: "Implemented and evaluated a retrieval-augmented QA pipeline across embedding models, open-source LLMs, and prompt variants."
order: 5
year: "TODO"
status: "Secondary · Course evaluation prototype"
featured: false
image: "/images/projects/rag/cover.svg"
imageAlt: "Abstract retrieval and language model pipeline"
tags:
  - "RAG"
  - "ChromaDB"
  - "MMR"
  - "Llama"
  - "Gemma"
  - "Phi"
metrics:
  - label: "Best RAG result"
    value: "9/10"
  - label: "No-RAG baseline"
    value: "4/10"
links:
  - label: "Showcase Case Study"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/nlp/rag-question-answering.md"
  - label: "Cleaned Code"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/nlp_showcase/rag"
---

## Overview

Built a retrieval-augmented QA pipeline combining embedding models, ChromaDB retrieval, MMR selection, and multiple open-source LLMs for a course assignment.

Experimented with Llama, Gemma, and Phi models using unified prompt templates for consistent evaluation.

## Contribution

- Integrated embedding, vector retrieval, and MMR selection stages.
- Used unified prompt templates to compare multiple open-source models consistently.
- Evaluated embedding, generator, and prompt configurations against a no-RAG baseline.

## Results and scope

The best reported RAG configuration answered **9/10** course-defined questions correctly, compared with **4/10** for the no-RAG baseline. The evaluation set was small, so these results support a course-scale comparison rather than a production RAG claim.

The public showcase reconstructs chunking, dense retrieval, prompt construction, citation records, and paired evaluation with deterministic synthetic text. It is separate from the original course environment.

## Limitations

- The evaluation used 10 course-defined questions.
- No production latency or cost benchmark has been completed.
- No large-scale retrieval benchmark or production validation has been completed.
