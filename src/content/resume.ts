// Resume data. Extracted from the committed page markup.
export const roles = [
  {
    "title": "Lead Software Engineer",
    "org": "PwC",
    "url": "https://www.pwc.com",
    "period": "2024 to present",
    "location": "Los Angeles, CA",
    "blurb": "Founding engineer on payments, tokenization, fraud models, AI, and search infrastructure for Capital One and Discover.",
    "bullets": [
      {
        "lead": "Discover Global Network fraud machine learning models",
        "text": "machine learning fraud and risk models: prohibited-transaction detection, feature pipelines, real-time inference, and serving."
      },
      {
        "lead": "Capital One Databolt",
        "text": "vaultless, field-level tokenization in Go and TypeScript. AI models, analytics, and payments run on tokens and never see the real card number."
      },
      {
        "lead": "Capital One Eno",
        "text": "NLU, entity, and intent models behind the account chatbot, moved from Kubeflow onto Capital One's enterprise AI platform."
      },
      {
        "lead": "CapitalOne.com Search",
        "text": "hybrid search with autocomplete and indexing, surfacing results as a customer types."
      },
      {
        "lead": "Discover.com Search",
        "text": "hybrid search over vector embeddings and BM25, scored on offline evaluation sets that measure answer quality."
      }
    ]
  },
  {
    "title": "Software Engineering Manager, Infrastructure",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2021 to 2024",
    "location": "San Diego, CA",
    "blurb": "Software engineering manager for transit-payment SaaS across five agencies. WMATA, NYC MTA, BART, LA Metro, and MBTA.",
    "bullets": [
      {
        "lead": "NYC MTA OMNY",
        "text": "contactless iPhone fare payments with Apple. Kubernetes manifests and Docker containers for the payments app."
      },
      {
        "lead": "SFMTA LA Metro",
        "text": "fare-payment backend as Docker and Kubernetes microservices with vertical, horizontal, and KEDA autoscaling on AWS and Azure."
      },
      {
        "lead": "BART & Boston MBTA",
        "text": "Platform security with mTLS on Istio and a Smallstep private certificate authority. CrowdStrike, Nessus, and Trend Micro across the fleet."
      },
      {
        "lead": "NextBus Umo IQ",
        "text": "Terraform, AWS, and GitHub Actions CI/CD, under PCI and SOC 1/2 compliance. Production code in Python, Java, and JavaScript across AWS, Azure, and vSphere."
      },
      {
        "lead": "WMATA, San Diego MTS & PATCO",
        "text": "Ran a team of 18 across the US, India, and Germany supporting transit SaaS for millions of riders. On-call on PagerDuty, monitoring on Prometheus and Grafana."
      }
    ]
  },
  {
    "title": "Lead Senior Software Engineer",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2019 to 2021",
    "location": "San Diego, CA",
    "blurb": "Lead engineer building rider-facing chatbots, prediction, and the cloud platform behind transit fare services.",
    "bullets": [
      {
        "lead": "Chicago Metra",
        "text": "rider chatbot built with Twilio and Azure Cognitive Services on AWS Lambda. Riders check transit-card balances by phone, text, or email."
      },
      {
        "lead": "Urban Insights",
        "text": "transit-demand machine learning and search in Jupyter and SageMaker, monitored with Prometheus and Grafana."
      },
      {
        "lead": "Cubic Transit Fare Platform",
        "text": "Automated CI/CD for 20 Java apps with Jenkins, Ansible, Docker, Helm, Vault, Terraform, and Kubernetes on Azure. Database migrations via Liquibase and SQL*Plus."
      }
    ]
  },
  {
    "title": "Senior Software Engineer",
    "org": "Cubic Transportation Systems",
    "url": "https://www.cubic.com",
    "period": "2017 to 2019",
    "location": "Washington, DC",
    "blurb": "First DevOps engineer on Cubic's fare platforms, moving embedded and legacy systems to containers and cloud.",
    "bullets": [
      {
        "lead": "NextBus",
        "text": "real-time bus-arrival prediction on AWS ECS and Lambda with TensorFlow, PySpark, CloudFormation, and Node.js."
      },
      {
        "lead": "Cubic Fare Collection Systems",
        "text": "First DevOps engineer; led the transformation for a publicly traded company with Terraform, Kubernetes, and Docker. Embedded fare CI/CD with Jenkins, Conan, and Wind River Linux."
      },
      {
        "lead": "Cubic Cloud Platform",
        "text": "PCI, SOC 2, ISO, and SOX audits. AWS and Azure hardened with Trend DSA, Nessus, and Cisco ASAv, monitored with Prometheus and Grafana."
      }
    ]
  },
  {
    "title": "Senior Software Engineer",
    "org": "EPAM Systems",
    "url": "https://www.epam.com",
    "period": "2016 to 2017",
    "location": "Washington, DC",
    "blurb": "Senior backend engineer at a digital agency, shipping search, payments, and mobile apps for enterprise clients.",
    "bullets": [
      {
        "lead": "Fannie Mae Collateral Underwriter",
        "text": "Angular single-page app on Tomcat with JSON and REST APIs in Python. Appraisers value a home on a mortgage."
      },
      {
        "lead": "Lockheed Martin Intranet Search",
        "text": "enterprise search on headless Drupal. Microservices on Docker and Kubernetes with Node.js and Python."
      },
      {
        "lead": "HUD, Freddie Mac & Federal Courts (CM/ECF, PACER)",
        "text": "Jenkins, TeamCity, and Sonatype Nexus CI/CD on AWS with Chef. PostgreSQL migrations with Liquibase and a zero-downtime multi-tenant switch."
      }
    ]
  },
  {
    "title": "Software Engineer",
    "org": "EPAM Systems",
    "url": "https://www.epam.com",
    "period": "2015 to 2016",
    "location": "Washington, DC",
    "blurb": "Backend engineer on a full-stack team building mobile apps and e-commerce for national brands.",
    "bullets": [
      {
        "lead": "Poison Control",
        "text": "National Capital Poison Center iPhone and Android apps built with Cordova CLI, shipped via App Store, TestFlight, and Google Play."
      },
      {
        "lead": "Canadian Tire",
        "text": "Hybris store and the U.S. Conference of Catholic Bishops app on AWS, with RDS and ElastiCache behind Kubernetes and Docker."
      },
      {
        "lead": "EPAM Enterprise Cloud",
        "text": "Docker and Ansible on VMware ESXi with Ubuntu and CentOS behind Cisco ASA firewalls. Provisioned with Vagrant and Chef."
      },
      {
        "lead": "NY Fashion Week & Mobile QA",
        "text": "Node, Karma, Jasmine, PhantomJS, WebDriver, and Protractor. JMeter and BlazeMeter performance tests. SVN-to-Git migration."
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
      { "lead": "Radio Index & Radio Whisper", "text": "faster-whisper ASR, Hugging Face, PyTorch, vLLM, RAG" },
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
    "items": "Capital One & Discover Search; Cubic transit SaaS SRE; Lockheed Martin Intranet; Fannie Mae & EPAM database migrations",
    "bullets": [
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
