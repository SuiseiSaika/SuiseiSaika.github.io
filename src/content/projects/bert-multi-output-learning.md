---
title: "BERT Multi-output Learning"
summary: "A BERT architecture trained to predict regression and classification targets together with task-specific preprocessing and loss balancing experiments."
order: 4
year: "TODO"
status: "Implemented"
featured: true
image: "/images/projects/bert/cover.svg"
imageAlt: "Abstract shared BERT encoder branching into regression and classification outputs"
tags:
  - "BERT"
  - "Multi-task learning"
  - "Regression"
  - "Classification"
metrics:
  - label: "Test Spearman"
    value: "0.8395"
  - label: "Test accuracy"
    value: "0.8815"
links:
  - label: "Case Study"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/nlp/bert-multi-output-learning.md"
  - label: "Cleaned Implementation"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/nlp_showcase/bert_multi_output"
---

## Overview

Constructed a shared-encoder BERT architecture to predict relatedness regression and entailment classification targets for a course assignment.

Designed task-specific preprocessing workflows, compared cased and uncased checkpoints, compared joint and separately trained task models, and analyzed classification errors with confusion matrices.

## Results

The reported test results were **0.8395 Spearman correlation** for relatedness and **0.8815 accuracy** for entailment classification.

For the public showcase, the evaluation mechanics were refactored into dependency-free Spearman, accuracy, error, and confusion-matrix helpers with synthetic inputs.

## Limitations

- This work was completed in a course-assignment setting.
- Dataset split provenance, preprocessing, seeds, and repeated-run uncertainty remain incompletely documented.
- The public module demonstrates evaluation behavior rather than a production NLP classifier or end-to-end model reproduction.
