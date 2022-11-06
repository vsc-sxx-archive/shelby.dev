/** @type {import('@docusaurus/types').DocusaurusConfig} */

/* Smart quotes via retext-smartypants */
const visit = require('unist-util-visit');
const retext = require('retext');
const retextSmartypants = require('retext-smartypants');

function remarkSmartypants(options) {
  const processor = retext().use(retextSmartypants, options);

  function transformer(tree) {
    visit(tree, 'text', node => {
      node.value = String(processor.processSync(node.value));
    });
  }

  return transformer;
}

module.exports = {
  title: 'ShelbyProject.',
  tagline: 'System has been destroyed?...',
  url: 'https://protonaosp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'shelbydev',
  projectName: 'shelbydev',
  titleDelimiter: '·',
  themeConfig: {
    navbar: {
      title: 'ShelbyProject',
      hideOnScroll: true,
      logo: {
        alt: 'ProtonAOSP Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          to: '/getting-started/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'community',
          label: 'Community',
          position: 'left',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Discover',
          items: [
            {
              label: 'FAQ',
              to: '/getting-started/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ShelbyHell',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/ShelbyHell',
            },
            {
              label: 'More',
              to: '/community',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Terms of service',
              href: 'https://kdrag0n.dev/terms-of-service',
            },
            {
              label: 'Privacy policy',
              href: 'https://kdrag0n.dev/privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ShelbyProject, Inc.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // announcementBar: {
    //   id: 'release_12.4.1-test1',
    //   content: '<a href="/versions/12.4.1?utm_source=docs-banner&utm_campaign=12.4.1-banner">ProtonAOSP 12.4.1 is now available in early access</a>',
    // },
    algolia: process.env.ALGOLIA_API_KEY && {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    goatcounter: process.env.GOATCOUNTER_CODE && {
      code: process.env.GOATCOUNTER_CODE,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          remarkPlugins: [
            remarkSmartypants,
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: process.env.SA_DOMAIN !== undefined ? [
    {
      src: `https://${process.env.SA_DOMAIN}/latest.js`,
      async: true,
      defer: true,
      'data-skip-dnt': 'true',
    }
  ] : undefined,
  plugins: process.env.GOATCOUNTER_CODE !== undefined ? [
    'docusaurus-plugin-goatcounter',
  ] : undefined,
};
