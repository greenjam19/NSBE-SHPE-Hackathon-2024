// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Opulence & Opportunities',
  tagline: 'Empowering Underrepresented Communities through Exposure and Education.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nsbe-shpe-hackathon-2024.onrender.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'greenjam19', // Usually your GitHub org/user name.
  projectName: 'NSBE-SHPE-Hackathon-2024', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/d20-icon-13.jpg',
      navbar: {
        title: 'Opulence & Opportunities',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Information',
          },
          {
            href: 'https://github.com/greenjam19/NSBE-SHPE-Hackathon-2024',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Overview',
            items: [
              {
                label: 'Core Mission',
                to: '/docs/intro#core-mission',
              },
              {
                label: 'Getting Started Statement',
                to: '/docs/intro#getting-started',
              },
              {
                label: 'FAQs',
                to: '/docs/intro#faqs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'NSBE Site (RPI Chapter)',
                href: 'https://sites.google.com/view/nsbe-rpi/home',
              },
              {
                label: 'SHPE Site (RPI Chapter)',
                href: 'http://shpe.rpi.edu/',
              },
              {
                label: 'Rensselaer Polytechnic Institute (RPI)',
                href: 'https://www.rpi.edu/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/greenjam19/NSBE-SHPE-Hackathon-2024',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Opulence & Opportunities, By Jamarri and Matthew`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  // add search feature (requires production build)
  plugins: [
    [require.resolve('docusaurus-lunr-search'),
    {
      indexBaseUrl: true
    }
    ]
  ],
};



export default config;
