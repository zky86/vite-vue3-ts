import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import './src/styles/color.scss';`
      }
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    }
  }
  // css: {
  //   preprocessorOptions: {
  //     sass: {
  //       // \n 处理文件中多个引入报换行错误的问题
  //       additionalData: "@import './src/styles/color.sass'\n"
  //     }
  //   }
  // }
})
