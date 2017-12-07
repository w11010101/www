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
function loadedScroll(){
  var scrollState = true;
  refresher.init({
    id: "windowWrapper",
    pullDownAction: function (){
      // 下拉
      windowWrapper.refresh();
    },
    pullUpAction: function (){
      // 上拉
      setTimeout(function (){
        if(scrollState){
          // scrollState = false;
          windowWrapper.refresh();
        }
      },1000);
    },
      // preventDefault:false
  });
}

// 全部评论
$(".essay-comment-btn").on("click",function(){
  $(".window").show(0,function(){
    $(this).addClass("show");
    loadedScroll();
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
