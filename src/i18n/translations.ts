export type Locale = "zh" | "en";

// 定义翻译结构类型
export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    status: string;
    statusLabel: string;
    experienceLabel: string;
    downloadResume: string;
    scrollDown: string;
  };
  about: {
    title: string;
    aboutMe: string;
    education: string;
    degree: {
      master: string;
      bachelor: string;
    };
    highlights: {
      experience: string;
      users: string;
      improvement: string;
    };
  };
  skills: {
    title: string;
    categories: {
      languages: string;
      frameworks: string;
      middleware: string;
      databases: string;
      cloudNative: string;
      practices: string;
      dataAI: string;
      security: string;
    };
  };
  projects: {
    title: string;
    techStack: string;
    highlights: string;
  };
  experience: {
    title: string;
    present: string;
  };
  contact: {
    title: string;
    greeting: string;
    emailLabel: string;
    locationLabel: string;
    socialLabel: string;
    sendEmail: string;
    wechat: {
      title: string;
      searchHint: string;
      copyHint: string;
      copied: string;
    };
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: {
      about: "关于",
      skills: "技能",
      projects: "项目",
      experience: "经历",
      contact: "联系",
    },
    hero: {
      status: "available for opportunities",
      statusLabel: "status",
      experienceLabel: "experience",
      downloadResume: "下载简历",
      scrollDown: "scroll down",
    },
    about: {
      title: "cat about.md",
      aboutMe: "# 关于我",
      education: "教育背景",
      degree: {
        master: "硕士",
        bachelor: "学士",
      },
      highlights: {
        experience: "年后端经验",
        users: "月活用户服务",
        improvement: "核心指标提升",
      },
    },
    skills: {
      title: "ls -la skills/",
      categories: {
        languages: "语言 / 脚本",
        frameworks: "框架",
        middleware: "中间件",
        databases: "数据库",
        cloudNative: "云原生",
        practices: "架构实践",
        dataAI: "数据智能",
        security: "安全合规",
      },
    },
    projects: {
      title: "./projects.sh",
      techStack: "技术栈",
      highlights: "亮点",
    },
    experience: {
      title: "./experience.sh",
      present: "至今",
    },
    contact: {
      title: "./contact.sh",
      greeting: "# Let's connect!",
      emailLabel: "email",
      locationLabel: "location",
      socialLabel: "social --list",
      sendEmail: "发送邮件",
      wechat: {
        title: "扫码添加微信",
        searchHint: "或搜索微信号",
        copyHint: "点击复制",
        copied: "微信号已复制！",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      status: "available for opportunities",
      statusLabel: "status",
      experienceLabel: "experience",
      downloadResume: "Download Resume",
      scrollDown: "scroll down",
    },
    about: {
      title: "cat about.md",
      aboutMe: "# About Me",
      education: "Education",
      degree: {
        master: "Master",
        bachelor: "Bachelor",
      },
      highlights: {
        experience: "Years Backend Exp",
        users: "Monthly Active Users",
        improvement: "Core Metrics Boost",
      },
    },
    skills: {
      title: "ls -la skills/",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        middleware: "Middleware",
        databases: "Databases",
        cloudNative: "Cloud Native",
        practices: "Best Practices",
        dataAI: "Data & AI",
        security: "Security",
      },
    },
    projects: {
      title: "./projects.sh",
      techStack: "Tech Stack",
      highlights: "Highlights",
    },
    experience: {
      title: "./experience.sh",
      present: "Present",
    },
    contact: {
      title: "./contact.sh",
      greeting: "# Let's connect!",
      emailLabel: "email",
      locationLabel: "location",
      socialLabel: "social --list",
      sendEmail: "Send Email",
      wechat: {
        title: "Scan to add WeChat",
        searchHint: "Or search WeChat ID",
        copyHint: "Click to copy",
        copied: "WeChat ID copied!",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
