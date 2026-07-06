---
title: "Qwen Reranking Experiment Design"
summary: "Designed candidate-coverage and tournament-reranking experiments for a team course project, restructuring how retrieved candidates move through comparison rounds into a final top-25 prediction workflow."
order: 2
year: "2024"
status: "Featured · Reranking experiment design"
featured: true
image: "/images/projects/reranking/cover.svg"
imageAlt: "Abstract retrieval pool narrowing through an iterative tournament reranker"
tags:
  - "Qwen32B"
  - "Retrieval"
  - "Tournament reranking"
  - "Candidate coverage"
  - "Experiment design"
  - "Kaggle"
metrics:
  - label: "Kaggle private MAP@25"
    value: "0.45365"
  - label: "Referenced baseline MAP@25"
    value: "0.43370"
links:
  - label: "Showcase"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/nlp/qwen-tournament-reranking.md"
  - label: "Code"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/nlp_showcase/qwen_reranking"
---

## Overview

In this 2024 team course project, we adapted a public Qwen-based retrieval and reranking pipeline for the Eedi misconception-mining task. The goal was to identify the misconception behind a student's incorrect mathematics answer by retrieving candidate misconception IDs and reranking them into a final prediction list.

## My contribution

My contribution focused on reranking experiment design. I expanded the retrieval pool from 25 to 41 candidates and redesigned the tournament from 3 broad rounds of 8 candidates into 13 narrower rounds of 3 candidates. This made it possible to study the trade-off between candidate coverage and reranker comparison difficulty.

## Experiment design

- **Candidate coverage:** increased the retrieved candidate pool before reranking.
- **Choice-set granularity:** compared broader and narrower candidate groups during tournament rounds.
- **Tournament structure:** reorganized reranking from 3 × 8 to 13 × 3 while carrying candidates through repeated comparisons.
- **Top-25 context:** evaluated how pool size and comparison granularity shaped the final prediction list used for MAP@25.

The team report also compared candidate counts, choice-set sizes, and temperatures during reranking rounds. Prompt and configuration experiments remain team-level.

## Outcome

The adapted reranking experiment reached a Kaggle private MAP@25 score of **0.45365**. Compared with the referenced public baseline MAP@25 of **0.43370**, this corresponds to an absolute gain of **+0.01995 MAP@25**, or approximately **+4.6% relative improvement**.

The result is used here as supporting evidence for the reranking experiment design, while the case study focuses on candidate-pool expansion, tournament restructuring, and experiment interpretation. Because several reranking variables were compared, the outcome is not attributed to one isolated modification.

## Attribution / scope

This work was completed as a team course project and adapted from jagatkiran's public Qwen retrieval/reranking notebook. The public write-up focuses on my confirmed reranking-related contributions; prompt and configuration experiments remain team-level unless separately noted.
