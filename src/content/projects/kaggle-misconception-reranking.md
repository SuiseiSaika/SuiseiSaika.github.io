---
title: "Qwen Reranking Experiment Design"
summary: "Designed and coordinated reranking experiments for a team course project, expanding candidate coverage from 25 to 41 and redesigning the tournament from 3 rounds × 8 candidates to 13 rounds × 3 candidates."
order: 2
year: "2024"
status: "Featured · Reranking experiment design · Platform-observed score evidence"
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

This 2024 team course project adapted a public Qwen retrieval/reranking pipeline for Eedi misconception mining. My confirmed contribution focused on designing and coordinating the reranking experiment structure.

## Reranking experiment design

- Expanded the retrieval pool from 25 to 41 candidates to study candidate coverage.
- Redesigned the tournament from 3 rounds × 8 candidates to 13 rounds × 3 candidates.
- Studied how candidate coverage and choice-set size affected the reranking process.
- Coordinated the experiment structure used to compare reranking conditions.

The team report additionally compares candidate counts, choice-set sizes, and temperatures across reranking rounds. Prompt and configuration work remains attributed at team level.

## Report-backed reranking comparison

| Report condition | Average score |
| --- | ---: |
| Without reranking | 0.42076 |
| One-phase Qwen 32B reranking | **0.45262** |

The report shows a higher average score for the one-phase reranking condition than for the condition without reranking. This comparison supports the value of evaluating reranking, but it is not causal proof for any single candidate count, choice-set size, temperature, or topology change.

## Platform-observed result

Platform-observed Kaggle private score: **0.45365**. Referenced public notebook score observed on Kaggle: **0.43370**.

These are platform-observed scores, not a locally reproduced benchmark. Public verification links and screenshots are not included in the portfolio.

## Attribution and scope

Adapted from jagatkiran's public Qwen retrieval/reranking notebook. The baseline pipeline and model components remain the work of their respective authors; my contribution centered on reranking experiment design, candidate coverage, and tournament topology within the team project.

## Limitations

- This was a team course project adapting an existing public pipeline.
- Prompt and configuration work remains attributed at team level.
- The reported differences should not be attributed solely to one modification.
- The evidence does not establish state-of-the-art performance, local reproduction, or an ablation-proven causal improvement.
- No raw notebook, team report, or notebook version label is linked.

## Portfolio status

**Featured · Reranking experiment design · Platform-observed score evidence**

The project is featured for evidence-backed reranking experiment design, candidate-coverage analysis, and tournament-topology redesign within an adapted team pipeline.
