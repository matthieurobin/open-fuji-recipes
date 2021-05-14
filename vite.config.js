import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base  : '',
  build : {
    outDir : 'docs',
    target : 'es2015',
    sourcemap : false
  },
  plugins: [
    svelte(),
    VitePWA({
      registerType   : 'autoUpdate',
      injectRegister : 'script',
      srcDir         : 'src',
      base           : '',
      manifest       : {
        name                        : 'Open Fuji recipes',
        short_name                  : 'Open Fuji recipes',
        start_url                   : '/',
        display                     : 'standalone',
        background_color            : '#1F2937',
        theme_color                 : '#1F2937',
        description                 : 'Fujifilm simulation recipes',
        prefer_related_applications : false,
        icons                       :  [
          {
           'src': 'favicon/android-icon-36x36.png',
           'sizes': '36x36',
           'type': 'image/png',
           'density': '0.75'
          },
          {
           'src': 'favicon/android-icon-48x48.png',
           'sizes': '48x48',
           'type': 'image/png',
           'density': '1.0'
          },
          {
           'src': 'favicon/android-icon-72x72.png',
           'sizes': '72x72',
           'type': 'image/png',
           'density': '1.5'
          },
          {
           'src': 'favicon/android-icon-96x96.png',
           'sizes': '96x96',
           'type': 'image/png',
           'density': '2.0'
          },
          {
           'src': 'favicon/android-icon-144x144.png',
           'sizes': '144x144',
           'type': 'image/png',
           'density': '3.0'
          },
          {
           'src': 'favicon/android-icon-192x192.png',
           'sizes': '192x192',
           'type': 'image/png',
           'density': '4.0'
          }
         ]
      }
    })
  ]
})
