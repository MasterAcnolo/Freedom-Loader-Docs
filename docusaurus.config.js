// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Freedom Loader Docs',
  tagline: 'Documentation for the free, open-source media downloader',
  favicon: 'img/freedom-loader.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.freedomloader.acnolo.fr',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MasterAcnolo',
  projectName: 'Freedom-Loader-Docs',

  onBrokenLinks: 'throw',
  clientModules: ['./src/clientModules/mermaid-pan-zoom.js'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/MasterAcnolo/Freedom-Loader-Docs/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Freedom Loader Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/changelog',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'https://freedomloader.acnolo.fr/',
            label: 'Main website',
            position: 'right',
          },
          {
            href: 'https://github.com/MasterAcnolo/Freedom-Loader',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          src: 'img/freedom-loader.png',
          alt: 'Freedom Loader',
          href: 'https://freedomloader.acnolo.fr/',
          width: 52,
          height: 52,
        },
        links: [
          {
            title: 'Explore',
            items: [
              {
                label: 'Documentation home',
                to: '/',
              },
              {
                label: 'Application architecture',
                to: '/features/architecture',
              },
              {
                label: 'Download lifecycle',
                to: '/features/download-lifecycle',
              },
              {
                label: 'Developer guide',
                to: '/developer-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Report a bug or request a feature',
                href: 'https://github.com/MasterAcnolo/Freedom-Loader/issues',
              },
              {
                label: 'Contributing guide',
                to: '/contributing',
              },
            ],
          },
          {
            title: 'Freedom Loader',
            items: [
              {
                label: 'Main website',
                href: 'https://freedomloader.acnolo.fr/',
              },
              {
                label: 'Source code on GitHub',
                href: 'https://github.com/MasterAcnolo/Freedom-Loader',
              },
              {
                label: 'Theme Workshop',
                href: 'https://masteracnolo.github.io/Freedom-Loader-Workshop/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Freedom Loader · Documentation built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
