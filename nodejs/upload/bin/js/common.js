var obj = {
    selectEle : (name) => {
        return document.querySelector(name);
    },
    selectAll : (name) =>{
        return document.querySelectorAll(name);
    },
    createEle : (tagName) =>{
        return document.createElement(tagName);
    }
}

var myScrollObj = {}

function scrollFn(id){
    let scrollObj;
    let name = id.substr(1);
    if(myScrollObj[name]){
        // 有
        scrollObj = myScrollObj[name];
    } else {
        // 没有
        scrollObj = new IScroll(id, {
            scrollbars: false,
            probeType: 3, 
            mouseWheel: true
        });
        myScrollObj[name] = scrollObj;
        // 懒加载
        runLazyload($(scrollObj.scroller));
    }

    console.log(myScrollObj)

    // scrollObj.refresh(true);
    
    // 上下滚动
    // runIScroll.run({
    //     el:scrollObj
    // });
    
    return scrollObj;
}
function loaded () {
    scrollFn(".wrapper");
    baguetteBox.run('.baguetteBox-1');
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, {passive:false});

// tab 监听

$(function (){
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        // console.log("激活的标签页:",activeTab);
        // console.log("前一个激活的标签页:",previousTab);
        
        var activeObj = $(".tab-content .active > div");
        
        activeWrapper = activeObj[0].id;
        activeBaguetteBoxs = activeObj[0].className;
        myScrollObj[activeWrapper] = scrollFn("#"+activeWrapper);
        // 图片预览
        baguetteBox.run('.'+activeBaguetteBoxs);

    });  

    

})
// 获取图片
// function getImgsTool(){
//     myPopup.popup({
//         value:["相机","本地图片"],
//         type:"select",
//         cancel:true
//     },function(e){
//         if(e.name == "本地图片"){
//             return $("input[type=file]").click();
//         }
//     })
// }


// 懒加载

function runLazyload(containerObj){
    $("img").lazyload({
        effect : "fadeIn",
        // threshold : 200,
        failurelimit :5,
        container:containerObj,     // 滚动对象
        // load:function(i,e){
        //     console.log(e)
        // }
    });
}