function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var l=i("eWCmQ");const u={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitButton:document.querySelector("button")};function r({position:t,delay:n}){return new Promise(((o,i)=>{setTimeout((()=>{Math.random()>.3?o(e(l).Notify.success(`Fulfilled promise ${t} in ${n}ms`)):i(e(l).Notify.failure(`Rejected promise ${t} in ${n}ms`))}),n)}))}u.submitButton.addEventListener("click",(function(e){e.preventDefault();const t=+u.delay.value,n=+u.step.value,o=+u.amount.value;!function(e,t,n){for(let o=1;o<=n;o+=1){r({position:o,delay:e}),e+=t}}(t,n,o)})),r(2).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}));
//# sourceMappingURL=03a-promises.a082a989.js.map
