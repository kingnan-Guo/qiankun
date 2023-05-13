import { createRouter, createWebHistory } from "vue-router";
 


import homePage from '@/views/children/childrenPage.vue'

// import debounce from '@/views/debounce/debounce-page.vue'

import CustomIEC from '@/views/CustomIEC'


const routes = [
  {
    //登录页面
    path: "/",
    name: "main",
    children:[
      {
        //登录页面
        path: "/children",
        name: "home",
        component: homePage
      },
      {
        path: '/customiec', // 主屏
        name: 'CustomIEC',
        component: CustomIEC
      },
    ]
  },




];
// const router = createRouter({
//   history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? `vue-children` : '/'),
//   // mode: 'history',
//   routes,
// });
 
const CreateRouter = () => {
  return createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? `vue-children` : '/'),
    // mode: 'history',
    routes,
  });
}

export default CreateRouter;