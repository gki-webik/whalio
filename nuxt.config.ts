export default defineNuxtConfig({
  app: {
    head: {
      title: "Whalio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index,follow" },
        {
          name: "description",
          content: "Whalio",
        },
        {
          name: "keywords",
          content: "Whalio",
        },
        { property: "og:title", content: "Whalio" },
        {
          property: "og:description",
          content: "Whalio",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://whaliogo.com" },
        { name: "theme-color", content: "#1967D2" },
        { name: "msapplication-TileColor", content: "#1967D2" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "apple-mobile-web-app-title", content: "Whalio" },
        {
          name: "msapplication-TileImage",
          content: "/ico/android-chrome-512x512.png",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "color-scheme", content: "light" },
        { name: "viewport-fit", content: "cover" },
        { name: "bingbot", content: "index,follow" },
        { name: "yandex", content: "index,follow" },
        { name: "og:locale", content: "en_EN" },
        { name: "og:site_name", content: "Whalio" },
      ],
      link: [
        { rel: "stylesheet", href: "/assets/styles/dist/min/all.min.css" },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "icon",
          type: "image/png",
          href: "/ico/android-chrome-512x512.png",
        },
        {
          rel: "icon",
          type: "apple-touch-icon",
          href: "/ico/apple-touch-icon.png",
        },
        {
          rel: "short icon",
          href: "/favicon.ico",
        },
        { rel: "canonical", href: "https://whaliogo.com" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://whaliogo.com",
            name: "Whalio",
          }),
        },
      ],
    },
  },
  css: [],
  components: true,
  devServer: {
    port: 3000,
  },
  compatibilityDate: "2025-03-12",
});
