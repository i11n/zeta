const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const status = require('../component-status');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zeta design',
  tagline: 'An enterprise design system and UI library',
  url: 'https://3000-turquoise-porpoise-autwhv1v.ws-us10.gitpod.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'i11n', // Usually your GitHub org/user name.
  projectName: 'zeta', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'z11',
      logo: {
        alt: 'zeta image',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/i11n/zeta',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/i11n/zeta',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IntegerEleven, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/i11n/zeta/edit/dev/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/i11n/zeta/edit/dev/docs/blog/',
        },
        theme: {

          customCss: require.resolve('../style/dist/css/default.css'),
        },
      },
    ],
  ],
  customFields: {
    features: {

    },
    support: {

    },
    status,
  }
};
