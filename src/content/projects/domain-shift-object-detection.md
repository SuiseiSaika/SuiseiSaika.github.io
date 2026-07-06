---
title: "Domain Shift Object Detection"
summary: "Configured YOLOv7-based domain-adaptation experiments, comparing data-selection and semi-supervised strategies through a structured mAP evaluation workflow."
order: 3
year: "2023"
status: "Individual course assignment · Experiment summary"
featured: true
image: "/images/projects/domain-shift/cover.svg"
imageAlt: "Abstract camera domains feeding a shared object detector and evaluation chart"
tags:
  - "YOLOv7"
  - "Domain shift"
  - "Object detection"
  - "Data selection"
  - "mAP"
metrics:
  - label: "Best mAP@0.5"
    value: "0.776"
  - label: "Best mAP@0.5:0.95"
    value: "0.521"
links:
  - label: "Showcase"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/computer-vision/domain-shift-object-detection.md"
  - label: "Code"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/cv_showcase/domain_shift"
---

## Overview

In this 2023 individual computer-vision course assignment, I investigated how camera-specific visual distributions affect object detection and compared data-selection, balanced sampling, and semi-supervised strategies under domain shift.

The course project used the third-party YOLOv7 implementation and CityCam data provided for the assignment. My work focused on data composition, training configuration, adaptation strategies, mAP evaluation, and analysis around that established detector.

## Experiment and evaluation workflow

- Cross-camera YOLOv7 experiments with mAP-based comparisons.
- Training and inference outputs covering multiple data-selection strategies.
- Analysis of camera-dependent performance variation.
- The highest documented aggregate results in the selected course tables were **0.776 mAP@0.5** and **0.521 mAP@0.5:0.95**, achieved by different strategies.

## Public showcase

The linked showcase presents aggregate metrics, synthetic evaluation records, and cleaned reporting utilities. It describes the experiment workflow without redistributing surveillance imagery, CityCam assets, training outputs, weights, or the third-party YOLOv7 implementation.

## Result context

- The metrics come from the course experiment tables and are interpreted within that cross-camera assignment setup.
- YOLOv7 is an attributed third-party detector; the project work centers on data composition, training configuration, adaptation strategies, and evaluation.
- Future materials may include a sanitized experiment matrix and a compact mAP comparison table with strategy context.
