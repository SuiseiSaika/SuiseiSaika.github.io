---
title: "Qwen Retrieval & Tournament Reranking"
summary: "Led experiment planning and task coordination for a team course project adapting a public Qwen retrieval/reranking pipeline, expanding retrieval from 25 to 41 candidates and redesigning its tournament."
order: 2
year: "2024"
status: "Team course project · Featured"
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

In this 2024 team course project, we adapted a public two-stage retrieval and reranking pipeline for identifying mathematical misconceptions behind students' incorrect answers.

## Attribution

Adapted from jagatkiran's public Qwen retrieval/reranking notebook. This work was completed in a team course-project context.

The full pipeline was adapted rather than built from scratch. This case study focuses on the team's experiment work and my confirmed leadership, retrieval-pool, and tournament contributions.

## Contribution

- Served as project leader for experiment planning and task coordination.
- Expanded the retrieval pool from 25 to 41 candidates.
- Redesigned the reranking tournament from 3 rounds × 8 candidates to 13 rounds × 3 candidates.
- Prompt and configuration work remained team-level.

## Result

Platform-observed Kaggle private score: **0.45365**. Referenced public notebook score observed on Kaggle: **0.43370**.

These are platform-observed scores, not a locally reproduced benchmark. Public verification links and screenshots are not included in the portfolio.

The score difference is not presented as proof that any single modification caused the result.

## Limitations

- This was a team course project adapted from an existing public pipeline, not a fully original pipeline.
- Prompt and configuration work remains attributed at team level.
- The score difference should not be attributed solely to one modification.
- The comparison does not support a state-of-the-art claim.
- No local reproduction or ablation-proven improvement is claimed.
- No raw notebook, team report, or notebook version label is linked.

## Portfolio status

**Featured · Platform-observed score evidence**

The project is featured for experiment leadership, retrieval-pool expansion, and tournament redesign within the adapted team pipeline.
