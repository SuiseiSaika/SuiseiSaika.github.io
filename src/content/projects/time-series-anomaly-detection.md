---
title: "Time-series Anomaly Detection"
summary: "Implemented KNN, PCA, DFT, and Haar DWT anomaly-scoring pipelines and compared their behavior through a structured ROC-AUC evaluation process."
order: 5.5
year: "2024"
status: "Individual course assignment · Secondary"
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
  - label: "Showcase"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/anomaly-detection/time-series-anomaly-detection.md"
  - label: "Code"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/src/anomaly_showcase/timeseries"
---

## Overview

In this 2024 individual anomaly-detection course assignment, I implemented and evaluated KNN distance scoring, PCA reconstruction error, DFT features, and Haar DWT features using the Wafer and ECG200 time-series datasets.

## Evaluation summary

In the original fixed-`k=5` course comparison, Haar DWT produced the highest documented AUC on both datasets: **0.998590** on Wafer and **0.947917** on ECG200.

For the public showcase, I reconstructed KNN scoring, PCA reconstruction error, DFT and Haar DWT transforms, score ranking, thresholding, and tie-aware ROC AUC with the Python standard library. The runnable example uses only synthetic sinusoid and spike sequences.

## Course and showcase scope

The reported Wafer and ECG200 values come from the original course experiment, while the public implementation demonstrates the scoring and evaluation mechanics with synthetic sequences. This separation keeps the result context clear while making the KNN, PCA, DFT, Haar DWT, thresholding, and tie-aware ROC-AUC workflow directly inspectable. Future materials may add a compact pipeline diagram and a course-result table with dataset and parameter context.
