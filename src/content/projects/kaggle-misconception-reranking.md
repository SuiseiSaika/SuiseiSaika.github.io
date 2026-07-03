---
title: "Qwen Retrieval & Tournament Reranking"
summary: "Adapted a public Qwen14B retrieval and Qwen32B reranking notebook for mathematical misconception mining. Expanded retrieval from 25 to 41 candidates and redesigned the reranking tournament from three broad rounds to thirteen focused rounds. Kaggle platform UI indicated a higher score compared to the reference notebook; public version links and screenshots are pending."
order: 5
year: "TODO"
status: "Secondary · Close to featured-ready"
featured: false
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
  - label: "Portfolio placement"
    value: "Strong secondary"
  - label: "Result evidence"
    value: "Kaggle platform UI"
links:
  - label: "Case Study"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/nlp/qwen-tournament-reranking.md"
  - label: "Cleaned Implementation"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/nlp_showcase/qwen_reranking"
---

## Overview

Adapted a public two-stage retrieval and reranking pipeline for identifying mathematical misconceptions behind students' incorrect answers. The retained architecture uses Qwen14B for candidate retrieval and Qwen32B with constrained decoding for reranking.

## Attribution

This team project was adapted from and built upon the public Qwen14B retrieval and Qwen32B reranking notebook by Kaggle user `jagatkiran`.

The full pipeline is not presented as original work. This case study focuses on the changes made to candidate retrieval, tournament structure, prompting, and experiment configuration.

## Contribution

- Expanded the retrieval pool from 25 to 41 candidates.
- Redesigned the reranking tournament from 3 rounds × 8 candidates to 13 rounds × 3 candidates.
- Refined the prompt used to identify the misconception behind an incorrect answer.
- Compared prompt and reranking configurations in the team report.
- Completed successful end-to-end retrieval, reranking, and submission generation.

## Result

According to the Kaggle platform UI, the adapted notebook achieved a higher score than the reference notebook.

This is presented as a platform-observed comparison, not a locally reproduced benchmark. Public screenshots and notebook-version links should be added for verification.

The score difference is not presented as proof that any single modification caused the result.

## Limitations

- Public verification links are pending.
- An individual contribution statement is pending.
- A version-matched ablation chain is pending.
- The score difference should not be attributed solely to one modification.
- The raw team PDF should not be linked publicly until personal information is removed.
- The raw notebook remains unlinked while attribution and output cleanup are incomplete in a public-safe copy.

## Portfolio status

**Strong secondary · Platform score evidence**

The project is close to featured-ready, but remains outside the featured set until its public evidence and individual contribution statement are complete.
