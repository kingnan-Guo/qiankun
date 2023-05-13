export function debounce (fn, delay = 1000) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    console.log('...args  ==', ...args)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
}
