// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/style/global.css',
    '~/assets/style/content.scss'
  ],
  content: {
    highlight: {
      theme: 'github-light'
    }
  },
  modules: [
    '@nuxt/content'
  ],
  typescript: {
    shim: false,
  },
})
