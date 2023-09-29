/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

// 监听页面的DOMContentLoaded事件
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (s, text) => {//用于替换具有指定id的元素的文本内容。
    const element = document.getElementById(s)//原先是selector,改成s没有任何影响
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
