!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e=null;function n(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled","disabled"),n(),e=setInterval(n,1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.ae0d9338.js.map
