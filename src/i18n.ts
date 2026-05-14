import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        work: 'Works',
        about: 'About',
        services: 'Services',
        contact: 'Connect',
      },
      hero: {
        title: 'Architecting Digital Realities',
        subtitle: 'Independent Designer & Creative Technologist specializing in building high-fidelity interactive experiences.',
        cta: 'View My Work',
      },
      sections: {
        featured: 'Featured Projects',
        curated: 'Curated Selection',
        highlights: 'Personal Highlights',
        expertise: 'Core Expertise',
        approach: 'Design Approach',
        aboutMe: 'Behind the Craft',
      },
      about: {
        title: 'Merging Logic with Aesthetics',
        p1: 'I am a multidimensional designer focused on creating high-impact digital experiences. My work lives at the intersection of technical engineering and visual storytelling.',
        p2: 'With over 8 years of experience, I help brands navigate the complex landscape of modern technology through deliberate design choices and architectural precision.',
      },
      footer: {
        tagline: 'Let’s build the future together.',
        copyright: '© 2026 Aetheria. All rights reserved.',
      }
    }
  },
  zh: {
    translation: {
      nav: {
        work: '作品集',
        about: '关于我',
        services: '服务',
        contact: '联系',
      },
      hero: {
        title: '构建数字感官世界',
        subtitle: '独立设计师与创意技术专家，专注于打造高保真交互体验。',
        cta: '查看作品',
      },
      sections: {
        featured: '精选项目',
        curated: '个人精选',
        highlights: '作品亮点',
        expertise: '核心专业',
        approach: '设计方法',
        aboutMe: '关于作者',
      },
      about: {
        title: '逻辑与美学的融合',
        p1: '我是一名多维设计师，专注于创造高影响力的数字体验。我的工作处于技术工程与视觉叙事的交汇点。',
        p2: '凭借超过 8 年的经验，我通过深思熟虑的设计选择和架构精度，帮助品牌驾驭现代技术的复杂格局。',
      },
      footer: {
        tagline: '让我们共同创造未来。',
        copyright: '© 2026 Aetheria. 版权所有。',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
