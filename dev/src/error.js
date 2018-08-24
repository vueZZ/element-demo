// TODO:前端错误监测接口
function sendError (msg,url,line){
  // var REPORT_URL = "xxxx/cgi"; // 收集上报数据的信息
  // var m =[msg, url, line, navigator.userAgent, +new Date];// 收集错误信息，发生错误的脚本文件网络地址，用户代理信息，时间
  // var url = REPORT_URL + m.join('||');// 组装错误上报信息内容URL
  // var img = new Image;
  // img.onload = img.onerror = function(){
  //     img = null;
  // };
  // img.src = url;// 发送数据到后台cgi
  // console.log(url)
  // console.log(img)
}


// try-catch 针对可预见情况下监控特定的错误
// 1.针对预料之外的错误
window.onerror = function (msg, url, line, row, col, error) {
  console.log({
    name: '未知错误',
    msg,  url,  row, col, error
  })
  sendError(msg,url,line)
  return true
}
// 2.针对404错误
window.addEventListener('error', (msg, url, row, col, error) => {
  console.log({
    name: '404 错误',
    img: msg.target.src,
    msg, url, row, col, error
  })
  // return true
}, true)
// 3.未捕获promise
window.addEventListener("unhandledrejection", function(e){
  // e.preventDefault()
  console.log({
    name: '未捕获promise',
    reason: e.reason,
    e
  })
  return true
})