// Resume data. Extracted from the committed page markup.
export const roles = [
  {
    "title": "Lead Software Engineer",
    "org": "PwC",
    "url": "https://www.pwc.com",
    "period": "2024 to present",
    "location": "Los Angeles, CA",
    "blurb": "Architecting tokenization, fraud ML, and hybrid search platforms for Capital One and Discover.",
    "bullets": [
      {
        "lead": "Discover Global Network Fraud ML",
        "text": "Engineered fraud and risk models for prohibited-transaction and gambling detection, owning feature pipelines and real-time inference."
      },
      {
        "lead": "Capital One Databolt",
        "text": "Architected vaultless, field-level tokenization in Go and TypeScript, keeping raw PANs out of AI models, analytics, and payment flows."
      },
      {
        "lead": "Capital One Eno",
        "text": "Re-platformed production NLU, entity, and intent models for Eno from Kubeflow onto Capital One's enterprise AI platform."
      },
      {
        "lead": "CapitalOne.com Search",
        "text": "Architected hybrid search, indexing pipelines, and low-latency typeahead autocomplete."
      },
      {
        "lead": "Discover.com Search",
        "text": "Shipped hybrid vector and BM25 retrieval backed by offline evaluation harnesses for answer quality."
      },
      {
        "lead": "Discover Global Payments Network Fraud Models",
        "text": "Authored encoder-decoder, gated linear recurrence, long-context memory, Transformer, and Word2Vec/Node2Vec models in PyTorch, NumPy, and SciPy."
      }
    ]
  },
  {
    "title": "Software Engineering Manager, Infrastructure",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2021 to 2024",
    "location": "San Diego, CA",
    "blurb": "Owned transit-payment SaaS infrastructure across NYC MTA, LA Metro, WMATA, BART, SFMTA, and MBTA.",
    "bullets": [
      {
        "lead": "WMATA, San Diego MTS & PATCO",
        "text": "Led an 18-engineer org across the U.S., India, and Germany owning transit SaaS reliability for millions of riders with PagerDuty and Prometheus/Grafana."
      },
      {
        "lead": "NYC MTA OMNY",
        "text": "Shipped contactless EMV and Apple Pay fare services on production Docker and Kubernetes."
      },
      {
        "lead": "SFMTA & LA Metro",
        "text": "Operated multi-cloud fare-payment microservices on Kubernetes across AWS and Azure with VPA, HPA, and KEDA autoscaling."
      },
      {
        "lead": "BART & Boston MBTA",
        "text": "Hardened zero-trust service mesh with Istio mTLS, Smallstep private CA, CrowdStrike, and Nessus."
      },
      {
        "lead": "NextBus Umo IQ",
        "text": "Automated PCI and SOC 1/2 Terraform and GitHub Actions CI/CD delivering Python, Java, and Node.js services across AWS, Azure, and vSphere."
      }
    ]
  },
  {
    "title": "Lead Senior Software Engineer",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2017 to 2021",
    "location": "San Diego, CA & Washington, DC",
    "blurb": "Founding DevOps engineer and lead IC architecting demand-prediction ML, rider chatbots, and Cubic's cloud fare platform.",
    "bullets": [
      {
        "lead": "NextBus",
        "text": "Engineered real-time bus-arrival ML inference on AWS ECS and Lambda with TensorFlow, PySpark, and Node.js."
      },
      {
        "lead": "Urban Insights",
        "text": "Shipped transit-demand ML and search pipelines on AWS SageMaker with Prometheus and Grafana observability."
      },
      {
        "lead": "Chicago Metra",
        "text": "Shipped an omnichannel rider chatbot on AWS Lambda, Twilio, and Azure Cognitive Services for transit-card balance queries."
      },
      {
        "lead": "Cubic Transit Fare Payments Platform",
        "text": "Re-architected 20 legacy Java fare-collection services onto Kubernetes, Terraform, and Azure CI/CD under PCI, SOC 2, ISO 27001, and SOX."
      }
    ]
  },
  {
    "title": "Senior Software Engineer",
    "org": "EPAM Systems",
    "url": "https://www.epam.com",
    "period": "2015 to 2017",
    "location": "Washington, DC",
    "blurb": "Senior backend engineer delivering enterprise search, mortgage-appraisal APIs, mobile apps, and AWS infrastructure.",
    "bullets": [
      {
        "lead": "Fannie Mae Collateral Underwriter",
        "text": "Engineered Python REST APIs and an Angular SPA powering residential mortgage appraisal workflows."
      },
      {
        "lead": "Lockheed Martin Intranet Search",
        "text": "Shipped enterprise search backed by Node.js and Python microservices on Docker and Kubernetes."
      },
      {
        "lead": "Poison Control (poison.org) & Canadian Tire",
        "text": "Shipped Poison Control apps and Canadian Tire e-commerce on AWS with CI/CD and zero-downtime Liquibase PostgreSQL cutovers."
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
