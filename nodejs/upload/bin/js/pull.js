
// myScroll.on("scroll",function (){
//     console.log(this.y)
// })

function runIScroll(){
    let pullUpFn,
        pullDownFn,
        pullUpObj,
        pullDownObj,
        scrollObj,
        pullUpOffset,
        pullDownOffset,
        _default;

    this.run = (option) =>{
        console.log(option.el)
        _default = option;
        scrollObj = option.el;
        pullDownObj = option.el.scroller.children[0];
        pullUpObj = option.el.scroller.children[2];

        pullUpOffset = pullUpObj.offsetHeight;
        pullDownOffset = pullDownObj.offsetHeight
        console.log(pullDownOffset)
        scrollObj.on("scroll",scroll);
        scrollObj.on("scrollEnd",scrollEnd);
    }
    this.pullUpFn = () =>{
        // console.log(0)
    }
    function scroll(){
        // if(this.y > 45){
        //     pullUpObj.innerHTML = "加载中...";
        //     this.maxScrollY = pullDownOffset+5;
        // }else if (this.y < 45) {
        //     // pullUpEl.className = 'flip';
        //     // pullUpObj.innerHTML = '松手开始更新...';
        //     // this.maxScrollY = this.maxScrollY;

        //     // pullDownObj.classList.remove = 'flip';
        //     pullDownObj.innerHTML = "加载中...";
        //     this.maxScrollY = pullDownOffset+5;

        // }
    }
    function scrollEnd(){
        // pullUpObj.innerHTML = "END";
        // this.maxScrollY = pullDownOffset+5;
    }
}

var runIScroll = new runIScroll();
// Object.prototype.runIScroll = new runIScroll();