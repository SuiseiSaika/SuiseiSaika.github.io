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
  - label: "Evaluation"
    value: "mAP@0.5"
  - label: "Cross-domain metric"
    value: "mAP@0.5:0.95"
links: []
---

## Overview

Investigated how camera-specific visual distributions affect object detection and compared data-selection, balanced sampling, and semi-supervised strategies under domain shift.

## Evidence

- Cross-camera YOLOv7 experiments with mAP-based comparisons.
- Training and inference outputs covering multiple data-selection strategies.
- Visual evidence of camera-dependent performance variation.

## Public presentation

This page intentionally summarizes the architecture and experimental findings without linking the raw course repository, surveillance imagery, or vendored third-party training code.

## Limitations

- Dataset and image licensing must be confirmed before publishing raw examples.
- Personal contribution and starter-code boundaries should be stated explicitly.
- Reproduction instructions require a cleaned, attribution-complete environment.
