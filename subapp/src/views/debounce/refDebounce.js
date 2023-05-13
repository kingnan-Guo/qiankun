/**
 * customRef
 * customRef 可以用来创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数，并且应该返回一个带有 get 和 set 的对象。
 */
import { customRef } from "vue"
/**
 * 
 * @param {*} value 传值
 * @param {*} delay 延时时间
 * @returns 
 */
export function refDebounce (value, delay = 1000) {
    console.log('ref value ==', value, delay)
    var time
    return customRef((track, trigger) => {
        console.log("customRef track ==", track)
        return {
            get () {
                // 依赖收集 track()
                track()
                return value
            },
            set (val) {
                value = val
                clearTimeout(time)
                setTimeout(() => {
                    console.log("set ==", val);
                    // 派发更新 trigger()
                    trigger() 
                }, delay);
            }
        }
    })
}

