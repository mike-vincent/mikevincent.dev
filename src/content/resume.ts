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
      },
      {
        "lead": "Hawk & Atlas",
        "text": "Built encoder-decoder, gated linear recurrence RNN, long-context memory, Transformer, and Word2Vec/Node2Vec models in PyTorch, NumPy, and SciPy."
      }
    ]
  },
  {
    "title": "Software Engineering Manager, Infrastructure",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2021 to 2024",
    "location": "San Diego, CA",
    "blurb": "Managed transit-payment SaaS infrastructure across U.S. agencies including NYC MTA, LA Metro, WMATA, BART, SFMTA, and MBTA.",
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
    "items": "Discover Global Network fraud & gambling ML; Capital One Eno NLU/intent; CapitalOne.com & Discover.com hybrid search; Radio Index & Radio Whisper; Hawk & Atlas; Cubic Urban Insights & NextBus ML",
    "bullets": [
      { "lead": "Discover Global Network", "text": "Fraud & gambling ML, feature pipelines, real-time inference" },
      { "lead": "Capital One Eno", "text": "NLU, entity & intent models, Kubeflow" },
      { "lead": "CapitalOne.com & Discover.com", "text": "Hybrid vector & BM25 search, ANN/KNN, offline eval" },
      { "lead": "Radio Index & Radio Whisper", "text": "faster-whisper ASR, Hugging Face, PyTorch, vLLM, RAG, A2UI" },
      { "lead": "Hawk & Atlas", "text": "Encoder-decoder, gated RNN, Transformers, Word2Vec, Node2Vec, NumPy, SciPy" },
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
      { "lead": "Fannie Mae Collateral Underwriter", "text": "Mortgage appraisal REST APIs, Angular SPA" }
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
      { "lead": "Cubic transit SaaS", "text": "Distributed microservices, SRE, PagerDuty (18 engineers)" },
      { "lead": "Lockheed Martin Intranet", "text": "Headless Drupal, Node.js, Python microservices" },
      { "lead": "Fannie Mae & EPAM", "text": "Zero-downtime PostgreSQL & Liquibase, Kafka, Redis" }
    ]
  },
  {
    "group": "Languages & Data",
    "items": "Capital One Databolt (Go, TypeScript); PwC, Cubic & EPAM (Python, PyTorch, NumPy, SciPy, SQL, PostgreSQL, Redis, Kafka); Cubic (Java, Node.js); Radio Index (Rust, SQLite)",
    "bullets": [
      { "lead": "Capital One Databolt", "text": "Go, TypeScript" },
      { "lead": "PwC, Cubic & EPAM", "text": "Python, PyTorch, NumPy, SciPy, SQL, PostgreSQL, Redis, Kafka" },
      { "lead": "Cubic fare platforms", "text": "Java, Liquibase, SQL*Plus, JavaScript, Node.js" },
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
