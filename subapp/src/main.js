// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp} from "vue";
import App from "./App.vue";
import CreateRouter from "./router/index.js";

import  "./public-path.js";


// vue2 ---------------
// let instance = null
// function render(props) {
//     const { container } = props;
//     instance = new Vue({
//         render:(h) => h(App)
//     }).$mount(container ? container.querySelect("#app") : "#app" )
// }

// if (!window.__POWERED_BY_QIANKUN__) {
//     mount({})
// }


// 导出三个必要的生命周期 钩子函数
// 渲染之前调用 bootstrap
// mount 渲染函数
// unmount 卸载函数
// 生命周期函数必须返回  promise
// export async function bootstrap() {
//     console.log("[vue-children ] vue app bootstrap ")
// }


// export async function mount(props) {
//     console.log("[vue-children ] vue app mount ")
//     render(props)
// }

// export async function unmount(params) {
//     instance.$destory()
//     instance.$el.innerHTML = ""
//     instance = null
// }

// ----  end  ----vue2 --------------



let instance = null
function render(props) {
    const { container } = props;
    console.log("container ==", container);
    const router = CreateRouter()
    instance = createApp(App);
    instance.use(router);
    instance.mount(container ? container : "#sub");
    console.log("instance ==", instance);
}

// if (!window.__POWERED_BY_QIANKUN__) {
//     mount({})
// }


// 没有运行乾坤框架，单独运行项目
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}
// if (window.__POWERED_BY_QIANKUN__) {
//     window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }


// 导出三个必要的生命周期 钩子函数
// 渲染之前调用 bootstrap
// mount 渲染函数
// unmount 卸载函数
// 生命周期函数必须返回  promise
export async function bootstrap() {
    console.log("[vue-children ] vue app bootstrap ")
}


export async function mount(props) {
    console.log("[vue-children ] vue app mount ", props)
    render(props)
}

export async function unmount() {
    // instance.$destroy()
    // instance.$el.innerHTML = ""
    instance = null
}




