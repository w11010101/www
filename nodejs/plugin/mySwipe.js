// 滑动手势判断效果
var Swipe = function(element,option){
  this.ele = element;
  this.defaults = {
    swipeUp : function(){
      console.log("swipeUp");
    },
    swipeDown : function(){
      console.log("swipeDown");
    },
    swipeLeft : function(){
      console.log("swipeLeft");
    },
    swipeRight : function(){
      console.log("swipeRight");
    },
    noResponse : function(){
      console.log("noResponse");
    }
  }
  this.options = $.extend({},this.defaults,option);
}
Swipe.prototype = {
  swipe:function(){
    var objs = this;
    var startX, startY, endX, endY;
    return this.ele.on("touchstart", function (e) {
      startY = e.changedTouches[0].pageY;
      startX = e.changedTouches[0].pageX;
    }).on("touchmove", function (e) {
      endY = e.changedTouches[0].pageY;
      endX = e.changedTouches[0].pageX;
    }).on("touchend", function (e) {
      endY = e.changedTouches[0].pageY;
      endX = e.changedTouches[0].pageX;
      var Y = endY - startY;
      var X = endX - startX;
      console.log(Y);
      // if (X == 0) {
      //   // 点击无效果
      //   objs.options.noResponse();
      // } else if (Y > 0 && Math.abs(Y) > 0) {
      //   // 向右
      //   objs.options.swipeRight();
      // } else if (Y < 0 && Math.abs(Y) > 0) {
      //   // 向左
      //   objs.options.swipeLeft();
      // }
      if (Y == 0) {
        // 点击无效果
        objs.options.noResponse();
      } else if (Y > 0 && Math.abs(Y) > 10) {
        // 向下
        objs.options.swipeDown();
      } else if (Y < 0 && Math.abs(Y) > 10) {
        // 向上
        objs.options.swipeUp();
      }
    })
  }
}
$.fn.swipe = function(option){
  var mySwipe = new Swipe(this,option);
  return mySwipe.swipe();
}
$(window).swipe();
