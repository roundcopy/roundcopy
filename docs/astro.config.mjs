import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify/functions';

const site = 'https://roundcopy.com';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'Starlight',
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      editLink: {
        baseUrl: 'https://github.com/roundcopy/roundcopy/edit/main/docs/',
      },
      social: {
        github: 'https://github.com/roundcopy/',
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
            de: 'Beginne hier',
            es: 'Comienza aqui',
            ja: 'ここからはじめる',
            fr: 'Commencez ici',
          },
          items: [
            {
              label: 'Getting Started',
              link: 'getting-started',
              translations: {
                de: 'Erste Schritte',
                es: 'Empezando',
                ja: '入門',
                fr: 'Mise en route'
              },
            },
            {
              label: 'Environmental Impact',
              link: 'environmental-impact',
              translations: {
                es: 'Documentación ecológica',
                ja: '環境への負荷',
                fr: 'Impact environnemental'
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
