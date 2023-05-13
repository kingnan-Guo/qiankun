import { createRouter, createWebHistory } from "vue-router";
 


import homePage from '@/views/home/homePage.vue'

const routes = [

  {
    //登录页面
    path: "/home",
    name: "home",
    component: homePage
  },
  {
    path: '/main', // 主屏
    name: 'Main',
    children: []
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;