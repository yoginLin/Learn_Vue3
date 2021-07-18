import { createApp } from 'vue'
import App from './02_compositionAPI基础/App.vue'

// const app = createApp(App)

// 全局混入
// app.mixin({
//   data() {
//     return {

//     }
//   },
//   methods: {

//   },
//   created() {
//     console.log("我是全局混入的mixin");
//   }
// })
// app.component()

// 将组件的东西挂载到DOM里面
// app.mount('#app')

createApp(App).mount('#app')