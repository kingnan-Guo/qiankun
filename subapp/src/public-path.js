// __webpack_public_path__ 在运行时生成的 路径 会自动拼接上这个全局变量 （如果有）
// window.__webpack_public_path__  = 'http://localhost:7200/'
// _webpack_public_path_ = 'http://localhost:7200/'

// __webpack_public_path__ = 'http://localhost:7200/'
if (window.__POWERED_BY_QIANKUN__) {
    window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}