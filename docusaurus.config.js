// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mineflayer Guide',
  tagline: 'A beginner friendly collection of snippets and guides for Mineflayer',
  //favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pix3lpirat3.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mineflayer-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pix3lpirat3', // Usually your GitHub org/user name.
  projectName: 'mineflayer-guide', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/snippets',
          sidebarPath: './sidebars.js',
        },
        blog: {
          blogSidebarTitle: 'Guides',
          blogSidebarCount: 'ALL',
          routeBasePath: '/',
          showReadingTime: true,
          sortPosts: 'ascending'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ['@docusaurus/theme-live-codeblock'],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    }},
    {
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false
        }
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false
      },
      // Replace with your project's social card
      image: 'img/prismarine.svg',
      navbar: {
        title: 'Mineflayer Guide',
        logo: {
          alt: 'Mineflayer Logo',
          src: 'img/prismarine.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Snippets',
          },
          {to: '/', label: 'Guides', position: 'left'},
          {
            href: 'https://github.com/pix3lpirat3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Pix3lPirat3.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
  })
};

export default config;
