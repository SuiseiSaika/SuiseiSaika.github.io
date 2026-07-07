export interface TimelineItem {
  year: string;
  event: string;
  organization: string;
  description: string;
  technologies: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: '2016–2020',
    event: 'B.S. in Management Information Systems',
    organization: 'National Chengchi University',
    description:
      'Built a foundation in software development, databases, information systems, and business-oriented system design.',
    technologies: ['Programming', 'Databases', 'Information Systems', 'Web Applications'],
  },
  {
    year: '2021–2023',
    event: 'Product & Software Development',
    organization: 'IT Startup',
    description:
      'Worked in a product-facing role while also contributing to software implementation, system maintenance, workflow improvement, and internal tool development.',
    technologies: ['Product Requirements', 'System Development', 'Web Services', 'SQL', 'Cross-functional Communication'],
  },
  {
    year: '2023–2025',
    event: 'M.S. in Communications Engineering',
    organization: 'National Tsing Hua University',
    description:
      'Focused on deep learning, computer vision, natural language processing, anomaly detection, and applied machine learning experiments through graduate coursework and research projects.',
    technologies: ['Deep Learning', 'Computer Vision', 'NLP', 'Anomaly Detection', 'Machine Learning'],
  },
  {
    year: '2025–2026',
    event: 'Real-Time Multi-Source Product Grading System',
    organization: 'Private-source AI application project',
    description:
      'Contributed to a private-source team AI application for configurable conveyor product grading, covering inference runtime design, camera and source handling, tracking, grading logic, GUI-driven operation, and prototype-to-product system evolution.',
    technologies: ['AI Applications', 'Computer Vision', 'Edge AI', 'GUI Workflow', 'YOLO', 'System Integration'],
  },
];
