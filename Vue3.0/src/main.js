// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";


// import { loadMicroApp, registerMicroApps, start } from 'qiankun';
import {  registerMicroApps, start } from 'qiankun';
// import {  registerMicroApps, start } from './common/micro-app';
// console.log("loadMicroApp", loadMicroApp);

// console.log("window", window);

// loadMicroApp({
//     name: 'reactApp',
//     entry: '//localhost:7100',
//     container: '#container',
//     props: {
//       slogan: 'Hello Qiankun',
//     },
// });

// let propsData = {
//   name: 1
// }
// const actions = initGlobalState(propsData)
// actions.onGlobalStateChange((state, prev) => {
//   console.log(state, prev);
// })



const app = createApp(App);
app.use(router);
app.mount("#app");


// console.log("registerMicroApps", registerMicroApps);
// 注册子应用
// 微前端运行原理与 SPA 非常相似
registerMicroApps(
  // 当匹配到 activeRule 后，请求获取 entry 资源，渲染到 container 中
  [
    {
      name: 'vue-subapp',
      entry: '//127.0.0.1:7200',
      container: '#subapp-container',
      activeRule: '/vue-children',
      props: {
        name: 'kuitos',
      },
    },
  ],
  {
    beforeLoad: (app) => console.log('before load', app.name),
    beforeMount: [(app) => console.log('before mount', app.name)],
  },
);

start({
  sandbox:{
    strictStyleIsolation: true, //使用 shadow dom 解决样式冲突
  }
});

