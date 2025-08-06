// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },

  css: ['@fortawesome/fontawesome-svg-core/styles.css',
    // '~/assets/css/main.css'
  ],
  plugins: ['~/plugins/fontawesome.ts'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
,


  app: {
    head: {
      title: 'CrypGo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
        },
         {
          rel: 'icon',
          type: 'image/png',
          href: 'images/star.png'
        },
        {
         rel:"stylesheet",
         href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        }
      ]
    }
  },
  
})

