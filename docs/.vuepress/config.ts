import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  title: 'VuePress 2 Starter App',
  description:
    'An introduction to the basics of VuePress 2',
  plugins: [
    registerComponentsPlugin({
    // All components in the correct folder automatically imported
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about',
      },
    ],
  }),
  
});
