import { handleRouter } from "./handle-router";
let preRouter = ""
let nextRouter = window.location.pathname

export const getPrevRoute = () => preRouter

export const getNextRoute = () => nextRouter

export const rewriteRouter = () => {

    //
    // history 模式下监听 前进后退
    // popState 触发的时候 路由已经完成导航了，所以只会拿到跳转之后的
    window.addEventListener('popstate', () => {
        console.log("popstate")
        preRouter = getNextRoute()
        nextRouter = window.location.pathname
        handleRouter()
    })


    // 重写 pushState 事件监听
    // 1、备份原有的 pushState

    const rawPushState = window.history.pushState;
    window.history.pushState = (...args) => {
        console.log("args =", args);
        // 导航前
        preRouter = window.location.pathname
        // 调用 原生的
        rawPushState.apply(window.history, args)
        nextRouter = window.location.pathname
        console.log("push state change");
        handleRouter()
    }

    const rawReplaceState = window.history.replaceState;
    window.history.replaceState = (...args) => {
        console.log("args =", args);
        preRouter = window.location.pathname
        // 调用 原生的
        rawReplaceState.apply(window.history, args)
        console.log("replace State  change");
        nextRouter = window.location.pathname
        // handleRouter()
    }



}