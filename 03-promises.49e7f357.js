!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var r=u("iU1Pc"),i={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitButton:document.querySelector("button")},l=null;i.submitButton.addEventListener("click",(function(n){n.preventDefault();var t=+i.delay.value,o=+i.step.value,u=+i.amount.value;!function(n,t,o){setTimeout((function(){var u=0;l=setInterval((function(){(u+=1)===+o&&clearInterval(l),function(n,t){new Promise((function(){Math.random()>.3?e(r).Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms")):e(r).Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(u,n),n+=t}),t)}),n)}(t,o,u)}))}();
//# sourceMappingURL=03-promises.49e7f357.js.map
