export interface Project {
  id: string;
  title: string;
  department: string;
  category: 'Data Science' | 'Management' | 'Sales' | 'Production' | 'Operations';
  problem: string;
  whatBuilt: string;
  result: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  chartType: 'forecast' | 'scorecard' | 'pulse' | 'reconcile' | 'capacity' | 'o2d' | 'sales' | 'crm' | 'tasks' | 'wfh';
  highlights: string[];
  metrics: { label: string; value: string; trend?: string }[];
  deliverables: string[];
  liveFeatures: string[];
}

export interface OtherSystem {
  id: string;
  title: string;
  group: 'Stock & Purchase' | 'Sales & Finance' | 'Production' | 'Operations';
  description: string;
  tech: string[];
  impact: string;
}

export interface WorkStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; featured?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  department: string;
  organization: string;
  summary: string;
  achievements: string[];
  keyTools: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Nikita Sham Gurav",
    shortName: "Nikita Gurav",
    initials: "NG",
    role: "Data Science Analyst",
    department: "AI & Data Science",
    experienceYears: 2,
    systemsCount: 36,
    departmentsCount: 6,
    toolsCount: "15+",
    focus: "Data Science, Dashboards, Automation",
    industry: "Manufacturing",
    location: "India",
    email: "your.email@gmail.com",
    github: "https://github.com/Nikita3909",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    bio: "I'm Nikita Sham Gurav, a Data Science Analyst in the AI & Data Science team with 2 years of experience. At a manufacturing company I built 36 systems covering Sales, Production, Purchase, Order-to-Delivery, Stock and Admin. I work end to end: understanding the business problem, connecting the data, analysing and forecasting, building the dashboard or app, automating updates and deploying it live.",
    heroBadge: "Data Science Analyst · AI & Data Science",
    heroHeading: "Hi, I'm Nikita Gurav. I turn business data into live dashboards, AI insights & automation.",
    heroSubtext: "I build end-to-end data systems — from raw data to deployed web dashboards and forecasting models — that help management see live numbers and remove manual reporting.",
    rotatingRoles: [
      "Data Science",
      "Dashboards",
      "Automation",
      "AI Insights",
      "MIS Reports"
    ]
  },

  stats: [
    { value: 6, label: "Live demos", suffix: "", description: "Real systems you can click through" },
    { value: 2, label: "ML projects with code", suffix: "", description: "Forecasting & churn, open on GitHub" },
    { value: 36, label: "Internal tools shipped", suffix: "", description: "Dashboards, apps, automations & forms" },
    { value: 2, label: "Years experience", suffix: "", description: "Data analysis, BI & automation" }
  ],

  marqueeTech: [
    { name: "Python", category: "Data Science" },
    { name: "SQL", category: "Database" },
    { name: "Pandas", category: "Data Analysis" },
    { name: "Plotly", category: "Visualization" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Full-Stack" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "FastAPI", category: "Backend / AI" },
    { name: "Streamlit", category: "Data Apps" },
    { name: "Google Apps Script", category: "Automation" },
    { name: "Google Sheets API", category: "Integration" },
    { name: "SQLite", category: "Database" },
    { name: "MongoDB", category: "NoSQL" },
    { name: "Git", category: "DevOps" },
    { name: "Render", category: "Deployment" }
  ],

  featuredProjects: [
    {
      id: "procurement-ai-agent",
      title: "Procurement AI Agent",
      department: "AI & Data Science",
      category: "Data Science",
      problem: "Procurement data — stock, targets, transit, import POs, payments and landed cost — was spread across many sheets, and answering simple questions took manual digging.",
      whatBuilt: "A full-stack procurement platform with an AI agent. Dashboards cover monthly planning, import purchase management, payments, landed cost, vendor comparison, inward QC and final inspection. A LangGraph agent answers questions using tools, local RAG search and a procurement knowledge graph.",
      result: "The team can plan purchases, track imports and payments, and ask the agent questions in plain English instead of searching sheets.",
      tech: ["React", "TypeScript", "Node.js", "LangGraph", "RAG", "Recharts", "Google Sheets API", "Vitest"],
      image: "/images/procurement-agent.png",
      demoUrl: "/demos/procurement-agent/",
      chartType: "capacity",
      highlights: [
        "LangGraph agent (agent → tools → agent loop) with data-health checks and pending-order / vendor-rate tools",
        "Local RAG with ONNX embeddings (no paid embedding API) and semantic search",
        "Procurement knowledge graph built only from real rows — path, root-cause and impact queries",
        "Landed cost, supplier performance, SKU cost automation and PO creation with PDF output"
      ],
      metrics: [
        { label: "Modules", value: "8+", trend: "Planning to inspection" },
        { label: "AI stack", value: "LangGraph", trend: "Tools + RAG + graph" },
        { label: "Test suites", value: "8", trend: "Vitest" }
      ],
      deliverables: [
        "React + TypeScript dashboard",
        "Express API with Google Sheets integration",
        "AI agent with RAG and knowledge graph"
      ],
      liveFeatures: [
        "Month-wise plan vs stock vs transit",
        "Import PO, payment and landed cost views",
        "Chat agent and command palette"
      ]
    },
    {
      id: "ceo-command-center",
      title: "CEO Command Center",
      department: "Management",
      category: "Management",
      problem: "The CEO had no single view of how each department was doing. Numbers were spread across many Google Sheets.",
      whatBuilt: "A live web dashboard that reads 8 Google Sheets and gives each department a penalty score (0 = perfect, −100 = worst) with a reason line, an overall health score, an attention ranking and automatic alerts. Drill-down pages cover stock, receivables ageing, pending orders, sales pipeline and gross margin.",
      result: "Management checks business health every day from one screen.",
      tech: ["Node.js", "Express", "Google Sheets API", "JavaScript", "Render"],
      image: "/images/command-center.png",
      demoUrl: "/demos/command-center/",
      chartType: "scorecard",
      highlights: [
        "Penalty-based department scoring with a 'score basis' line explaining each score",
        "CEO Insights card: department attention ranking and automatic alerts",
        "Stock page with Low / No Cost / Dead / Negative stock filters and Indian number format (₹ L / Cr)",
        "Pending Orders page with searchable filters, oldest-first sorting and CSV download"
      ],
      metrics: [
        { label: "Departments scored", value: "7", trend: "Overall health score" },
        { label: "Sheets connected", value: "8", trend: "Google Sheets API" },
        { label: "Data refresh", value: "5 min", trend: "Server-side cache" }
      ],
      deliverables: [
        "Node.js + Express web app deployed on Render",
        "Google Sheets service-account data layer with caching",
        "Drill-down pages for 6+ business areas"
      ],
      liveFeatures: [
        "Department score cards with colour-coded gauges",
        "Receivables ageing buckets: 0–30, 31–60, 61–90, 90+ days",
        "Gross margin with fuzzy product-to-cost matching"
      ]
    },
    {
      id: "ml-demand-forecasting",
      title: "Demand Forecasting: 7 Models Compared",
      department: "Machine Learning",
      category: "Data Science",
      problem: "Production and purchase planning needs reliable demand forecasts weeks ahead, and it is not obvious which forecasting method works best.",
      whatBuilt: "An 8-week-ahead weekly demand forecast for 10 products, comparing naive baselines, Holt-Winters, ridge regression, random forest and gradient boosting on the same rolling-origin backtest (4 folds), with leakage-safe lag features and automated leakage tests.",
      result: "Random forest reached 12.0% WAPE — 17.5% lower error than the seasonal-naive baseline (~100 fewer cartons of error per week) — with Holt-Winters a close second at 12.7%.",
      tech: ["Python", "scikit-learn", "statsmodels", "Pandas", "Matplotlib"],
      image: "/images/ml-forecasting.png",
      codeUrl: "https://github.com/Nikita3909/ml-demand-forecasting",
      chartType: "forecast",
      highlights: [
        "Rolling-origin backtest: 4 folds × 8 weeks, 320 forecasts per model",
        "Direct multi-step strategy: all demand features lagged ≥ 8 weeks (no leakage)",
        "One global ML model across SKUs using level-scaled targets",
        "Tests prove that changing future demand never changes the features"
      ],
      metrics: [
        { label: "Best WAPE", value: "12.0%", trend: "Random forest" },
        { label: "vs baseline", value: "−17.5%", trend: "Seasonal naive 14.6%" },
        { label: "Bias", value: "−1.3%", trend: "Baselines −6% to −9%" }
      ],
      deliverables: [
        "Reproducible Python project (synthetic data, fixed seed)",
        "Metrics table and 4 result charts",
        "Leakage tests"
      ],
      liveFeatures: [
        "Model comparison with error bars",
        "Error by forecast horizon",
        "Feature importance"
      ]
    },
    {
      id: "full-stack-crm",
      title: "Full-Stack Sales CRM",
      department: "Sales",
      category: "Sales",
      problem: "Orders, dispatch, follow-ups, grievances and leads were handled in separate sheets and forms with no role-based access.",
      whatBuilt: "A full CRM with Google login and roles (admin, CRM, dispatch): dashboard, order entry with auto order IDs and stock checks, dispatch with photo upload, SCOT tracker, reorder risk prediction, pipeline, grievances, WhatsApp, reports and an AI assistant with lead generation.",
      result: "Sales, CRM and dispatch teams work from one system, each seeing only what their role needs.",
      tech: ["React", "Vite", "Node.js", "Express", "Google Sheets API", "Google OAuth", "OpenAI / OpenRouter", "node-cron"],
      image: "/images/full-crm.png",
      demoUrl: "/demos/crm/",
      chartType: "crm",
      highlights: [
        "Role-based access with Google OAuth login",
        "New order form that auto-generates order IDs and triggers the stock engine",
        "Reorder risk tracker predicting which customers are due to reorder (High / Medium / Low / New)",
        "Below-benchmark price and delayed-order views with PDF and Excel export"
      ],
      metrics: [
        { label: "Pages", value: "24", trend: "React app" },
        { label: "User roles", value: "3", trend: "Admin · CRM · Dispatch" },
        { label: "AI", value: "Assistant", trend: "Plus lead generator" }
      ],
      deliverables: [
        "React + Vite frontend",
        "Express backend with scheduled jobs",
        "Google Sheets data layer"
      ],
      liveFeatures: [
        "Order, dispatch and payment tracking",
        "SCOT and reorder trackers",
        "AI assistant and lead generator"
      ]
    },
    {
      id: "ml-customer-churn",
      title: "B2B Customer Churn Prediction + RFM",
      department: "Machine Learning",
      category: "Data Science",
      problem: "Sales teams can only call a limited number of customers, so they need to know which active customers are about to stop ordering.",
      whatBuilt: "A churn model that predicts which active customers will place no order in the next 90 days, trained on monthly snapshots with a time-based split, compared against a 'no order in 60 days' business rule and classic RFM segmentation.",
      result: "Calling the riskiest 20% of customers reaches 91% of churners (rule: 80%), covering 84% of revenue at risk. RFM's 'At Risk' segment had 0% churn — the model catches it by comparing each customer to their own ordering rhythm.",
      tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      image: "/images/ml-churn.png",
      codeUrl: "https://github.com/Nikita3909/ml-customer-churn",
      chartType: "crm",
      highlights: [
        "Snapshot-based features: recency, frequency, spend, gap trend, spend trend, complaints",
        "Time-based split so no test-period information leaks into training",
        "PR-AUC and precision/recall in the top 20% — metrics that match the business decision",
        "Honest finding: RFM labels alone can mislead"
      ],
      metrics: [
        { label: "PR-AUC", value: "0.91", trend: "Rule: 0.80" },
        { label: "Churners reached", value: "91%", trend: "Calling top 20%" },
        { label: "Revenue at risk covered", value: "84%", trend: "Top 20% list" }
      ],
      deliverables: [
        "Reproducible Python project (synthetic data)",
        "ROC, gains, RFM and importance charts",
        "Leakage tests"
      ],
      liveFeatures: [
        "Cumulative gains chart",
        "Churn rate by RFM segment",
        "Feature importance"
      ]
    },
    {
      id: "ai-marketing-automation",
      title: "AI Marketing Automation (n8n)",
      department: "AI Automation",
      category: "Data Science",
      problem: "Planning, writing, designing and posting social media content every day took a lot of manual time, and results were not tracked.",
      whatBuilt: "A 163-node n8n workflow that works like an AI marketing team: an AI strategist plans the week, an AI copywriter writes posts, images are generated and checked by an AI art director, videos are made with Google Veo, and approved posts are published to LinkedIn, Instagram, Facebook and WhatsApp — with a web dashboard for approvals.",
      result: "Content goes from plan to published with one approval click, and performance, AI cost and errors are reported automatically.",
      tech: ["n8n", "OpenAI", "Google Gemini / Veo", "Google Sheets & Drive", "Meta Graph API", "LinkedIn API", "WhatsApp Cloud API"],
      image: "/images/marketing-automation.png",
      demoUrl: "/demos/n8n-workflows/",
      chartType: "sales",
      highlights: [
        "Multi-agent setup: strategist, reviewer, copywriter and art-director checks",
        "Approval dashboard served from n8n webhooks (approve, edit, regenerate, skip, upload own image)",
        "Auto-publishing to LinkedIn, Instagram, Facebook and WhatsApp campaign templates",
        "Nightly performance tracking, AI budget alerts, error emails and a weekly report"
      ],
      metrics: [
        { label: "Workflow nodes", value: "163", trend: "n8n" },
        { label: "Channels", value: "4", trend: "LinkedIn · IG · FB · WhatsApp" },
        { label: "AI agents", value: "3", trend: "Plan · review · write" }
      ],
      deliverables: [
        "n8n workflow with 6 scheduled and webhook entry points",
        "Approval dashboard",
        "Google Sheets content calendar and usage log"
      ],
      liveFeatures: [
        "Interactive workflow diagram",
        "Node types and connections",
        "Step-by-step explanation"
      ]
    },
    {
      id: "whatsapp-lead-agent",
      title: "WhatsApp AI Lead Qualification Agent (n8n)",
      department: "AI Automation",
      category: "Sales",
      problem: "WhatsApp enquiries came in at all hours and new leads were not answered or qualified quickly.",
      whatBuilt: "A 42-node n8n AI agent on WhatsApp that understands text, voice notes (transcription) and images, separates existing customers from new leads, qualifies leads with chat memory, updates the CRM sheet and books calendar meetings — with a human takeover switch.",
      result: "Every enquiry gets an instant reply, leads are qualified and logged, and the sales team can take over any chat.",
      tech: ["n8n", "OpenAI", "OpenRouter", "WhatsApp Cloud API", "Google Sheets", "Google Calendar"],
      image: "/images/whatsapp-agent.png",
      demoUrl: "/demos/n8n-workflows/#whatsapp",
      chartType: "crm",
      highlights: [
        "Handles text, voice notes (speech-to-text) and images",
        "Customer vs lead routing to two different AI agents",
        "AI tools: update CRM row and create a calendar meeting",
        "Bot on/off control so a human can take over the chat"
      ],
      metrics: [
        { label: "Workflow nodes", value: "42", trend: "n8n" },
        { label: "Input types", value: "3", trend: "Text · voice · image" },
        { label: "AI agents", value: "2", trend: "Leads · customers" }
      ],
      deliverables: [
        "n8n WhatsApp agent workflow",
        "CRM and chat log sheets",
        "Feeds the CRM WhatsApp inbox"
      ],
      liveFeatures: [
        "Interactive workflow diagram",
        "Node types and connections",
        "Step-by-step explanation"
      ]
    },
    {
      id: "pack-design-studio",
      title: "Packaging Design Studio (3D)",
      department: "Design / Production",
      category: "Production",
      problem: "Every packaging box, wrapper and export carton needed manual design work and separate calculations for printing and loading.",
      whatBuilt: "A browser-based design tool: pick a product, size the box, change text and colours, see a live 3D mockup with fold animation, and download print-ready PDF, SVG, DXF die-lines and images. Includes a wrapping-paper designer and an export container planner with 3D loading view.",
      result: "Packaging designs, printer files and loading plans are produced in minutes without a designer.",
      tech: ["JavaScript", "Three.js", "jsPDF", "JSZip", "SVG / DXF", "HTML/CSS"],
      image: "/images/pack-studio.png",
      demoUrl: "/demos/pack-studio/",
      chartType: "capacity",
      highlights: [
        "Live 3D box mockup with fold and open-lid animation",
        "Print file at actual size (PDF), artwork + cut lines (SVG), die-maker files (DXF)",
        "Costing facts: flat sheet size, board grams per box, boxes per printing sheet",
        "Export planner: how many cartons fit in a container, shown in 3D"
      ],
      metrics: [
        { label: "Tools", value: "3", trend: "Box · wrapper · container" },
        { label: "Export formats", value: "6", trend: "PNG · PDF · SVG · DXF · ZIP · JSON" },
        { label: "Server", value: "None", trend: "Runs in the browser" }
      ],
      deliverables: [
        "Packaging designer with 3D preview",
        "Wrapping paper designer",
        "Export container planner"
      ],
      liveFeatures: [
        "Pick a product and size a box",
        "Rotate the 3D mockup",
        "Download print files"
      ]
    },
    {
      id: "sales-intelligence",
      title: "Sales Intelligence & Forecasting",
      department: "Data Science",
      category: "Data Science",
      problem: "Sales data was only used for basic monthly reports. There was no view of trends, expected sales or which customers mattered most.",
      whatBuilt: "A Python analytics project on a PostgreSQL sales database: trend analysis (EDA), a 3-month revenue forecast, RFM customer segmentation and an AI assistant that answers sales questions in plain English.",
      result: "The team can see sales trends, expected revenue for the next 3 months and which customers are VIP or at risk.",
      tech: ["Python", "Pandas", "PostgreSQL", "Statsmodels", "Plotly", "Streamlit", "Claude API"],
      image: "/images/sales-analytics.png",
      chartType: "forecast",
      highlights: [
        "Revenue forecast for the next 3 months using Holt-Winters exponential smoothing",
        "Model checked on historical data with MAE and MAPE",
        "RFM (Recency, Frequency, Monetary) segmentation into groups such as VIP and At Risk",
        "AI sales assistant that turns plain-English questions into SQL and answers from live data"
      ],
      metrics: [
        { label: "Forecast horizon", value: "3 months", trend: "Holt-Winters" },
        { label: "Model check", value: "MAE + MAPE", trend: "On historical data" },
        { label: "Segmentation", value: "RFM", trend: "Recency · Frequency · Monetary" }
      ],
      deliverables: [
        "Streamlit web dashboard",
        "Python scripts for EDA, forecasting and segmentation",
        "AI assistant connected to the sales database"
      ],
      liveFeatures: [
        "Monthly sales trend charts",
        "Customer segment distribution and top customers per segment",
        "Chat-style questions over sales data"
      ]
    },
    {
      id: "production-pulse",
      title: "Production Pulse",
      department: "Production",
      category: "Production",
      problem: "Daily production plans and actual output were recorded separately, so shortfalls were found late.",
      whatBuilt: "A React + TypeScript production dashboard on live Google Sheets data: daily plan entry, plan vs actual, department status, machine details, labour panel and shift handover.",
      result: "Supervisors and management can compare plan vs actual for each department on the same day.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Sheets API"],
      image: "/images/production-pulse.png",
      chartType: "pulse",
      highlights: [
        "Reads 5 production department sheets (selection, cutter, automatic, packing, cutlery)",
        "Daily plan entry form saved to a plan sheet, compared with actual output",
        "Machine details drawer and drill-down tables",
        "Labour panel and shift handover entry"
      ],
      metrics: [
        { label: "Departments", value: "5", trend: "Production lines" },
        { label: "Plan vs actual", value: "Daily", trend: "From plan sheet" },
        { label: "Data source", value: "Live", trend: "Google Sheets" }
      ],
      deliverables: [
        "React + TypeScript single-page app",
        "Plan entry and production entry forms",
        "Served inside the Command Center at /pulse"
      ],
      liveFeatures: [
        "Top KPI zone with plan vs actual",
        "Department status cards",
        "Filter bar and drill-down tables"
      ]
    },
    {
      id: "sales-reconciliation",
      title: "Sales Reconciliation (Tally vs Dispatch)",
      department: "Data Science",
      category: "Data Science",
      problem: "Invoices in Tally and the dispatch records did not always match, and checking them was manual.",
      whatBuilt: "A Python tool that reads Tally sales exports (.xlsx), pulls dispatch data live from Google Sheets, matches by invoice number and flags quantity and amount mismatches.",
      result: "Mismatched and missing invoices are listed automatically instead of being checked line by line.",
      tech: ["Python", "openpyxl", "SQLite", "Google Sheets API", "JavaScript"],
      image: "/images/sales-reconciliation.png",
      chartType: "reconcile",
      highlights: [
        "Tally Excel parser that tolerates small header name differences",
        "Invoice matching with ₹1 / 0.01 unit rounding tolerance",
        "Statuses: Matched, Qty Mismatch, Amount Mismatch, Missing in Dispatch, Missing in Tally",
        "Uploads accumulate month by month in a local database"
      ],
      metrics: [
        { label: "Match statuses", value: "6", trend: "Per invoice" },
        { label: "Tolerance", value: "₹1", trend: "Rounding" },
        { label: "Dispatch data", value: "Live", trend: "Google Sheets" }
      ],
      deliverables: [
        "Python backend with SQLite storage",
        "Web frontend with Tally file upload",
        "Product-level reconciliation view"
      ],
      liveFeatures: [
        "Upload Tally file button",
        "Refresh dispatch data button",
        "Mismatch list by invoice"
      ]
    },
    {
      id: "o2d-tracking-system",
      title: "O2D Tracking System",
      department: "Operations",
      category: "Operations",
      problem: "Orders moved through many steps across several sheets, and it was hard to see where each order was.",
      whatBuilt: "An order-to-delivery tracker with its own database. It reads new orders and invoices from Google Sheets (read-only) and tracks every stage with planned dates, plus Apps Script sync agents that keep 4 FMS sheets up to date.",
      result: "Each order's stage, from confirmation to payment follow-up, is visible in one place.",
      tech: ["Node.js", "Express", "SQLite", "Google Apps Script", "Google Sheets API"],
      image: "/images/o2d-tracking.png",
      chartType: "o2d",
      highlights: [
        "Stage rules with planned dates (working-day logic, Sundays skipped)",
        "Order-level and invoice-level steps, including dispatch and payment follow-up",
        "Never writes to Google Sheets — all stage tracking lives in its own database",
        "Separate timer-based sync agent so syncing works even when the web app sleeps"
      ],
      metrics: [
        { label: "FMS sheets synced", value: "4", trend: "Apps Script timer" },
        { label: "Database", value: "SQLite", trend: "Own data store" },
        { label: "Sheet access", value: "Read-only", trend: "Safe by design" }
      ],
      deliverables: [
        "Node.js server with SQLite schema",
        "Stage business-rules module",
        "Sheet Sync Agent and FMS → CRM sync scripts"
      ],
      liveFeatures: [
        "Order list with current stage",
        "Planned vs actual dates per stage",
        "Pending / overdue views"
      ]
    },
    {
      id: "factory-capacity-assessment",
      title: "Factory Capacity Assessment",
      department: "Data Science",
      category: "Data Science",
      problem: "Production planning did not have a clear measure of how much each machine and line can actually produce.",
      whatBuilt: "A 12-step capacity mapping system that uses production, machine and downtime data stored in Google Sheets, with a Python calculation engine and exports.",
      result: "Capacity is calculated from recorded data, giving planning a measured basis.",
      tech: ["Python", "FastAPI", "Google Apps Script", "Google Sheets API"],
      image: "/images/capacity-assessment.png",
      chartType: "capacity",
      highlights: [
        "12-step factory capacity mapping",
        "Production, machine and downtime data kept in Google Sheets (no separate database)",
        "Apps Script setup and data fetch from the main production sheet",
        "Export of capacity results"
      ],
      metrics: [
        { label: "Method", value: "12 steps", trend: "Capacity mapping" },
        { label: "Backend", value: "FastAPI", trend: "Python" },
        { label: "Storage", value: "Sheets", trend: "No local DB" }
      ],
      deliverables: [
        "FastAPI backend with calculator and exporter",
        "Sheet setup scripts",
        "Web front end"
      ],
      liveFeatures: [
        "Machine and downtime inputs",
        "Capacity calculation results",
        "Export"
      ]
    },
    {
      id: "sales-management-suite",
      title: "Sales Management Suite",
      department: "Sales",
      category: "Sales",
      problem: "Leads, client calls, sales rep performance and profit were tracked in separate sheets with no common flow.",
      whatBuilt: "A set of standalone web apps: Sales FMS lead pipeline, S.C.O.T. client call scheduler, Sales Rep MIS + MeCA weekly performance dashboard, and a Gross Profit dashboard.",
      result: "One structured flow from lead to profit for the sales team.",
      tech: ["Node.js", "Express", "JavaScript", "Render"],
      image: "/images/sales-suite.png",
      chartType: "sales",
      highlights: [
        "Sales FMS: lead pipeline with defined stages",
        "S.C.O.T.: client call scheduling",
        "Sales Rep MIS + MeCA: weekly meetings, clients and turnover per salesperson",
        "Gross Profit dashboard as its own app"
      ],
      metrics: [
        { label: "Apps", value: "4", trend: "Standalone" },
        { label: "Hosting", value: "Render", trend: "render.yaml" },
        { label: "Storage", value: "Own DB", trend: "No sheet dependency" }
      ],
      deliverables: [
        "4 Node.js + Express apps",
        "Render deployment configs",
        "Web dashboards for each app"
      ],
      liveFeatures: [
        "Lead pipeline view",
        "Call schedule",
        "Rep performance and gross profit views"
      ]
    },
    {
      id: "sales-crm-lead-trackers",
      title: "Sales CRM & Lead Trackers",
      department: "Sales",
      category: "Sales",
      problem: "Follow-ups with new enquiries and old customers were being missed.",
      whatBuilt: "CRM apps that move each lead through Follow-up 1, 2, 3 to Converted or Lost, an Enquiry Capture Tracker, an Old Customer Lead Tracker and an NBD tracker for incoming vs outgoing new business.",
      result: "Every lead has a clear stage and next follow-up.",
      tech: ["Google Apps Script", "Node.js", "Express", "HTML/CSS"],
      image: "/images/sales-crm.png",
      chartType: "crm",
      highlights: [
        "Lead → Follow-up 1 → 2 → 3 → Converted / Lost flow",
        "Enquiry Capture Tracker migrated from Apps Script to Node.js",
        "Old customer tracker with last sale date and contact details",
        "NBD tracker for incoming and outgoing new business"
      ],
      metrics: [
        { label: "Follow-up stages", value: "3", trend: "Then Converted / Lost" },
        { label: "Trackers", value: "4", trend: "CRM, enquiry, old customer, NBD" },
        { label: "Platforms", value: "2", trend: "Apps Script + Node.js" }
      ],
      deliverables: [
        "Apps Script web apps",
        "Node.js enquiry tracker",
        "Lead dashboards"
      ],
      liveFeatures: [
        "Follow-up stage tracking",
        "Lead lists by stage",
        "Conversion view"
      ]
    },
    {
      id: "admin-task-tracker-fms",
      title: "Admin Task Tracker & FMS",
      department: "Operations",
      category: "Operations",
      problem: "Daily tasks across departments had no clear tracking of deadlines and completion.",
      whatBuilt: "An Admin Task Tracker (entry form + dashboard), a daily task FMS tracker with per-employee reports, and a React FMS tracker showing overdue, today's and upcoming tasks.",
      result: "Managers can see what is pending and who is behind.",
      tech: ["Google Apps Script", "React", "Node.js", "MongoDB"],
      image: "/images/admin-tracker.png",
      chartType: "tasks",
      highlights: [
        "Task entry form and dashboard for admin tasks",
        "Daily task tracker with caching for fast loading",
        "Per-employee task reports",
        "Overdue / Today / Upcoming task views"
      ],
      metrics: [
        { label: "Task views", value: "3", trend: "Overdue · Today · Upcoming" },
        { label: "Trackers", value: "3", trend: "Admin, daily FMS, React FMS" },
        { label: "Reports", value: "Per employee", trend: "FMS tracker" }
      ],
      deliverables: [
        "Apps Script form and dashboard",
        "Node.js + MongoDB task tracker",
        "React FMS tracker with login page"
      ],
      liveFeatures: [
        "Task list by status",
        "Employee report view",
        "Filters by FMS and member"
      ]
    }
  ] as Project[],

  otherSystems: [
    {
      id: "ceo-stock-dashboard",
      title: "CEO Stock Dashboard",
      group: "Stock & Purchase",
      description: "Finished goods and raw material stock with cost, read from the stock sheets and the SKU cost sheet.",
      tech: ["Google Apps Script", "HTML/CSS"],
      impact: "Stock value at cost for management."
    },
    {
      id: "ims-stock-dashboard",
      title: "IMS Stock Dashboard",
      group: "Stock & Purchase",
      description: "Inventory dashboard combining FG and RM sheets with cost from the SKU cost sheet.",
      tech: ["Google Apps Script", "HTML/CSS"],
      impact: "One view of FG and RM stock."
    },
    {
      id: "ims-in-out",
      title: "IMS In/Out Dashboard",
      group: "Stock & Purchase",
      description: "Tracks FG and RM in/out entries and dispatch responses from form sheets.",
      tech: ["Google Apps Script"],
      impact: "Daily stock movement in one place."
    },
    {
      id: "stock-dispatch-mis",
      title: "Stock & Dispatch MIS",
      group: "Stock & Purchase",
      description: "Stock and dispatch MIS with monthly targets, name mapping and an unmatched-items log.",
      tech: ["Google Apps Script"],
      impact: "Dispatch vs target with data quality checks."
    },
    {
      id: "import-purchase",
      title: "Import Purchase Management",
      group: "Stock & Purchase",
      description: "Import purchase tracking across suppliers, purchase orders, PI numbers and a payment tracker.",
      tech: ["Google Apps Script", "HTML/CSS"],
      impact: "Import orders and payments tracked in one app."
    },
    {
      id: "procurement-dashboard",
      title: "Procurement Dashboard",
      group: "Stock & Purchase",
      description: "Saves a daily FG and RM stock snapshot to build stock history for procurement.",
      tech: ["Google Apps Script"],
      impact: "Day-by-day stock history."
    },
    {
      id: "sales-dashboard-scoring",
      title: "Sales Dashboard with Customer Scoring",
      group: "Sales & Finance",
      description: "Sales dashboard on raw sales data with a customer MIS score page.",
      tech: ["Google Apps Script", "JavaScript"],
      impact: "Customers ranked by MIS score."
    },
    {
      id: "sales-head-portal",
      title: "Sales Head Portal",
      group: "Sales & Finance",
      description: "Portal for the sales head covering General Trade and Institutional sales.",
      tech: ["Google Apps Script", "HTML/CSS"],
      impact: "Channel-wise sales view."
    },
    {
      id: "os-ageing",
      title: "OS Ageing Dashboard",
      group: "Sales & Finance",
      description: "Outstanding receivables by age bucket, read from the dispatch dashboard sheet.",
      tech: ["Google Apps Script"],
      impact: "Overdue invoices by 0–30 / 31–60 / 61–90 / 90+ days."
    },
    {
      id: "gross-margin",
      title: "Gross Margin Dashboard",
      group: "Sales & Finance",
      description: "Gross margin from dispatch data and SKU costs.",
      tech: ["Google Apps Script"],
      impact: "Margin by product."
    },
    {
      id: "invoice-matching",
      title: "Invoice Matching System",
      group: "Sales & Finance",
      description: "Matches invoices across sheets with fuzzy invoice-number matching and value mismatch analysis.",
      tech: ["Google Apps Script"],
      impact: "Mismatched invoices listed automatically."
    },
    {
      id: "enquiry-capture",
      title: "Enquiry Capture Tracker",
      group: "Sales & Finance",
      description: "Sales enquiry tracker migrated from Apps Script to a Node.js app on the same sheet.",
      tech: ["Node.js", "Express", "Google Sheets API"],
      impact: "Faster, standalone enquiry tracking."
    },
    {
      id: "old-customer-leads",
      title: "Old Customer Lead Tracker",
      group: "Sales & Finance",
      description: "Follow-up tracker for old customers with last sale date and contact details.",
      tech: ["Google Apps Script"],
      impact: "Structured re-contact of old customers."
    },
    {
      id: "nbd-tracker",
      title: "NBD Tracker",
      group: "Sales & Finance",
      description: "Tracks new business development as incoming and outgoing streams.",
      tech: ["Google Apps Script"],
      impact: "Incoming vs outgoing new business in one view."
    },
    {
      id: "production-machine-dashboard",
      title: "Production Machine Dashboard",
      group: "Production",
      description: "Machine-wise production dashboard with a machine summary, plus a system guide for users.",
      tech: ["Google Apps Script", "HTML/CSS"],
      impact: "Machine output in one dashboard."
    },
    {
      id: "labour-dashboard",
      title: "Labour & Attendance Dashboard",
      group: "Production",
      description: "Labour targets, production and attendance from the labour sheet.",
      tech: ["Google Apps Script"],
      impact: "Labour output vs target with attendance."
    },
    {
      id: "plan-form",
      title: "Daily Production Plan Form",
      group: "Production",
      description: "Google Form setup for daily production plans by date and shift.",
      tech: ["Google Apps Script", "Google Forms"],
      impact: "Plans recorded the same way every day."
    },
    {
      id: "wrapping-form",
      title: "Wrapping Machine Production Form",
      group: "Production",
      description: "Production entry form that posts raw material usage out of RM stock and finished goods into FG stock.",
      tech: ["Google Apps Script"],
      impact: "Stock updated directly from production entries."
    },
    {
      id: "crm-o2d-apps-script",
      title: "CRM — O2D Task Tracker",
      group: "Operations",
      description: "Apps Script order-to-delivery task tracker reading the FMS sheets, refreshed by a 5-minute trigger.",
      tech: ["Google Apps Script"],
      impact: "Order tasks visible to the CRM team."
    },
    {
      id: "new-crm-fms",
      title: "New CRM FMS",
      group: "Operations",
      description: "Node.js version of the CRM covering order steps and invoice steps across new and old FMS sheets.",
      tech: ["Node.js", "Express", "Google Sheets API"],
      impact: "Faster CRM outside Apps Script limits."
    },
    {
      id: "fms-crm-sync",
      title: "FMS → CRM Sync Scripts",
      group: "Operations",
      description: "Scripts that copy order and payment follow-up blocks between FMS sheets, matched by Order ID.",
      tech: ["Google Apps Script"],
      impact: "No double entry between sheets."
    },
    {
      id: "sheet-sync-agent",
      title: "Sheet Sync Agent",
      group: "Operations",
      description: "Standalone timer script that pulls new orders and invoices into 4 FMS sheets.",
      tech: ["Google Apps Script"],
      impact: "Sync keeps running even when web apps sleep."
    },
    {
      id: "react-fms-tracker",
      title: "React FMS Tracker",
      group: "Operations",
      description: "React app showing FMS tasks (sample request, purchase) by member with deadlines.",
      tech: ["React", "Vite", "Node.js"],
      impact: "Overdue, today and upcoming tasks per member."
    },
    {
      id: "daily-task-fms",
      title: "Daily Task FMS",
      group: "Operations",
      description: "Daily task tracker with caching and per-employee report pages.",
      tech: ["Google Apps Script", "Node.js", "MongoDB"],
      impact: "Employee task status in one place."
    }
  ] as OtherSystem[],

  workSteps: [
    {
      number: "01",
      title: "Understand the Problem",
      subtitle: "Business Needs & Requirements",
      description: "I talk with department heads and the people who use the data every day to understand the current manual process, what they need to see and what decisions they make.",
      tools: ["Discussions with users", "Process mapping", "KPI definition"]
    },
    {
      number: "02",
      title: "Connect the Data",
      subtitle: "Data Sources & Cleaning",
      description: "I connect the data sources — Google Sheets, Tally exports and databases — and clean and standardise the data so it can be used reliably.",
      tools: ["Python", "SQL", "Google Sheets API", "Apps Script"]
    },
    {
      number: "03",
      title: "Analyse & Model",
      subtitle: "Analysis & Forecasting",
      description: "I explore the data, build scores and segments, and forecast where it helps — for example RFM customer segments and revenue forecasting.",
      tools: ["Pandas", "Statsmodels", "Forecasting", "RFM Segmentation"]
    },
    {
      number: "04",
      title: "Build the Dashboard / App",
      subtitle: "Dashboards & Web Apps",
      description: "I build clean web dashboards and apps with drill-downs, filters, scores and entry forms that teams use every day.",
      tools: ["React", "TypeScript", "JavaScript", "Streamlit", "Plotly"]
    },
    {
      number: "05",
      title: "Automate & Deploy",
      subtitle: "Automation & Hosting",
      description: "I set up timer-based syncs and caching so data stays up to date without manual work, and deploy the apps online.",
      tools: ["Render", "Apps Script Triggers", "Git & GitHub"]
    }
  ] as WorkStep[],

  skillsData: [
    {
      title: "Data Science & Analytics",
      description: "Data analysis, forecasting, segmentation and visualization.",
      skills: [
        { name: "Python", level: 85, featured: true },
        { name: "Pandas", level: 85, featured: true },
        { name: "SQL & PostgreSQL", level: 80, featured: true },
        { name: "Time-Series Forecasting", level: 70, featured: true },
        { name: "RFM Customer Segmentation", level: 80, featured: true },
        { name: "Exploratory Data Analysis (EDA)", level: 85, featured: true },
        { name: "Plotly & Data Visualization", level: 85, featured: true },
        { name: "AI Assistants (LLM APIs)", level: 70, featured: true }
      ]
    },
    {
      title: "Development",
      description: "Web dashboards, user interfaces and backend services.",
      skills: [
        { name: "JavaScript", level: 85, featured: true },
        { name: "TypeScript", level: 70, featured: true },
        { name: "React", level: 75, featured: true },
        { name: "Node.js", level: 80, featured: true },
        { name: "Express", level: 80, featured: true },
        { name: "FastAPI", level: 65, featured: true },
        { name: "Streamlit", level: 75, featured: true },
        { name: "HTML & CSS", level: 85, featured: true }
      ]
    },
    {
      title: "Automation & Deployment",
      description: "Workflow automation, data integration, databases and hosting.",
      skills: [
        { name: "Google Apps Script", level: 90, featured: true },
        { name: "Google Sheets API", level: 90, featured: true },
        { name: "SQLite", level: 75, featured: true },
        { name: "MongoDB", level: 60, featured: true },
        { name: "Git & GitHub", level: 75, featured: true },
        { name: "Render Deployment", level: 80, featured: true },
        { name: "Scheduled Automation", level: 85, featured: true }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      period: "Sep 2025 – Present",
      role: "Data Science Analyst",
      department: "AI & Data Science",
      organization: "Manufacturing Company",
      summary: "Building data systems, dashboards and automation for the whole business — 36 systems across Sales, Production, Purchase, Order-to-Delivery, Stock and Admin.",
      achievements: [
        "Built and deployed 36 business systems across 6 departments using Google Sheets, Apps Script, Node.js, React and Python.",
        "Built the CEO Command Center: live department scoring, attention ranking and alerts with drill-downs for stock, receivables, orders, pipeline and margin.",
        "Built sales forecasting (Holt-Winters), RFM customer segmentation and an AI sales assistant on a PostgreSQL sales database.",
        "Built a Tally vs dispatch reconciliation tool that flags quantity and amount mismatches by invoice."
      ],
      keyTools: ["Python", "Pandas", "SQL", "React", "Node.js", "Google Apps Script", "Google Sheets API", "Render"]
    },
    {
      period: "[Month Year] – [Month Year]",
      role: "[Previous Role]",
      department: "[Department]",
      organization: "[Previous Company]",
      summary: "[One line about your previous work]",
      achievements: [
        "[Main thing you did or achieved]",
        "[Second thing you did or achieved]"
      ],
      keyTools: ["[Tool]", "[Tool]"]
    }
  ] as ExperienceItem[]
};
