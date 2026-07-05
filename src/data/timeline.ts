export interface TimelineItem {
  year: string;
  event: string;
  description: string;
  technologies: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: '2025–2026',
    event: 'Multi-camera product grading system',
    description:
      'Contributed to runtime, tracking, a PyQt6 control plane, RS232 software-side integration, configuration, testing, and Jetson demo preparation.',
    technologies: ['PyQt6', 'RS232', 'Jetson Orin Nano 8G', 'Intel RealSense D435'],
  },
  {
    year: '2024',
    event: 'Qwen reranking experiment design',
    description:
      'Designed and coordinated the reranking experiment structure, expanded candidate coverage from 25 to 41, and studied choice-set effects through a redesigned tournament.',
    technologies: ['Qwen', 'Reranking', 'Candidate coverage', 'Tournament design'],
  },
  {
    year: '2024',
    event: 'Retrieval-augmented question answering',
    description:
      'Compared embedding models, open-source language models, and prompt variants against a no-RAG baseline.',
    technologies: ['ChromaDB', 'MMR', 'Llama', 'Gemma', 'Phi'],
  },
];
