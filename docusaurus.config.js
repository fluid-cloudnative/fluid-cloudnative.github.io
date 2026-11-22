// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Docs that were moved when the documentation was reorganized (see
// https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/issues/38).
// Keys are old doc paths and values are the new doc paths, both relative to
// the docs root and without any version prefix. When you move or remove a doc,
// add an entry here so that existing links keep working.
const movedDocs = {
  'core-concepts/key-features': 'introduction/key-features',
  'core-concepts/architecture-and-concepts': 'introduction/architecture-and-concepts',
  'get-started/installation': 'getting-started/installation',
  'get-started/quick-start': 'getting-started/quick-start',
  'get-started/configuration-best-practices': 'getting-started/configuration-best-practices',
  'tutorials/dataset-creation/accelerate-data-accessing-posix': 'tutorials/data-accessing/accelerate-data-accessing-posix',
  'tutorials/dataset-creation/accelerate-data-accessing-hdfs': 'tutorials/data-accessing/accelerate-data-accessing-hdfs',
  'tutorials/dataset-creation/cache-co-locality': 'tutorials/advanced/cache-co-locality',
  'tutorials/dataset-creation/share-data-across-namespace-csi': 'tutorials/advanced/share-data-across-namespace-csi',
  'tutorials/dataset-creation/share-data-across-namespace-sidecar': 'tutorials/advanced/share-data-across-namespace-sidecar',
  'tutorials/dataset-operation/data-preloading': 'tutorials/operate-datasets/data-load',
  'tutorials/dataset-operation/automatic-cleanup-data-operation': 'tutorials/operate-datasets/automatic-cleanup-data-operation',
  'tutorials/dataset-operation/cacheruntime-data-operations': 'tutorials/operate-datasets/cacheruntime-data-operations',
  'tutorials/dataset-operation/use-curvine-as-cacheruntime-for-data-caching': 'tutorials/runtimes/use-curvine-as-cacheruntime-for-data-caching',
  'tutorials/dataset-operation/deploy-mooncake-with-cacheruntime': 'tutorials/runtimes/deploy-mooncake-with-cacheruntime',
  'tutorials/dataset-operation/cache-runtime-manually-scaling': 'administration/cache-runtime-manually-scaling',
  'tutorials/dataset-security/encrypted-options-for-dataset': 'tutorials/datasets/encrypted-options-for-dataset',
  'tutorials/dataset-security/set-access-mode': 'tutorials/datasets/access-modes',
  'tutorials/dataset-security/using-fluid-to-access-non-root-users-data': 'tutorials/advanced/using-fluid-to-access-non-root-users-data',
  'tutorials/storage-acceleration/accelerate-pvc-with-fluid': 'tutorials/on-premise-storage/accelerate-pvc-with-fluid',
  'tutorials/storage-acceleration/accelerate-hostPath-with-fluid': 'tutorials/on-premise-storage/accelerate-hostPath-with-fluid',
  'tutorials/storage-acceleration/accelerate-different-storage-with-fluid': 'more-examples/accelerate-different-storage-with-fluid',
  'tutorials/advanced/configuring-affinity-for-data-operations-in-dataflow': 'tutorials/operate-datasets/configuring-affinity-for-data-operations-in-dataflow',
  'tutorials/advanced/set-fuse-clean-policy': 'tutorials/data-accessing/fuse-pod-clean-policy',
  'tutorials/advanced/alluxio-tieredstore-configuration': 'more-examples/alluxio-tieredstore-configuration',
  'tutorials/advanced/accelerate-data-access-by-mem-or-ssd': 'more-examples/accelerate-data-access-by-mem-or-ssd',
  'tutorials/advanced/support-image-pull-secrets': 'more-examples/support-image-pull-secrets',
  'operation-guide/runtime-monitoring': 'administration/runtime-monitoring',
  'operation-guide/cache-runtime-auto-scaling': 'administration/cache-runtime-auto-scaling',
  'operation-guide/cacheruntime-spec-field-update-capabilities': 'administration/cacheruntime-spec-field-update-capabilities',
  'operation-guide/dashboard-visualization': 'administration/dashboard-visualization',
  'troubleshooting-and-faq/troubleshooting': 'administration/troubleshooting',
  'troubleshooting-and-faq/faq': 'administration/faq',
  'release-and-API-doc/api-doc': 'reference/api-doc',
  'release-and-API-doc/release': 'reference/release',
  'release-and-API-doc/roadmap': 'reference/roadmap',
};

// Redirects old doc URLs to the new ones for the "next" version (/docs/next/)
// and for the default version (/docs/). Older versions keep their original
// paths, so they need no redirects.
function createDocsRedirects(existingPath) {
  const match = existingPath.match(/^\/docs\/(next\/)?(.+)$/);
  if (!match) {
    return undefined;
  }
  const [, versionPrefix = '', docPath] = match;
  const oldPaths = Object.keys(movedDocs)
    .filter((oldPath) => movedDocs[oldPath] === docPath)
    .map((oldPath) => `/docs/${versionPrefix}${oldPath}`);
  return oldPaths.length > 0 ? oldPaths : undefined;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fluid',
  tagline: 'Fluid, elastic data abstraction and acceleration for BigData/AI applications in cloud.',
  favicon: 'img/fluid-icon-color.png',

  // Set the production url of your site here
  url: 'https://fluid-cloudnative.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fluid-cloudnative', // Usually your GitHub org/user name.
  projectName: 'fluid-cloudnative.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['public', 'static'],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
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
            'https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          lastVersion: undefined,
          routeBasePath: 'docs',
          versions: {
            current: {
              label: `Latest 🚧`
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        include: ['**/*.md'],
        sidebarPath: './sidebars-community.js',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects: createDocsRedirects,
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'LFPGLLH528',
        apiKey: 'c541d93163af12d221cc7aab896e48f8',
        indexName: 'fluid-cloudnativeio'
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Fluid',
          src: 'img/fluid-horizontal-color.png',
          srcDark: 'img/fluid-horizontal-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { 
            to: '/blog', 
            label: 'Blog',
            position: 'left'
          },
		      {
            to: "community/committee",
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
            activeBasePath: 'community'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fluid-cloudnative/fluid',
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
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CNCF Slack (#fluid channel)',
                href: 'https://app.slack.com/client/T08PSQ7BQ/C02ADG209SP',
              },
              {
                label: 'DingTalk (GroupID: 32850151)',
                href: '/community/meeting_schedule',
              },
              {
                label: 'Meeting',
                href: '/community/meeting_schedule',
              },
              {
                label: 'WeChat',
                href: 'https://github.com/fluid-cloudnative/fluid/blob/master/README.md#community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fluid-cloudnative/fluid',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Fluid Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page: 
        https://www.linuxfoundation.org/trademark-usage`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
