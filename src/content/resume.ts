// Resume data. Extracted from the committed page markup.
export const roles = [
  {
    "title": "Lead Software Engineer",
    "org": "PwC",
    "url": "https://www.pwc.com",
    "period": "2024 to present",
    "location": "Los Angeles, CA",
    "blurb": "Lead engineer building payments, tokenization, fraud ML, and hybrid search systems for Capital One and Discover.",
    "bullets": [
      {
        "lead": "Discover Global Network Fraud ML",
        "text": "Built fraud and risk models for prohibited-transaction and gambling detection, including feature pipelines and real-time inference serving."
      },
      {
        "lead": "Capital One Databolt",
        "text": "Engineered vaultless, field-level tokenization in Go and TypeScript so AI models, analytics, and payment flows run on tokens without touching raw card numbers."
      },
      {
        "lead": "Capital One Eno",
        "text": "Migrated NLU, entity, and intent models powering the customer chatbot from Kubeflow onto Capital One's enterprise AI platform."
      },
      {
        "lead": "CapitalOne.com Search",
        "text": "Built hybrid search, indexing, and low-latency typeahead autocomplete surfacing results as customers type."
      },
      {
        "lead": "Discover.com Search",
        "text": "Built hybrid vector-embedding and BM25 search, validated against offline evaluation sets for answer quality."
      }
    ]
  },
  {
    "title": "Software Engineering Manager, Infrastructure",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2021 to 2024",
    "location": "San Diego, CA",
    "blurb": "Managed transit-payment SaaS infrastructure across major U.S. agencies including NYC MTA, LA Metro, WMATA, BART, SFMTA, and MBTA.",
    "bullets": [
      {
        "lead": "WMATA, San Diego MTS & PATCO",
        "text": "Led an 18-engineer team across the U.S., India, and Germany supporting transit SaaS for millions of riders, with PagerDuty on-call and Prometheus/Grafana monitoring."
      },
      {
        "lead": "NYC MTA OMNY",
        "text": "Shipped contactless Apple Pay fare payments, delivering production Docker and Kubernetes payment services."
      },
      {
        "lead": "SFMTA & LA Metro",
        "text": "Built and operated the fare-payment backend as Docker and Kubernetes microservices with VPA, HPA, and KEDA autoscaling across AWS and Azure."
      },
      {
        "lead": "BART & Boston MBTA",
        "text": "Secured the fleet with Istio mTLS, a Smallstep private CA, CrowdStrike, Nessus, and Trend Micro."
      },
      {
        "lead": "NextBus Umo IQ",
        "text": "Built Terraform, AWS, and GitHub Actions CI/CD under PCI and SOC 1/2 compliance, shipping Python, Java, and JavaScript services across AWS, Azure, and vSphere."
      }
    ]
  },
  {
    "title": "Lead Senior Software Engineer",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2017 to 2021",
    "location": "San Diego, CA & Washington, DC",
    "blurb": "First DevOps engineer and lead IC building demand-prediction ML, rider chatbots, and the cloud platform behind Cubic's transit fare services.",
    "bullets": [
      {
        "lead": "NextBus",
        "text": "Built real-time bus-arrival prediction on AWS ECS and Lambda with TensorFlow, PySpark, CloudFormation, and Node.js."
      },
      {
        "lead": "Urban Insights",
        "text": "Built transit-demand ML and search pipelines in Jupyter and AWS SageMaker, monitored with Prometheus and Grafana."
      },
      {
        "lead": "Chicago Metra",
        "text": "Built a rider chatbot with Twilio, Azure Cognitive Services, and AWS Lambda so riders check transit-card balances by phone, text, or email."
      },
      {
        "lead": "Cubic Transit Fare Payments Platform",
        "text": "Migrated legacy fare collection systems to Terraform, Kubernetes, Docker, and Azure CI/CD for 20 Java apps under PCI, SOC 2, ISO 27001, and SOX compliance."
      }
    ]
  },
  {
    "title": "Senior Software Engineer",
    "org": "EPAM Systems",
    "url": "https://www.epam.com",
    "period": "2015 to 2017",
    "location": "Washington, DC",
    "blurb": "Backend engineer shipping enterprise search, mortgage-appraisal APIs, and AWS cloud infrastructure for federal, defense, and commercial clients.",
    "bullets": [
      {
        "lead": "Fannie Mae Collateral Underwriter",
        "text": "Built Python REST APIs and an Angular SPA on Tomcat used by mortgage appraisers to value residential properties."
      },
      {
        "lead": "Lockheed Martin Intranet Search",
        "text": "Built enterprise search on headless Drupal backed by Node.js and Python microservices on Docker and Kubernetes."
      },
      {
        "lead": "HUD, Freddie Mac & Federal Courts (CM/ECF, PACER)",
        "text": "Built Jenkins, TeamCity, and Sonatype Nexus CI/CD on AWS with Chef, and ran Liquibase PostgreSQL migrations for a zero-downtime multi-tenant cutover."
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
    "detail": "B.S. & B.A., Linguistics & Journalism, 2011"
  }
];

export const skills = [
  {
    "group": "AI & ML Systems",
    "items": "PyTorch, Transformers, Encoder-Decoder, Gated RNN (Hawk), Long-Context Memory (Atlas), faster-whisper ASR (Radio Whisper), Hugging Face, vLLM, RAG, A2UI, Hybrid Vector/BM25 Search, Word2Vec, Node2Vec, NumPy, SciPy, Fraud & Risk ML, Kubeflow, AWS SageMaker, TensorFlow, PySpark"
  },
  {
    "group": "Payments, Banking & Security",
    "items": "Vaultless Field-Level Tokenization (Capital One Databolt), Fraud & Gambling Detection ML (Discover Global Network), Contactless EMV & Apple Pay (NYC MTA OMNY, LA Metro TAP), Mortgage Underwriting (Fannie Mae), PCI-DSS, SOC 1/2, ISO 27001, SOX, Zero-Trust mTLS (Istio, Smallstep CA, HashiCorp Vault)"
  },
  {
    "group": "Cloud & Platform Infrastructure",
    "items": "Kubernetes (KEDA, HPA, VPA), Docker, AWS (ECS, Lambda, RDS, ElastiCache, CloudFormation), Azure (AKS, Azure ML, Cognitive Services), Terraform, Helm, GitHub Actions, Jenkins, Dagu, Cloudflare Workers, Prometheus, Grafana, OpenTelemetry, PagerDuty"
  },
  {
    "group": "Languages & Data",
    "items": "Rust, Go, Python, TypeScript, Java, SQL, PostgreSQL, SQLite, Redis, Kafka, Lucene, Solr, Liquibase"
  }
];
