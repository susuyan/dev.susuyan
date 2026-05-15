import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * DocsLayout 共享配置（BaseLayoutProps）
 * 基于 .impeccable.md 设计原则：温暖、克制、清晰层级
 */
export function baseOptions(): BaseLayoutProps {
  return {
    // 导航配置
    nav: {
      title: 'susuyan',
      url: '/',
      enabled: true,
    },

    // 主题切换（支持双主题）
    themeSwitch: {
      enabled: true,
      mode: 'light-dark',
    },

    // GitHub 链接
    githubUrl: 'https://github.com/susuyan/dev.susuyan',
  };
}
