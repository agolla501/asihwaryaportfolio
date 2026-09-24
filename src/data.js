export const impactMetrics = [
  { value: '8M+', label: 'clinical documents indexed' },
  { value: '3.5×', label: 'higher inference throughput' },
  { value: '2,400', label: 'physician hours recovered monthly' },
  { value: '99.2%', label: 'production model uptime' },
]

export const caseStudies = [
  {
    number: '01',
    label: 'Agentic AI',
    title: 'Clinical RAG Assistant',
    context: 'Elevance Health',
    summary:
      'Designed a HIPAA-aligned assistant that orchestrates retrieval, tool calling, reflection, and physician review across clinical workflows.',
    outcome: 'Reduced chart-summary turnaround from ~12 minutes to 3 minutes.',
    tools: ['LangGraph', 'Azure OpenAI', 'AWS Bedrock', 'LlamaIndex', 'MCP'],
  },
  {
    number: '02',
    label: 'Document AI',
    title: 'Claims Processing Automation',
    context: 'HCA Healthcare',
    summary:
      'Built a CI/CD-backed pipeline that converts unstructured EOB documents into structured JSON and EDI 835 remittance files.',
    outcome: 'Improved field-parsing accuracy by 22% across 15K daily records.',
    tools: ['Tesseract OCR', 'Azure Form Recognizer', 'FastAPI', 'GitHub Actions'],
  },
  {
    number: '03',
    label: 'Computer Vision',
    title: 'Digital KYC AI Platform',
    context: 'United India Insurance',
    summary:
      'Scaled computer vision and NLP workflows for liveness, spoof detection, image quality, OCR, and production drift detection.',
    outcome: 'Maintained 97% accuracy across 200K daily transactions.',
    tools: ['TensorFlow', 'PyTorch', 'Kubeflow', 'Tesseract', 'MMD Drift Detection'],
  },
  {
    number: '04',
    label: 'Platform Engineering',
    title: 'Real-Time Payment APIs',
    context: 'Razorpay',
    summary:
      'Developed high-performance RPC endpoints and redesigned data access patterns for real-time payment platform features.',
    outcome: 'Reduced API latency from 250ms to 30ms.',
    tools: ['Python', 'RPC', 'Redis', 'SQL', 'Data Modeling'],
  },
]

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Elevance Health',
    dates: 'Jan 2026 — Present',
    location: 'St. Louis, MO',
    description:
      'Building secure, production-grade agentic RAG, clinical document intelligence, and optimized LLM inference platforms for healthcare workflows.',
  },
  {
    role: 'AI Engineer',
    company: 'HCA Healthcare',
    dates: 'Feb 2025 — Dec 2025',
    location: 'Nashville, TN',
    description:
      'Delivered document AI, clinical NLP, distributed training, model quantization, and MLOps capabilities across Azure and GCP.',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'United India Insurance Co. Ltd.',
    dates: 'Aug 2022 — Dec 2023',
    location: 'Bengaluru, India',
    description:
      'Developed Digital KYC computer vision systems, optimized edge inference, and led root-cause analysis across high-volume production models.',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Razorpay',
    dates: 'Apr 2021 — Jun 2022',
    location: 'Bengaluru, India',
    description:
      'Improved API performance and storage efficiency for real-time payment data platforms through caching and data-model redesign.',
  },
]

export const skillGroups = [
  {
    title: 'Agentic AI & LLMs',
    skills: [
      'LangGraph',
      'LangChain',
      'LlamaIndex',
      'MCP',
      'Azure OpenAI',
      'AWS Bedrock',
      'Agentic RAG',
      'Human-in-the-Loop',
      'NeMo Guardrails',
      'LoRA / QLoRA',
    ],
  },
  {
    title: 'ML Engineering',
    skills: [
      'PyTorch',
      'TensorFlow',
      'NLP',
      'Deep Learning',
      'Quantization',
      'CUDA',
      'Tesseract OCR',
      'Document Parsing',
      'Object Detection',
    ],
  },
  {
    title: 'Cloud & MLOps',
    skills: [
      'Azure AKS',
      'GCP Vertex AI',
      'AWS EKS',
      'Kubernetes',
      'Kubeflow',
      'Docker',
      'KServe',
      'Prometheus',
      'Grafana',
      'CI/CD',
    ],
  },
  {
    title: 'Software & Data',
    skills: [
      'Python',
      'Golang',
      'SQL',
      'FastAPI',
      'REST APIs',
      'Apache Spark',
      'BigQuery',
      'Pinecone',
      'Redis',
      'Git',
    ],
  },
]
