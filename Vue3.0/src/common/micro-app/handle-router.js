import { getApps } from ".";
import { importHTML } from "./import-html";
import { getNextRoute, getPrevRoute } from "./rewrite-router";

/**
 * 处理路由 变化
 * 监视到路由变化后 执行 handleRouter
 * 
 * 
 * 2、匹配子应用
 * 3、加载子应用
 * 4、渲染子应用
 * 
 */
export const handleRouter = async () => {
    console.log("handleRouter");


    const apps = getApps()


    // 卸载上一个应用
    const preApp = apps.find(item => {
        return getPrevRoute().startsWith(item.activeRule)
    })
    // 如果 有上一个应用 那么先销毁
    if(preApp){
        unmount(preApp)
    }



    // 2 匹配子应用
    // 2-1获取到当前的 路由路径
    // 2-2 更具当前的路由路径去apps 里面查找
    console.log("window.location.pathname ==", window.location.pathname);







    // 查找 下一个 应用
    const app= apps.find(item => getNextRoute().startsWith(item.activeRule))
    if(!app){
        return
    }
    console.log("app =", app);

    // 3、加载子应用

    const { template, exeScrips } = await importHTML(app.entry)

    const container = document.querySelector(app.container)

    container.appendChild(template)
    window.__POWERED_BY_QIANKUN__ = true
    window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry + '/'
    // gerExternalScripts().then((res) => {
    //     // console.log('gerExternalScripts =',res);
    // })
    
    const appExports = await exeScrips()

    console.log("appExports ", appExports)
    // 将 appExports 放到 app 内部

    app.bootstrap = appExports.bootstrap
    app.mount = appExports.mount
    app.unmount = appExports.unmount


    await bootstrap(app)
    await mount(app)
    // await unmount(app)

    // -----------------------
    // // 获取 entry， 获取html 渲染到 container 中
    // const html = await fetch(app.entry).then(res => res.text())
    // console.log("html =", html);
    // const container = document.querySelector(app.container)
    // // 客户端渲染 需要  通过执行 javascript 来生成内容
    // // 因为 innerHTML 的script 不会加载执行， 安全策略，所以需要手动执行
    // container.innerHTML = html
    // // 手动加载子应用的 script， 执行script , eval or new function
    // // 解析HTML


    
}

async function bootstrap(app) {
    app.bootstrap && (await app.bootstrap())
}
async function mount(app) {
    app.mount && (await app.mount({
        container: document.querySelector(app.container)
    }))
}
async function unmount(app) {
    app.unmount && (await app.unmount({
        container: document.querySelector(app.container)
    }))
}