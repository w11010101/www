/**
 * [options description]
 * @type {Object} cancelSelected boolean [是否可以取消]
 */
var options = {
    cancelSelected: true, 
}
// 评论的点赞 事件 (绑定时间要放在 加载后)
$(".laudBtn,.essay-collect-btn").off().on("click", clickLaudFn);
function clickLaudFn(event) {
    if (options.cancelSelected) {
        $(this).toggleClass("selected");
    } else {
        $(this).addClass("selected");
    }
};

// 滑动事件 *********************************
/**
 * [loadedScroll 启动reply.html 的上下拉滑动]
 * @return {[type]}null [description]
 */
var myScroll;
function loadedScroll() {
    var scrollState = true;
    myScroll = refresher.init({
        id: "replyWrapper",
        pullDownAction: function() {
            // 下拉
            myScroll.refresh();
        },
        pullUpAction: function() {
            // 上拉
            setTimeout(function() {
                if (scrollState) {
                    // scrollState = false;
                    myScroll.refresh();
                }
            }, 5000);
        },
        // preventDefault:false
    });
}
// 滑动事件 end *********************************
// 全部评论
// 回复 
// var ua = navigator.userAgent;
// var ios = ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// alert(ua)
var inputContainer = $(".input-container");
var input = inputContainer.find("input[type=text]");
var form = inputContainer.find("form");

$("body").off().on("touchstart",".replyBtn,.essay-comment-btn", function() {
  inputShow();
});
// 发送按钮
$(".sendBtn").on("touchstart",function(){
  console.log(1);
  if ($.trim(input.val())) {
    $(".comment-list").append(html({
      person:"张三",
      content:input.val()
    }));
  }else{
    alert("回复内容不能为空！");
  }
  // 隐藏输入框
  inputHide();
});

input.blur(function(){
  console.log("blur")
})
// 隐藏输入框
function inputHide(){
  inputContainer.hide(0,function(){
    $(this).removeClass("show");
    input.val("")[0].blur();
  });
  // 重新渲染iscroll
  myScroll.refresh();
  // 滚动到底部
  myScroll.scrollTo(0,myScroll.maxScrollY);
  $(".comment-list").append(`<div style="font-size:.2rem;">myScroll.maxScrollY : ${myScroll.maxScrollY}</div>`)
}
// 显示输入框
function inputShow(){
  inputContainer.show(0,function(){
    myScroll.refresh();
    myScroll.scrollTo(0,myScroll.maxScrollY);
    input.val("")[0].focus();
  });
}
// 窗口大小改变时
// window.onresize=function() {
//   setTimeout(function(){
//     alert(0)
//     inputContainer.css("bottom",0);

//   },5000);
// };

/**
 * [html 回复内容的dom]
 * @param  {[Object]} options [是一个{}] 
 * @param  {[param]} options.preson [回复人]
 * @param  {[param]} options.header [回复头像]
 * @param  {[param]} options.content [回复内容] 
 * @return {[type]}  html [返回一个回复容器li]
 */
function html(options){
  return `<li>
            <div class="comment-box">
              <h3>
                <img src="../content/images/head-3.png" alt="">
                <em>${options.person}</em>
                <i class="comment-laud-btn laudBtn icon-laud">16</i>
              </h3>
              <p>${options.content}</p>
              <div><em>刚刚·<a class="replyBtn">回复</a></em></div>
            </div>
          </li>`;
} 
