/**
 * Copyright (c) 2019-present, Dumindu Madunuwan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Learning Cloud Native Go',
  tagline: 'Cloud Native Go Tutorials for Everyone!',
  url: 'https://learning-cloud-native-go.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'learning-cloud-native-go',
  projectName: 'learning-cloud-native-go.github.io',
  themeConfig: {
    navbar: {
      title: 'Learning Cloud Native Go',
      logo: {
        alt: 'Learning Cloud Native Go',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/index', label: 'Docs', position: 'right'},
        {
          href: 'https://github.com/learning-cloud-native-go/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: '',
      copyright: `Copyright © ${new Date().getFullYear()} Dumindu Madunuwan.`,
    },
    googleAnalytics: {
      trackingID: 'UA-149592723-1',
    },
    algolia: {
      apiKey: '9f66d24134e08e8c577683743bfb1918',
      indexName: 'learning-cloud-native-go',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
