import { Locale } from "@/i18n";

interface LocalizedProfile {
  name: string;
  title: string;
  eyebrow: string;
  statement: string;
  experience: string;
  location: string;
  email: string;
  summary: string;
}

interface LocalizedEducation {
  school: string;
  degree: string;
  major: string;
  period: string;
}

interface LocalizedExperience {
  company: string;
  role: string;
  period: string;
  desc: string;
}

interface LocalizedProject {
  name: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  highlights: string[];
  track: "efficiency" | "architecture" | "both";
}

interface LocalizedFocusArea {
  id: "efficiency" | "architecture";
  index: string;
  title: string;
  kicker: string;
  description: string;
  evidence: string[];
  resumeLabel: string;
  resumeHref: string;
}

const profileData: Record<Locale, LocalizedProfile> = {
  zh: {
    name: "洪灵",
    title: "AI 研发效能与金融系统技术负责人",
    eyebrow: "AI ENGINEERING · FINTECH SYSTEMS",
    statement: "让 AI 进入交付链，而不只停留在代码生成。",
    experience: "10 年后端与分布式系统",
    location: "中山 · 大湾区机会",
    email: "sendoh920713@gmail.com",
    summary:
      "现任 8 人研发团队技术负责人，负责跨境金融报文、统一收银与对账平台。自 2025.11 起，将 Codex、Agent Skills、TDD、独立审查与 CI 门禁固化到真实项目交付流程。",
  },
  en: {
    name: "Hong Ling",
    title: "AI Delivery & Financial Systems Tech Lead",
    eyebrow: "AI ENGINEERING · FINTECH SYSTEMS",
    statement: "Move AI into the delivery chain, beyond code generation.",
    experience: "10 years in backend systems",
    location: "Zhongshan · Greater Bay Area",
    email: "sendoh920713@gmail.com",
    summary:
      "Tech lead for an 8-engineer team building cross-border financial messaging, unified payments, and reconciliation platforms. Since Nov 2025, I have embedded Codex, Agent Skills, TDD, independent review, and CI gates into production delivery.",
  },
};

const focusData: Record<Locale, LocalizedFocusArea[]> = {
  zh: [
    {
      id: "efficiency",
      index: "01",
      title: "AI 研发效能与质量工程",
      kicker: "把质量责任前移到研发",
      description:
        "以规格、测试和验证反馈约束 AI 生成，让研发团队对需求、实现、审查和上线结果承担同一条责任链。",
      evidence: [
        "8 人团队在统一对账平台试点并固化流程",
        "AGENTS.md 与自定义 Skills 沉淀团队规则",
        "TDD、独立代码审查、静态检查与 CI 门禁",
        "浏览器验收连接实现结果与用户可见行为",
      ],
      resumeLabel: "下载研发效能版简历",
      resumeHref: "/resume-efficiency-zh.pdf",
    },
    {
      id: "architecture",
      index: "02",
      title: "金融支付与分布式架构",
      kicker: "在复杂边界里保持一致性",
      description:
        "围绕支付订单、渠道账单与金融报文划清系统边界，用状态机、幂等补偿、并发控制和对账机制处理失败路径。",
      evidence: [
        "统一收银覆盖微信、支付宝与 Stripe 等渠道",
        "订单一致性故障下降 70%，峰值 TPS 提升 2.4 倍",
        "跨境金融报文平台服务 16+ 银行客户",
        "10 亿节点、600 亿关系边的大规模系统经验",
      ],
      resumeLabel: "下载金融架构版简历",
      resumeHref: "/resume-architect-zh.pdf",
    },
  ],
  en: [
    {
      id: "efficiency",
      index: "01",
      title: "AI delivery and quality engineering",
      kicker: "Shift quality ownership into engineering",
      description:
        "Constrain AI generation with specifications, tests, and verification feedback so one engineering chain owns requirements, implementation, review, and release outcomes.",
      evidence: [
        "Workflow adopted and standardized by an 8-engineer team",
        "Project rules captured in AGENTS.md and custom Skills",
        "TDD, independent review, static checks, and CI gates",
        "Browser acceptance connects code to user-visible behavior",
      ],
      resumeLabel: "Download AI delivery resume · Chinese",
      resumeHref: "/resume-efficiency-zh.pdf",
    },
    {
      id: "architecture",
      index: "02",
      title: "Financial payments and distributed architecture",
      kicker: "Preserve consistency across complex boundaries",
      description:
        "Separate payment orders, channel statements, and financial messages, then handle failure paths with state machines, idempotency, compensation, concurrency control, and reconciliation.",
      evidence: [
        "Unified payments across WeChat Pay, Alipay, Stripe, and more",
        "70% fewer consistency failures and 2.4× higher peak TPS",
        "Cross-border messaging platform serving 16+ bank clients",
        "Large-scale systems with 1B nodes and 60B graph edges",
      ],
      resumeLabel: "Download fintech architecture resume · Chinese",
      resumeHref: "/resume-architect-zh.pdf",
    },
  ],
};

const educationData: Record<Locale, LocalizedEducation[]> = {
  zh: [
    { school: "北京航空航天大学", degree: "硕士", major: "计算机科学与技术", period: "2013.09–2016.04" },
    { school: "中南大学", degree: "学士", major: "软件工程", period: "2009.09–2013.06" },
  ],
  en: [
    { school: "Beihang University", degree: "M.S.", major: "Computer Science", period: "2013.09–2016.04" },
    { school: "Central South University", degree: "B.Eng.", major: "Software Engineering", period: "2009.09–2013.06" },
  ],
};

const experienceData: Record<Locale, LocalizedExperience[]> = {
  zh: [
    { company: "壁虎科技", role: "技术负责人", period: "2024.05–至今", desc: "跨境金融报文、统一收银、统一对账与 AI 交付流程" },
    { company: "支付宝", role: "高级研发工程师", period: "2020.07–2023.03", desc: "卡包、会员关系图与智能决策" },
    { company: "滴滴", role: "后端工程师", period: "2016.04–2020.07", desc: "安全域服务、应急流程与风险控制平台" },
  ],
  en: [
    { company: "Gecko Tech", role: "Tech Lead", period: "2024.05–Present", desc: "Financial messaging, unified payments, reconciliation, and AI delivery workflow" },
    { company: "Alipay", role: "Senior Software Engineer", period: "2020.07–2023.03", desc: "Card Wallet, membership graph, and intelligent decisioning" },
    { company: "DiDi", role: "Backend Engineer", period: "2016.04–2020.07", desc: "Security services, incident workflows, and risk-control platforms" },
  ],
};

const projectsData: Record<Locale, LocalizedProject[]> = {
  zh: [
    {
      name: "统一对账平台",
      role: "8 人团队技术负责人",
      period: "2025.11–至今",
      description: "从 S3 统一采集渠道账单，以采集、明细、计算、分析四层协议隔离渠道格式、匹配计算与差异分析。",
      tech: ["Codex", "Agent Skills", "TDD", "CI", "Java 17", "S3"],
      highlights: ["整个项目使用 AI 辅助交付流程", "规格、独立审查、自动检查与浏览器验收形成闭环", "在 8 人团队试点并固化公共规则资产"],
      track: "efficiency",
    },
    {
      name: "统一收银平台",
      role: "3 人团队技术负责人",
      period: "2024.05–至今",
      description: "统一微信、支付宝、Stripe 等渠道的支付入口，覆盖下单、回调、查单、补偿与渠道账单对账。",
      tech: ["Java 17", "Spring Boot", "RocketMQ", "MySQL", "GitLab CI"],
      highlights: ["新渠道接入控制在 1 天内", "订单一致性故障下降 70%", "客诉下降 80%，峰值 TPS 提升 2.4 倍"],
      track: "both",
    },
    {
      name: "跨境金融报文 SaaS",
      role: "8 人团队产研负责人",
      period: "2024.05–至今",
      description: "负责金融报文通信、转换、校验与可靠传输，不将报文系统包装为资金账务核心。",
      tech: ["Java 17", "Spring Boot", "IBM MQ", "Docker", "Kubernetes", "IPsec VPN"],
      highlights: ["服务 6 家大型银行与 10+ 家中小银行", "覆盖 100+ 企业客户", "Schema 驱动客户端接入时间控制在 1 小时内"],
      track: "architecture",
    },
    {
      name: "会员关系智能平台",
      role: "15 人团队核心研发",
      period: "2021.06–2023.03",
      description: "构建大规模关系图与智能决策链路，支持推荐、风险决策和自助分析。",
      tech: ["Java", "GraphX", "XGBoost", "ODPS", "RocketMQ"],
      highlights: ["10 亿节点、600 亿关系边", "代付转化率提升 25.6%", "转错账客诉下降 80%，分析效率提升 6 倍"],
      track: "architecture",
    },
    {
      name: "滴滴安全域平台",
      role: "后端工程师",
      period: "2016.10–2020.07",
      description: "负责高风险业务服务、应急流程与安全工作门户，从可靠服务到组织响应机制。",
      tech: ["Java", "Python", "Activiti", "MySQL"],
      highlights: ["Python 重写为 Java 后 P99 延迟下降 55%", "SLA 达 99.99%", "应急响应从 30 分钟缩短至 5 分钟"],
      track: "both",
    },
  ],
  en: [
    {
      name: "Unified reconciliation platform",
      role: "Tech lead for an 8-engineer team",
      period: "2025.11–Present",
      description: "Collects channel statements from S3 and separates ingestion, detail normalization, computation, and analysis through a four-layer protocol.",
      tech: ["Codex", "Agent Skills", "TDD", "CI", "Java 17", "S3"],
      highlights: ["AI-assisted workflow used across the full platform", "Specifications, independent review, automated checks, and browser acceptance", "Shared workflow standardized across an 8-engineer team"],
      track: "efficiency",
    },
    {
      name: "Unified payment gateway",
      role: "Tech lead for a 3-engineer team",
      period: "2024.05–Present",
      description: "Unifies WeChat Pay, Alipay, Stripe, and other channels across payment, callback, query, compensation, and statement reconciliation flows.",
      tech: ["Java 17", "Spring Boot", "RocketMQ", "MySQL", "GitLab CI"],
      highlights: ["New channel integration within one day", "70% fewer consistency failures", "80% fewer complaints and 2.4× higher peak TPS"],
      track: "both",
    },
    {
      name: "Cross-border financial messaging SaaS",
      role: "Product and engineering lead for an 8-person team",
      period: "2024.05–Present",
      description: "Owns financial message transport, conversion, validation, and reliable delivery without overstating the platform as a funds ledger.",
      tech: ["Java 17", "Spring Boot", "IBM MQ", "Docker", "Kubernetes", "IPsec VPN"],
      highlights: ["6 major banks and 10+ regional banks", "100+ corporate clients", "Schema-driven client integration within one hour"],
      track: "architecture",
    },
    {
      name: "Membership graph intelligence platform",
      role: "Core engineer in a 15-person team",
      period: "2021.06–2023.03",
      description: "Built large-scale relationship graph and decisioning workflows for recommendations, risk decisions, and self-service analysis.",
      tech: ["Java", "GraphX", "XGBoost", "ODPS", "RocketMQ"],
      highlights: ["1B nodes and 60B edges", "25.6% increase in payment conversion", "80% fewer mis-transfer complaints and 6× analysis efficiency"],
      track: "architecture",
    },
    {
      name: "DiDi security domain platform",
      role: "Backend engineer",
      period: "2016.10–2020.07",
      description: "Built high-risk services, incident workflows, and an internal security portal, connecting service reliability with organizational response.",
      tech: ["Java", "Python", "Activiti", "MySQL"],
      highlights: ["55% lower P99 latency after a Python-to-Java rewrite", "99.99% SLA", "Incident response reduced from 30 minutes to 5 minutes"],
      track: "both",
    },
  ],
};

export const skills = {
  aiEngineering: ["Codex", "Agent Skills", "Sub-agents", "Prompt / Context", "Browser Validation"],
  quality: ["TDD", "Code Review", "CI/CD", "Quality Gates", "Release Governance"],
  payments: ["Payment Gateway", "Reconciliation", "Idempotency", "Compensation", "State Machine"],
  architecture: ["Java 8–17", "Spring Boot", "DDD", "Distributed Systems", "Event-driven"],
  infrastructure: ["MySQL", "Redis", "Kafka / RocketMQ", "Docker", "Kubernetes"],
};

export const social = [
  { name: "GitHub", url: "https://github.com/hongling2511", icon: "github" },
  { name: "Email", url: "mailto:sendoh920713@gmail.com", icon: "mail" },
  { name: "WeChat", url: "h594396193", icon: "wechat" },
  { name: "Twitter", url: "https://twitter.com/hollytech110203", icon: "twitter" },
];

export const getProfile = (locale: Locale) => profileData[locale];
export const getFocusAreas = (locale: Locale) => focusData[locale];
export const getEducation = (locale: Locale) => educationData[locale];
export const getExperience = (locale: Locale) => experienceData[locale];
export const getProjects = (locale: Locale) => projectsData[locale];

export const profile = profileData.zh;
export const education = educationData.zh;
export const experience = experienceData.zh;
export const projects = projectsData.zh;
