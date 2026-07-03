---
title: "Qwen Retrieval & Tournament Reranking"
summary: "Adapted a public Qwen retrieval/reranking pipeline for mathematical misconception mining, expanding retrieval from 25 to 41 candidates and redesigning the tournament from three broad rounds to thirteen focused rounds. Kaggle private score: 0.45365."
order: 2
year: "TODO"
status: "Featured · Team course project"
featured: true
image: "/images/projects/reranking/cover.svg"
imageAlt: "Abstract retrieval pool narrowing through an iterative tournament reranker"
tags:
  - "Qwen14B"
  - "Qwen32B"
  - "Retrieval"
  - "Tournament reranking"
  - "Constrained decoding"
  - "Kaggle"
metrics:
  - label: "Kaggle private score"
    value: "0.45365"
  - label: "Reference score"
    value: "0.43370"
links:
  - label: "Showcase Case Study"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/nlp/qwen-tournament-reranking.md"
  - label: "Cleaned Code"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/nlp_showcase/qwen_reranking"
---

## Overview

Adapted a public two-stage retrieval and reranking pipeline for identifying mathematical misconceptions behind students' incorrect answers. The retained architecture uses Qwen14B for candidate retrieval and Qwen32B with constrained decoding for reranking.

## Attribution

Adapted from jagatkiran's public Qwen retrieval/reranking notebook. This work was completed in a team course-project context.

The full pipeline is not presented as original work. This case study focuses on the changes made to candidate retrieval, tournament structure, prompting, and experiment configuration.

## Contribution

- Expanded the retrieval pool from 25 to 41 candidates.
- Redesigned the reranking tournament from 3 rounds × 8 candidates to 13 rounds × 3 candidates.
- Refined the prompt used to identify the misconception behind an incorrect answer.
- Compared prompt and reranking configurations in the team report.
- Completed successful end-to-end retrieval, reranking, and submission generation.

## Result

The adapted pipeline received a Kaggle private score of **0.45365**. The referenced public notebook score observed on Kaggle was **0.43370**.

These are platform-observed scores, not a locally reproduced benchmark. Public verification links and screenshots remain pending.

The score difference is not presented as proof that any single modification caused the result.

## Limitations

- Public verification links are pending.
- This was a team course project adapted from an existing public pipeline, not a fully original pipeline.
- An individual contribution statement is pending.
- A controlled ablation chain is pending.
- The score difference should not be attributed solely to one modification.
- The comparison does not support a state-of-the-art claim.
- The raw team PDF should not be linked publicly until personal information is removed.
- The raw notebook remains unlinked while attribution and output cleanup are incomplete in a public-safe copy.

## Portfolio status

**Featured · Platform-observed score evidence**

The project is featured for its retrieval and reranking implementation work; public score verification and an individual contribution statement remain pending.
