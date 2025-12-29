import { Locale } from "@/i18n";

// 双语数据结构
interface LocalizedProfile {
  name: string;
  title: string;
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
}

// 中英文数据
const profileData: Record<Locale, LocalizedProfile> = {
  zh: {
    name: "洪灵",
    title: "资深服务端研发工程师 / 架构师",
    experience: "10+ 年后端",
    location: "广东·广州",
    email: "sendoh920713@gmail.com",
    summary:
      "10+ 年 Java 分布式系统研发&架构经验，近2年聚焦跨境支付与金融通信。擅长大型 SaaS 架构、云原生落地及团队技术治理，曾主导支付宝卡包会员卡业务，核心指标提升 30%+。",
  },
  en: {
    name: "Hong Ling",
    title: "Senior Backend Engineer / Architect",
    experience: "10+ Years Backend",
    location: "Guangzhou, China",
    email: "sendoh920713@gmail.com",
    summary:
      "10+ years of Java distributed systems development and architecture experience. Focused on cross-border payments and financial communications for the past 2 years. Skilled in large-scale SaaS architecture, cloud-native implementation, and technical team leadership. Led Alipay Card Wallet membership business, achieving 30%+ improvement in core metrics.",
  },
};

const educationData: Record<Locale, LocalizedEducation[]> = {
  zh: [
    {
      school: "北京航空航天大学",
      degree: "硕士",
      major: "计算机科学与技术",
      period: "2013.09 - 2016.04",
    },
    {
      school: "中南大学",
      degree: "学士",
      major: "软件工程",
      period: "2009.09 - 2013.06",
    },
  ],
  en: [
    {
      school: "Beihang University",
      degree: "Master",
      major: "Computer Science & Technology",
      period: "2013.09 - 2016.04",
    },
    {
      school: "Central South University",
      degree: "Bachelor",
      major: "Software Engineering",
      period: "2009.09 - 2013.06",
    },
  ],
};

const experienceData: Record<Locale, LocalizedExperience[]> = {
  zh: [
    {
      company: "壁虎科技",
      role: "技术负责人",
      period: "2024.05 - 至今",
      desc: "跨境支付 SaaS，Series A",
    },
    {
      company: "支付宝",
      role: "高级研发工程师",
      period: "2020.07 - 2023.03",
      desc: "卡包、会员关系与智能决策",
    },
    {
      company: "滴滴",
      role: "后端工程师",
      period: "2016.04 - 2020.07",
      desc: "安全域服务与风控平台",
    },
  ],
  en: [
    {
      company: "Gecko Tech",
      role: "Tech Lead",
      period: "2024.05 - Present",
      desc: "Cross-border Payment SaaS, Series A",
    },
    {
      company: "Alipay",
      role: "Senior Software Engineer",
      period: "2020.07 - 2023.03",
      desc: "Card Wallet, Member Relations & Intelligent Decision",
    },
    {
      company: "DiDi",
      role: "Backend Engineer",
      period: "2016.04 - 2020.07",
      desc: "Security Services & Risk Control Platform",
    },
  ],
};

const projectsData: Record<Locale, LocalizedProject[]> = {
  zh: [
    {
      name: "跨境报文通信 SaaS 平台",
      role: "产研负责人",
      period: "2024.05 - 至今",
      description: "完全兼容 SWIFT 协议，服务中国、俄罗斯、古巴等银行跨境交易",
      tech: ["Java 17", "Spring Boot 3.2", "MySQL 8", "Redis", "IBM MQ", "Docker", "K8s"],
      highlights: [
        "多租户核心引擎，服务 6 家大型银行和 10+ 家中小银行",
        "Schema 驱动客户端，接入成本 <1h",
        "IPsec VPN 安全通信，满足等保三级",
      ],
    },
    {
      name: "统一收银 Payment Gateway",
      role: "技术负责人",
      period: "2024.05 - 至今",
      description: "覆盖微信、支付宝、Stripe 等多渠道，统一公司所有产品支付接入",
      tech: ["Java 17", "Spring Boot", "RocketMQ", "MySQL", "Docker"],
      highlights: [
        "多渠道协议抽象，通道扩展 <1d",
        "订单状态机，一致性故障减少 70%",
        "延迟队列 + 规则引擎，客诉率下降 80%",
      ],
    },
    {
      name: "会员关系智能平台",
      role: "平台研发",
      period: "2021.06 - 2023.03",
      description: "构建 10 亿节点、600 亿边关系图，支持推荐与风险决策",
      tech: ["Java", "Sofa", "GraphX", "XGBoost", "ODPS", "RocketMQ"],
      highlights: [
        "代付推荐转化率 +25.6%",
        "转错账客诉 -80%",
        "自助洞察后台，分析效率提升 6x",
      ],
    },
    {
      name: "支付宝卡包",
      role: "业务研发 / 卡业务负责人",
      period: "2020.07 - 2021.06",
      description: "卡包承接 ToC 多端展现、到期提醒，为 ToB 提供多通路数据同步",
      tech: ["Java 8", "Sofa", "MySQL", "Redis", "MessageBroker"],
      highlights: [
        "月活用户 3 亿+",
        "领卡链路规范化，改造周期 5人日 → 1人日",
        "共享储值卡方案，用户规模提升 27%",
      ],
    },
  ],
  en: [
    {
      name: "Cross-border Messaging SaaS Platform",
      role: "Product & Tech Lead",
      period: "2024.05 - Present",
      description: "Fully SWIFT-compatible, serving cross-border transactions for banks in China, Russia, Cuba, etc.",
      tech: ["Java 17", "Spring Boot 3.2", "MySQL 8", "Redis", "IBM MQ", "Docker", "K8s"],
      highlights: [
        "Multi-tenant core engine serving 6 major banks and 10+ SMBs",
        "Schema-driven client with <1h integration time",
        "IPsec VPN secure communication, Level 3 compliance",
      ],
    },
    {
      name: "Unified Payment Gateway",
      role: "Tech Lead",
      period: "2024.05 - Present",
      description: "Multi-channel coverage (WeChat, Alipay, Stripe), unified payment integration for all products",
      tech: ["Java 17", "Spring Boot", "RocketMQ", "MySQL", "Docker"],
      highlights: [
        "Multi-channel protocol abstraction, <1d channel extension",
        "Order state machine, 70% reduction in consistency failures",
        "Delay queue + rule engine, 80% reduction in customer complaints",
      ],
    },
    {
      name: "Member Relationship Intelligence Platform",
      role: "Platform Engineer",
      period: "2021.06 - 2023.03",
      description: "Built 1B nodes, 60B edges relationship graph for recommendation and risk decisions",
      tech: ["Java", "Sofa", "GraphX", "XGBoost", "ODPS", "RocketMQ"],
      highlights: [
        "Payment recommendation conversion +25.6%",
        "Wrong transfer complaints -80%",
        "Self-service insight dashboard, 6x analysis efficiency",
      ],
    },
    {
      name: "Alipay Card Wallet",
      role: "Business Dev / Card Business Lead",
      period: "2020.07 - 2021.06",
      description: "Card wallet for ToC multi-platform display, expiration reminders, ToB multi-channel data sync",
      tech: ["Java 8", "Sofa", "MySQL", "Redis", "MessageBroker"],
      highlights: [
        "300M+ monthly active users",
        "Standardized card acquisition flow, 5 man-days → 1 man-day",
        "Shared stored-value card solution, 27% user growth",
      ],
    },
  ],
};

// 技能数据（通用，不需要翻译）
export const skills = {
  languages: ["Java 8~17", "Go", "Shell", "Python"],
  frameworks: ["Spring Boot", "Spring Cloud", "MyBatis", "Dubbo"],
  middleware: ["Kafka", "RocketMQ", "Redis", "IBM MQ"],
  databases: ["MySQL", "OceanBase", "HBase"],
  cloudNative: ["Docker", "Kubernetes", "ACK", "K3s"],
  practices: ["Distributed", "DDD", "TDD", "CI/CD"],
  dataAI: ["ODPS", "XGBoost", "Blink"],
  security: ["PCI DSS", "IPsec VPN", "ISO 27001"],
};

// 社交链接（通用）
export const social = [
  { name: "GitHub", url: "https://github.com/hongling2511", icon: "github" },
  { name: "Email", url: "mailto:sendoh920713@gmail.com", icon: "mail" },
  { name: "WeChat", url: "h594396193", icon: "wechat" },
  { name: "Twitter", url: "https://twitter.com/hollytech110203", icon: "twitter" },
];

// 获取本地化数据的函数
export const getProfile = (locale: Locale) => profileData[locale];
export const getEducation = (locale: Locale) => educationData[locale];
export const getExperience = (locale: Locale) => experienceData[locale];
export const getProjects = (locale: Locale) => projectsData[locale];

// 兼容旧代码的默认导出（中文）
export const profile = profileData.zh;
export const education = educationData.zh;
export const experience = experienceData.zh;
export const projects = projectsData.zh;
