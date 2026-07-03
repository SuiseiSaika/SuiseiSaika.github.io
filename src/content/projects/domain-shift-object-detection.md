---
title: "Domain Shift Object Detection"
summary: "Evaluated data-selection and semi-supervised strategies for YOLOv7 under cross-camera domain shift, using mAP-based comparisons across CityCam subsets."
order: 3
year: "TODO"
status: "Implemented · Sanitized case study"
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
  - label: "Case Study"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/computer-vision/domain-shift-object-detection.md"
  - label: "Cleaned Implementation"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/cv_showcase/domain_shift"
---

## Overview

Investigated how camera-specific visual distributions affect object detection and compared data-selection, balanced sampling, and semi-supervised strategies under domain shift.

The course project used the third-party YOLOv7 implementation and CityCam data provided for the assignment. My work focused on data composition, training configuration, adaptation strategies, mAP evaluation, and analysis around that established detector.

## Evidence

- Cross-camera YOLOv7 experiments with mAP-based comparisons.
- Training and inference outputs covering multiple data-selection strategies.
- Visual evidence of camera-dependent performance variation.
- The highest documented aggregate results in the selected course tables were **0.776 mAP@0.5** and **0.521 mAP@0.5:0.95**, achieved by different strategies.

## Public presentation

The linked public showcase contains aggregate metrics, synthetic evaluation records, and cleaned reporting utilities. Raw surveillance imagery, CityCam assets, training outputs, weights, and vendored YOLOv7 code remain excluded.

## Limitations

- Dataset and image licensing must be confirmed before publishing raw examples.
- Dataset redistribution rights remain pending review.
- Reproduction instructions require a cleaned, attribution-complete environment.
- The course results do not establish production deployment performance or broad real-world generalization.
