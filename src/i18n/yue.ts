import type { PortfolioContent } from "./types";

export const yue: PortfolioContent = {
  lang: "yue-Hant",
  path: "/yue/",
  label: "粵語",
  title: "曾家明 | 作品集",
  description:
    "曾家明係住喺華盛頓特區嘅資深 .NET 軟件開發人員，熟悉 C#、Vue.js、TypeScript、AWS 同 Microsoft Azure。",
  nav: {
    ariaLabel: "主要導覽",
    homeLabel: "曾家明首頁",
    work: "工作",
    about: "關於",
    contact: "聯絡",
  },
  hero: {
    title: "曾家明建構雲端就緒嘅軟件系統",
    lede: "曾家明係住喺華盛頓特區嘅資深 .NET 軟件開發人員，熟悉 C#、Vue.js、TypeScript、JavaScript、AWS、Microsoft Azure，同埋為企業及使命導向團隊打造自訂網頁應用程式。",
    actionsLabel: "作品集操作",
    viewWork: "睇工作經驗",
    getInTouch: "聯絡我",
  },
  highlightsLabel: "重點",
  highlights: [
    {
      title: ".NET 同雲端",
      description: "具備 .NET、C#、AWS、Microsoft Azure 同網頁平台經驗。",
    },
    {
      title: "企業級交付",
      description: "開發自訂軟件、網頁入口同雲端資料處理解決方案。",
    },
    {
      title: "多語言視角",
      description:
        "英文同廣東話達母語或雙語程度，並具備專業工作程度嘅日文同普通話。",
    },
  ],
  work: {
    eyebrow: "經驗",
    title: "跨基金會、顧問公司同科技領域嘅軟件工作。",
  },
  projects: [
    {
      name: "Michael & Susan Dell Foundation",
      type: "資深 .NET 軟件開發人員",
      description:
        "為使命導向基金會建構軟件，具備 .NET、雲端開發同現代網頁應用程式嘅資深經驗。",
      period: "2019 年 9 月至今",
      location: "柯士甸, 德州",
    },
    {
      name: "Pariveda Solutions",
      type: "Associate",
      description:
        "為財富美國500強（Fortune 500）公司設計及開發自訂軟件、網頁入口同雲端資料處理解決方案。",
      period: "2014 - 2019",
      location: "西雅圖",
    },
    {
      name: "Rauland-Borg",
      type: "文件翻譯 / 工程實習生",
      description:
        "研究醫療科技，與工程師審閱日文技術文件，並將技術專利翻譯成英文。",
      period: "2013",
      location: "芝加哥大都市區",
    },
  ],
  about: {
    eyebrow: "關於",
    title: "我將軟件架構、產品交付同雲端經驗結合起嚟。",
    body: "我嘅背景涵蓋資訊科技、軟件開發同雲端託管系統。我擁有西北大學電腦科學碩士學位，亦有建立自訂應用程式、網頁入口同資料處理解決方案嘅實績。",
    credentialsLabel: "教育同認證",
  },
  skillsLabel: "技能",
  skills: [
    "C#",
    ".NET Core",
    ".NET Framework",
    "Vue.js",
    "TypeScript / JavaScript",
    "AWS",
    "Microsoft Azure",
    "雲端開發",
    "日文",
    "廣東話",
    "普通話",
  ],
  credentials: [
    "電腦科學碩士，西北大學",
    "電腦工程學士，西北大學",
    "Microsoft Certified: Azure Fundamentals",
    "Certified ScrumMaster (CSM)",
  ],
  contact: {
    eyebrow: "聯絡",
    title: "有項目、職位或者合作想法？",
    email: "電郵",
  },
};
