---
title: "Time-series Anomaly Detection"
summary: "Implemented and compared KNN, PCA, DFT, and Haar DWT anomaly scoring, with cleaned standard-library mechanics demonstrated on synthetic sequences."
order: 5.5
year: "TODO"
status: "Strong secondary · Synthetic showcase"
featured: false
image: "/images/projects/anomaly/cover.svg"
imageAlt: "Abstract time-series signals with highlighted anomaly spikes"
tags:
  - "KNN"
  - "PCA"
  - "DFT"
  - "Haar DWT"
  - "ROC AUC"
metrics:
  - label: "Wafer ROC AUC"
    value: "0.998590"
  - label: "ECG200 ROC AUC"
    value: "0.947917"
links:
  - label: "Case Study"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/anomaly-detection/time-series-anomaly-detection.md"
  - label: "Cleaned Implementation"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/anomaly_showcase/timeseries"
---

## Overview

Implemented and evaluated KNN distance scoring, PCA reconstruction error, DFT features, and Haar DWT features for a course assignment using the Wafer and ECG200 time-series datasets.

## Results

In the original fixed-`k=5` course comparison, Haar DWT produced the highest documented AUC on both datasets: **0.998590** on Wafer and **0.947917** on ECG200.

For the public showcase, I reconstructed KNN scoring, PCA reconstruction error, DFT and Haar DWT transforms, score ranking, thresholding, and tie-aware ROC AUC with the Python standard library. The runnable example uses only synthetic sinusoid and spike sequences.

## Limitations

- The reported Wafer and ECG200 values come from the original course experiment, separately from the synthetic showcase implementation.
- Dataset provenance, split construction, and end-to-end reproduction details remain incomplete in the public materials.
- The work is not a production anomaly-detection system.
- No external deployment validation or large-scale benchmark has been completed.
