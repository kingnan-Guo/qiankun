import { handleRouter } from "./handle-router";
import { rewriteRouter } from "./rewrite-router";

let _apps = []
export const getApps = () => _apps;

export const registerMicroApps = (apps) => {
    console.log(apps);
    _apps = apps
}

/**
 *  开始为微前端的 运行原理
 * 1、监视路由变化  rewriteRouter
 *      a. hash 路由 window.onhashchange
 *      b.history 路由
 *          history.go  history.back  history.forward  使用 window.popstate 事件
 *         pushState  replaceState 需要通过函数重写的方式监听到改变
 * 2、匹配子应用
 * 3、加载子应用
 * 4、渲染子应用
 * 
 */
export const start = () => {
    rewriteRouter()
    handleRouter()
}

