//单页长时间不操作就会自动退出
var lastTime = new Date().getTime()
var currentTime = new Date().getTime()
var timeOut = 30 * 60 *1000  //设置超时时间: 30分

window.onload = function() {
    window.document.onmousedown = function() {
        localStorage.setItem("lastTime",new Date().getTime())
    }
};

function checkTimeout() {
    currentTime = new Date().getTime()		//更新当前时间
    lastTime = localStorage.getItem("lastTime");

    if (currentTime - lastTime > timeOut) { //判断是否超时
        var url = window.location.href;
        var newUrl=url.match(/(\S*)#/);
        sessionStorage.clear()
        window.open('/','_self');
    }
}


/* 定时器 间隔5分钟检测是否长时间未操作页面 */
window.setInterval(checkTimeout, 300000);
