import { ChakraLoaderPlugin } from 'chakra-loader'
import * as iconSet from './utils/icons'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Miro | Free Online Collaborative Whiteboard Platform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;700&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/chakra-ui/chakra-ui-vue/tree/develop/packages/nuxt-chakra
    // Doc: https://github.com/nuxt-community/emotion-module#readme
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet
    },
    extendTheme: {
      shadows: {
        outline: '0 0 0 3px rgb(38 48 192 / 44%)'
      },
      fonts: {
        heading: 'Sora, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        body: 'Sora, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      },
      colors: {
        miro: {
          50: '#e8ebff',
          100: '#bdc6f7',
          200: '#94a0ec',
          300: '#697ae3',
          400: '#3f53d9',
          500: '#263ac0',
          600: '#1c2d96',
          700: '#12206c',
          800: '#091344',
          900: '#02051c'
        },
        yellow: {
          50: '#fff9da',
          100: '#ffeead',
          200: '#ffe27d',
          300: '#ffd74b',
          400: '#ffcb1a',
          500: '#e6b200',
          600: '#b38a00',
          700: '#806300',
          800: '#4e3b00',
          900: '#1d1400'
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config) {
      config.plugins.push(
        new ChakraLoaderPlugin()
      )
    }
  }
}
