import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/*
  ① Vue的脚手架就是Vue CLI（Command-Line Interface）翻译为命令行界面
      我们可以通过CLI选择项目的配置和创建出我们的项目
      Vue CLI已经内置了webpack相关的配置，我们不需要从零来配置

  ② Vue CLI的安装和使用
      我们想用Vue CLI的话，就要先安装它：npm install @vue/cli -g
      如果你只是想升级你的版本的话：npm update @vue/cli -g
      安装完后创建项目：vue create 项目的名称

  ③ 浏览器适配文件 .browserslistrc
      github上有许多例子

  ④ 当我们用脚手架创建好一个项目的时候，脚手架会默认把vue的环境给我们搭好，我们只要用就行了，方便了我们开发
*/