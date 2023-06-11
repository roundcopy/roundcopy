import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://roundcopy.com';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'Roundcopy',
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      editLink: {
        baseUrl: 'https://github.com/roundcopy/roundcopy/edit/main/docs/',
      },
      social: {
      },
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-MMLV6YCEHM',
            'data-site': 'G-MMLV6YCEHM',
            defer: true,
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
        },
      ],
      customCss: process.env.NO_GRADIENTS ? [] : ['/src/assets/landing.css'],
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      sidebar: [
        {
          label: 'Start Here',
          translations: {
          },
          items: [
            {
              label: 'Getting Started',
              link: 'getting-started',
              translations: {
              },
            },
            {
              label: 'Environmental Impact',
              link: 'environmental-impact',
              translations: {
              },
            },
          ],
        },
        {
          label: 'Guides',
          translations: { de: 'Anleitungen', es: 'Guías', ja: 'ガイド', fr: 'Guides' },
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Reference',
          translations: {
            de: 'Referenz',
            es: 'Referencias',
            ja: 'リファレンス',
            fr: 'Référence',
          },
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
