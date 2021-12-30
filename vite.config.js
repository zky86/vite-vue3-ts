import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import './src/styles/color.scss';`
      }
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
