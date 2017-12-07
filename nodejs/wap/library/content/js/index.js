var options = {
  cancelSelected:true,    // 是否可以取消

}
// 评论的点赞 事件
$(".comment-laud-btn,.essay-laud-btn,.essay-collect-btn,.interact .laud").on("click",clickLaudFn);
function clickLaudFn(event){
  if(options.cancelSelected){
    $(this).toggleClass("selected");
  }else{
    $(this).addClass("selected");
  }
};

// 滑动事件
myScroll = new iScroll('wrapper',{
  vScrollbar:false
});
var scrollState = true;
var option = {
    id:"windowWrapper", 
    pullDown:function (){
        windowWrapper.refresh();
    },
    pullUp:function (){
      if(scrollState){
        scrollState = false;
        setTimeout(function() {
          scrollState = true;
          windowWrapper.refresh();
        }, 1000);
      }
    }
}



// 弹出层
var popoverOption = {
  html:true
}
$(".navbar-popover").popover(popoverOption);

// 弹出层显示前点击事件的监听
$('.navbar-popover').on('show.bs.popover', function () {
  // 设置弹窗层内容
  $(this).attr("data-content",`${(function(){
    return `<div class="remarkBtn icon-remark">备注标题</div>
            <div class="delBtn icon-del">删除</div>`;
  })()}`);
  // 显示遮罩层
  $(".popover-mask").fadeIn(100);
  // 弹出层内的选项点击事件
  $(".popover-content div").off().on("click",popoverClick);
});

// 弹出层显示后点击事件的监听
$('.navbar-popover').on('shown.bs.popover', function () {
  // 弹出层内的选项点击事件
  $(".popover-content div").off().on("click",popoverClick);
});

function hideFn(){
  $(".popover-mask").fadeOut(100);
  $('.navbar-popover').trigger("click");
};

function popoverClick(){
  console.log($(this).text());
  hideFn();
};
 
// 全部评论
$(".essay-comment-btn").on("click",function(){
  $(".window").show(0,function(){
    $(this).addClass("show");
    
    if(!windowWrapper.scroller){
      loadMore.scroll(option);
    }

  })
})

$(".navbar-close").on("click",function(){
  $(".window").removeClass("show",function(i,e){
    $(this).hide(0);
  })
})

// 回复 
$(".replyBtn").off().on("click",function(){
  $(".input-container").show(0,function(){
    $("input[type=text]").val("")[0].focus();
  });
})
