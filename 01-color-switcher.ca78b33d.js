!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.stopBtn.setAttribute("disabled","disabled"),t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled","disabled"),t.stopBtn.removeAttribute("disabled","disabled"),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled","disabled"),t.stopBtn.removeAttribute("disabled","disabled")}));var e=0;var n=document.createElement("div");n.classList.add("button-container"),n.append(t.startBtn,t.stopBtn),document.body.appendChild(n),document.querySelector(".button-container").style.cssText="\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 150px;\n    ",t.startBtn.style.padding="10px",t.stopBtn.style.padding="10px"}();
//# sourceMappingURL=01-color-switcher.ca78b33d.js.map