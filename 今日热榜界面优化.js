// ==UserScript==
// @name         今日热榜界面简化
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  仅适用于未登录状态的主界面
// @author       Yesaye
// @match        *://tophub.today/
// @icon         https://www.google.com/s2/favicons?domain=tophub.today
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    let style = `
#appbar {display: none !important;}
#tabbar {display: none !important;}
.cq {display: none !important;}
.alert {display: none !important;}
.eb-fb {display: none !important;}
.c-d {padding: 0px !important;}
.cc-cd-lb>img {display: none !important;}
`;
    let style_Add = document.createElement('style');

    if (document.lastChild) {
        document.lastChild.appendChild(style_Add).textContent = style;
    } else { // 避免网站加载速度太慢的备用措施
        let timer1 = setInterval(function(){ // 每 10 毫秒检查一下 html 是否已存在
            if (document.lastChild) {
                clearInterval(timer1); // 取消定时器
                document.lastChild.appendChild(style_Add).textContent = style;
            }
        });
    }

})();

