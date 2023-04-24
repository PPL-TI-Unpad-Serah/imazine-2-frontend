// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@sidebase/nuxt-session'
  ],
  plugins: [
    '@/plugins/bootstrap.client.ts',
    '@/plugins/markdown-it.client.ts'
  ],
  googleFonts: {
    download: true,
    families: {
      Lato: [200, 300, 400, 500, 600, 700, 800,900],
    }
  },
  css: [
    '@/assets/style.scss',
    "@/node_modules/bootstrap-icons/font/bootstrap-icons.scss"
  ],
  session: {
    api: {
      isEnabled: false
    }
  }
})
