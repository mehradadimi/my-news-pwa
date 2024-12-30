// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  alias: {
    assets: "/<rootDir>/assets",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vueuse/nuxt", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "MyNews",
      short_name: "MyNews",
      description: "MyNews App",
      icons: [
        {
          src: "icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/pwa-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/pwa-maskable-512x512.png",
          sizes: "512x512",

          type: "image/png",
          purpose: "maskable",
        },
      ],
      theme_color: "#FFFFFF",
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: { enabled: true, type: "module" },
  },
});
