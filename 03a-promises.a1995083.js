function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var i=u("eWCmQ");const r={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitButton:document.querySelector("button")};function l({position:t,delay:n}){return new Promise((()=>{setTimeout((()=>{Math.random()>.3?e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`):e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)}),n)}))}r.submitButton.addEventListener("click",(function(e){e.preventDefault();const t=+r.delay.value,n=+r.step.value,o=+r.amount.value;!function(e,t,n){for(let o=1;o<=n;o+=1){l({position:o,delay:e}),e+=t}}(t,n,o)}));
//# sourceMappingURL=03a-promises.a1995083.js.map