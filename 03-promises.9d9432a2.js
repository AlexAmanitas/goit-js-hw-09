function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var r=u("eWCmQ");const l={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitButton:document.querySelector("button")};let i=null;l.submitButton.addEventListener("click",(function(t){t.preventDefault();const n=+l.delay.value,o=+l.step.value,u=+l.amount.value;!function(t,n,o){setTimeout((()=>{let u=0;i=setInterval((()=>{u+=1,u===+o&&clearInterval(i),function(t,n){new Promise((()=>{Math.random()>.3?e(r).Notify.success(`Fulfilled promise ${t} in ${n}ms`):e(r).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}(u,t),t+=n}),n)}),t)}(n,o,u)}));
//# sourceMappingURL=03-promises.9d9432a2.js.map
