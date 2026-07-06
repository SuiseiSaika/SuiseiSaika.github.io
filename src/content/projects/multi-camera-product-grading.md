---
title: "Real-time Multi-source Product Grading System"
summary: "A private-source team system integrating multi-source vision, lane-aware grading logic, a PyQt6 control plane, structured results, and RS232 software-side signaling."
order: 1
year: "2025–2026"
status: "Private-source team system · Sanitized case study"
featured: true
image: "/images/projects/multi-camera/cover.svg"
imageAlt: "Abstract conveyor lanes passing camera inspection, detection, grading, and control-signal stages"
tags:
  - "YOLO"
  - "OBB"
  - "Segmentation"
  - "PyQt6"
  - "RS232"
  - "Jetson Orin Nano 8G"
  - "Intel RealSense D435"
metrics: []
links:
  - label: "Showcase"
    url: "https://github.com/SuiseiSaika/ai-portfolio-case-studies/tree/main/case-studies/private-systems/multi-source-product-grading.md"
---

## Overview

Contributed to a private-source team system integrating model runtime, tracking, a PyQt6 control plane, RS232 software-side integration, configuration, testing, and rule-based grading workflows.

Public architecture detail remains conceptual. Target hardware includes Jetson Orin Nano 8G and Intel RealSense D435; public performance benchmarks are pending.

## Three system views

<div class="system-view-grid">
  <article class="system-view-card">
    <p class="system-view-label">System view 01</p>
    <h3>Deployment-Oriented System</h3>
    <p>A private-source runtime accepts multi-source camera inputs and connects detection, segmentation, and tracking with lane-aware, rule-based grading logic.</p>
    <ul>
      <li>Configuration-driven source and inference workflow</li>
      <li>Structured result outputs and RS232 software-side signaling</li>
      <li>Testing and demo preparation for the integrated system</li>
    </ul>
    <p>Jetson Orin Nano 8G and Intel RealSense D435 describe the demo environment only. Runtime benchmarks remain pending public verification.</p>
  </article>
  <article class="system-view-card">
    <p class="system-view-label">System view 02</p>
    <h3>Control Plane / GUI</h3>
    <p>A PyQt6 operator-facing control plane integrates with the private inference runtime without exposing its implementation.</p>
    <ul>
      <li>Runtime configuration editing and source selection</li>
      <li>Inference launch, stop, and external-process control</li>
      <li>Runtime logs and generated-result navigation</li>
    </ul>
    <p>Public screenshots and detailed workflow evidence remain pending review; no validated operator-UX or production-GUI claim is made.</p>
  </article>
  <article class="system-view-card">
    <p class="system-view-label">System view 03</p>
    <h3>Master’s Prototype</h3>
    <p>A separate master’s research prototype explored conveyor-based product-grading vision in an experimental setting.</p>
    <ul>
      <li>High-level dataset and annotation workflow</li>
      <li>Experimental vision pipeline for product grading</li>
      <li>Research context that informed the later system direction</li>
    </ul>
    <p>This prototype is not the private runtime, and no thesis metrics are used as deployment evidence.</p>
  </article>
</div>

## Contribution

- Contributed to the runtime pipeline and tracking flow.
- Built and integrated the PyQt6 control plane and configuration workflow.
- Handled RS232 software-side integration and validation.
- Contributed testing and Jetson demo preparation.

## Team boundary

RS232 hardware/device-side signal transfer and equipment handling were completed by other team members.

## Public evidence boundary

The linked material is a sanitized technical case study. It does not expose raw runtime or GUI repositories, private implementation details, or unverified operational measurements.

- Public screenshots may be added after disclosure review.
- Detailed operator-workflow evidence remains pending public review.
- FPS, latency, accuracy, Jetson, and deployment benchmarks remain pending public verification.
