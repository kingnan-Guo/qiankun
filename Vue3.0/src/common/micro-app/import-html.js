import { fetchResource } from "./fetch-resource"

export const importHTML = async (url) => {
    const html = await fetchResource(url)
    // console.log("html ==", html);
    const template = document.createElement("div")
    template.innerHTML = html
    const scripts = template.querySelectorAll("script")
    // 获取 所有的 script 的标签  ['code', '' ]
    function gerExternalScripts() {
        console.log("scripts", scripts);
        return Promise.all(
            Array.from(scripts).map((script) => {
                const src = script.getAttribute('src')

                if(!src){
                    return Promise.resolve(script.innerHTML)
                } else{
                    return fetchResource(
                        src.startsWith('http') ? src : `${url}${src}`
                    )
                }
            })
        )
    }
    // 获取 并执行 所有的 script 脚本代码
    async function exeScrips() {
        const scripts  = await gerExternalScripts()
        console.log("scripts ==", scripts);
        // 手动 构造  模拟commonJs 环境获取 object
        // 子应用在执行的时候 会 检测 module exports
        const module = {exports:{}}
        const exports = module.exports
        scripts.forEach(code => {
            // eval 执行的代码 可以访问外部变量，没有作用域
            eval(code)
        })
        if (exports)
        // return window['subapp']
        // 模拟commonJs 获取 数据
        // console.log("exports  ==", exports);
        return module.exports
    }
    return {
        template,
        gerExternalScripts,
        exeScrips//沙箱相关
    }
}