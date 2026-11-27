// Resume data. Extracted from the committed page markup.
export const roles = [
  {
    "title": "Lead Software Engineer",
    "org": "PwC",
    "url": "https://www.pwc.com",
    "period": "2024 to present",
    "location": "Los Angeles, CA",
    "blurb": "Card tokenization, fraud models, and hybrid search for Capital One and Discover.",
    "bullets": [
      {
        "lead": "Discover Global Network Fraud ML",
        "text": "Real-time fraud and gambling detection. Live feature pipelines and risk models score payments as they happen."
      },
      {
        "lead": "Capital One Databolt",
        "text": "Vaultless, field-level tokenization in Go and TypeScript. AI, analytics, and payments use tokens and never see real card numbers."
      },
      {
        "lead": "Capital One Eno",
        "text": "Live NLU, entity, and intent models moved off Kubeflow and onto Capital One's enterprise AI platform."
      },
      {
        "lead": "CapitalOne.com Search",
        "text": "Hybrid search and indexing pipelines. Fast autocomplete as you type."
      },
      {
        "lead": "Discover.com Search",
        "text": "Hybrid vector and BM25 search. Offline test sets measure answer quality."
      },
      {
        "lead": "Discover Global Payments Network Fraud Models",
        "text": "Encoder-decoder, gated linear recurrence, long-context memory, Transformer, and Word2Vec/Node2Vec models in PyTorch, NumPy, and SciPy."
      }
    ]
  },
  {
    "title": "Software Engineering Manager, Infrastructure",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2021 to 2024",
    "location": "San Diego, CA",
    "blurb": "Cloud transit payment systems for NYC MTA, LA Metro, WMATA, BART, SFMTA, and MBTA.",
    "bullets": [
      {
        "lead": "WMATA, San Diego MTS & PATCO",
        "text": "An 18-engineer team across the U.S., India, and Germany. PagerDuty, Prometheus, and Grafana keep transit payments up for millions of riders."
      },
      {
        "lead": "NYC MTA OMNY",
        "text": "Tap-to-pay EMV and Apple Pay fare services on Docker and Kubernetes."
      },
      {
        "lead": "SFMTA & LA Metro",
        "text": "Multi-cloud fare services on Kubernetes across AWS and Azure. VPA, HPA, and KEDA handle autoscaling."
      },
      {
        "lead": "BART & Boston MBTA",
        "text": "Zero-trust service mesh with Istio mTLS, Smallstep private CA, CrowdStrike, and Nessus."
      },
      {
        "lead": "NextBus Umo IQ",
        "text": "PCI and SOC 1/2 Terraform and GitHub Actions pipelines deploying Python, Java, and Node.js across AWS, Azure, and vSphere."
      }
    ]
  },
  {
    "title": "Lead Senior Software Engineer",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2017 to 2021",
    "location": "San Diego, CA & Washington, DC",
    "blurb": "Founding DevOps engineer for demand ML, rider chatbots, and Cubic's cloud fare platform.",
    "bullets": [
      {
        "lead": "NextBus",
        "text": "Real-time bus arrival ML on AWS ECS and Lambda. TensorFlow, PySpark, and Node.js predict arrivals."
      },
      {
        "lead": "Urban Insights",
        "text": "Transit demand ML and search pipelines on AWS SageMaker, monitored with Prometheus and Grafana."
      },
      {
        "lead": "Chicago Metra",
        "text": "Rider chatbot on AWS Lambda, Twilio, and Azure Cognitive Services. Riders check card balances by phone, text, or email."
      },
      {
        "lead": "Cubic Transit Fare Payments Platform",
        "text": "20 legacy Java fare services, now on Kubernetes, Terraform, and Azure CI/CD under PCI, SOC 2, ISO 27001, and SOX."
      }
    ]
  },
  {
    "title": "Senior Software Engineer",
    "org": "EPAM Systems",
    "url": "https://www.epam.com",
    "period": "2015 to 2017",
    "location": "Washington, DC",
    "blurb": "Enterprise search, mortgage appraisal APIs, mobile apps, and AWS systems.",
    "bullets": [
      {
        "lead": "Fannie Mae Collateral Underwriter",
        "text": "Python REST APIs and an Angular app for home mortgage appraisals."
      },
      {
        "lead": "Lockheed Martin Intranet Search",
        "text": "Internal search on Node.js and Python services, running on Docker and Kubernetes."
      },
      {
        "lead": "Poison Control (poison.org) & Canadian Tire",
        "text": "Poison Control apps and Canadian Tire online shopping on AWS. CI/CD and Liquibase update PostgreSQL with zero downtime."
      }
    ]
  }
];

export const education = [
  {
    "school": "University of Texas at Tyler",
    "url": "https://www.uttyler.edu",
    "detail": "Master of Science, Industrial Engineering, 2015"
  },
  {
    "school": "The Pennsylvania State University",
    "url": "https://www.psu.edu",
    "detail": "Bachelor of Science, Linguistics, 2011"
  },
  {
    "school": "The Pennsylvania State University",
    "url": "https://www.psu.edu",
    "detail": "Bachelor of Arts, Journalism, 2011"
  }
];

export const skills = [
  {
    "group": "AI & Machine Learning Models",
    "items": "Discover Global Payments Network Fraud Models; Capital One Eno NLU/intent; CapitalOne.com & Discover.com hybrid search; Radio Index & Radio Whisper; Cubic Urban Insights & NextBus ML",
    "bullets": [
      { "lead": "Discover Global Network", "text": "Fraud & gambling ML, feature pipelines, real-time inference" },
      { "lead": "Capital One Eno", "text": "NLU, entity & intent models, Kubeflow" },
      { "lead": "CapitalOne.com & Discover.com", "text": "Hybrid vector & BM25 search, ANN/KNN, offline eval" },
      { "lead": "Radio Index & Radio Whisper", "text": "Custom encoder-decoder speech models, PyTorch, Hugging Face, vLLM, RAG, A2UI" },
      { "lead": "Discover Global Payments Network Fraud Models", "text": "Custom encoder-decoder, gated RNN, Transformers, Word2Vec, Node2Vec, PyTorch" },
      { "lead": "Cubic Urban Insights & NextBus", "text": "SageMaker, TensorFlow, PySpark, Azure Cognitive Services" }
    ]
  },
  {
    "group": "Finance, Payments & Banking",
    "items": "Capital One Databolt tokenization; Discover Global Network fraud ML; NYC MTA OMNY & LA Metro TAP; WMATA, BART, MBTA, SF Muni, MTS, PATCO; Fannie Mae Collateral Underwriter",
    "bullets": [
      { "lead": "Capital One Databolt", "text": "Vaultless field-level tokenization, Go, TypeScript" },
      { "lead": "Discover Global Network", "text": "Prohibited-transaction & gambling fraud scoring ML" },
      { "lead": "NYC MTA OMNY & LA Metro TAP", "text": "Contactless EMV & Apple Pay fare payments" },
      { "lead": "WMATA, BART, MBTA, SF Muni & MTS", "text": "PCI-DSS & SOC 1/2 transit payment platforms" },
      { "lead": "Fannie Mae Collateral Underwriter", "text": "Residential mortgage appraisal APIs" }
    ]
  },
  {
    "group": "Platform Infrastructure & Cloud",
    "items": "LA Metro TAP & NYC MTA OMNY Kubernetes; Cubic transit SaaS Terraform/CI/CD; NextBus & Chicago Metra AWS; Radio Index Rust/Azure ML/Cloudflare Workers",
    "bullets": [
      { "lead": "LA Metro TAP & NYC MTA OMNY", "text": "Docker, Kubernetes, KEDA/HPA/VPA, AWS, Azure" },
      { "lead": "Cubic transit SaaS", "text": "Terraform, Helm, GitHub Actions, Jenkins, Vault, Prometheus, Grafana" },
      { "lead": "NextBus & Chicago Metra", "text": "AWS ECS, Lambda, CloudFormation, Twilio" },
      { "lead": "Radio Index", "text": "Rust origin, Azure ML, Dagu, Cloudflare Workers, OpenTelemetry" }
    ]
  },
  {
    "group": "Architecture & Systems",
    "items": "Radio Index Rust/A2UI; Capital One & Discover Search; Cubic transit SaaS SRE; Lockheed Martin Intranet; Fannie Mae & EPAM database migrations",
    "bullets": [
      { "lead": "Radio Index", "text": "Pure Rust HTTP origin, A2UI agent-driven UI, SQLite, hybrid search" },
      { "lead": "Capital One & Discover Search", "text": "Lucene, Solr, hybrid indexing, ETL, offline eval" },
      { "lead": "Cubic transit SaaS", "text": "Distributed microservices, SRE, PagerDuty (18-eng org)" },
      { "lead": "Lockheed Martin Intranet", "text": "Search, Node.js & Python microservices" },
      { "lead": "Fannie Mae & EPAM", "text": "Zero-downtime PostgreSQL & Liquibase, Kafka, Redis" }
    ]
  },
  {
    "group": "Languages & Data",
    "items": "Capital One Databolt (Go, TypeScript); PwC, Cubic & EPAM (Python, PyTorch, NumPy, SciPy, SQL, PostgreSQL, Redis, Kafka); Cubic (Java, Node.js); Radio Index (Rust, SQLite)",
    "bullets": [
      { "lead": "Capital One Databolt", "text": "Go, TypeScript" },
      { "lead": "PwC, Cubic & EPAM", "text": "Python, PyTorch, NumPy, SciPy, SQL, PostgreSQL, Redis, Kafka" },
      { "lead": "Cubic fare platforms", "text": "Java, Liquibase, JavaScript, Node.js" },
      { "lead": "Radio Index", "text": "Rust, SQLite" }
    ]
  },
  {
    "group": "Security & Compliance",
    "items": "Cubic transit fleet zero-trust mTLS; PwC & Cubic PCI-DSS, SOC 1/2, ISO 27001, SOX",
    "bullets": [
      { "lead": "Cubic transit fleet", "text": "Zero-trust mTLS, Istio, Smallstep CA, Vault, CrowdStrike, Nessus" },
      { "lead": "PwC & Cubic audits", "text": "PCI-DSS, SOC 1/2, ISO 27001, SOX" }
    ]
  }
];
