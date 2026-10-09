import { profile } from './data/profile'

const description =
  'Atush Iskenderow — Full-stack & AI engineer. Django, FastAPI, LLMs, RAG, fine-tuning, quantization, speech & vision models, Vue/Nuxt, Flutter, Docker and Nginx.'

// Applies the saved/system theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`

export default defineNuxtConfig({
  compatibilityDate: '2024-09-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  // Pre-render every page to static HTML — fastest possible on Vercel.
  nitro: { prerender: { routes: ['/'] } },
  routeRules: { '/': { prerender: true } },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: `${profile.name} — ${profile.title}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { name: 'theme-color', content: '#0b0f17' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `${profile.name} — ${profile.title}` },
        { property: 'og:description', content: description },
        { property: 'og:url', content: profile.siteUrl },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
      script: [
        { innerHTML: themeScript, tagPosition: 'head' },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.title,
            email: `mailto:${profile.contact.email}`,
            url: profile.siteUrl,
            sameAs: [profile.contact.github, profile.contact.instagram],
            knowsAbout: ['Django', 'FastAPI', 'LLM', 'RAG', 'NLP', 'Speech-to-Text', 'Text-to-Speech', 'Image Classification', 'Fine-tuning', 'Quantization', 'Vue.js', 'Nuxt.js', 'Flutter', 'Docker', 'Nginx', 'Apache'],
          }),
        },
      ],
    },
  },
})
