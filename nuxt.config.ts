// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/global.css',
  ],
  modules: [
    '@nuxt/content'
  ],
  typescript: {
    shim: false,
  },
})
