export interface TimelineItem {
  year: string;
  event: string;
  description: string;
  technologies: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: 'TODO',
    event: 'Multi-camera product grading system',
    description:
      'Integrated multi-camera input, oriented object detection, segmentation, multiprocessing, and rule-based grading logic.',
    technologies: ['YOLO', 'TensorRT', 'OpenCV', 'NVIDIA Jetson Orin'],
  },
  {
    year: 'TODO',
    event: 'Retrieval-augmented question answering',
    description:
      'Combined embedding models, ChromaDB retrieval, MMR selection, and multiple open-source language models.',
    technologies: ['ChromaDB', 'MMR', 'Llama', 'Gemma', 'Phi'],
  },
  {
    year: 'TODO',
    event: 'Qwen retrieval & tournament reranking',
    description:
      'Implemented constrained decoding and scoring with an AWQ-quantized Qwen2.5-32B model served through vLLM.',
    technologies: ['Qwen2.5-32B', 'AWQ', 'vLLM', 'Constrained decoding'],
  },
];
