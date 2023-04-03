// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // '@/assets/style/global.css',
    '~/assets/style/content.scss'
  ],
  extends: '@nuxt-themes/typography',
  modules: [
    '@nuxt/content'
  ],
  typescript: {
    shim: false,
  },
})
