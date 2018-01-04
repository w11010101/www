
// var imgbase64 = ["img/demo-img.jpg","img/demo-img.jpg","img/demo-img.jpg"]
function demobar(){
	assemblingdemo(imgbase64);
	imgcssstyle();
}
// var imgbase65 = ["img/demo-img3.jpg"]

$("#ceshi_btn").click(function(){

	// assemblingdemo(imgbase65);
	// imgcssstyle();
	
})

function assemblingdemo(img){
	console.log(img)
	// $(".demo-tip span").text(lin)
}

//图片样式调整
// function imgcssstyle(){
// 	$(".imgcss").load(function(){
// 		if($(this).width()>$(this).height()){
// 			console.log("宽大于高时：宽："+$(this).width()+"高："+$(this).height()+"图片名称"+$(".imgcss").attr("src"));
// 			$(this).css("max-height","62px");
// 		}else if($(this).width()<$(this).height()){
// 			console.log("宽小于高时：宽："+$(this).width()+"高："+$(this).height()+"图片名称"+$(".imgcss").attr("src"));
// 			$(this).css("max-width","62px");
// 		}else{
// 			console.log("宽等于高时：宽："+$(this).width()+"高："+$(this).height()+"图片名称"+$(".imgcss").attr("src"));
// 			$(this).css("width","100%");
// 		}
// 	})
// }
//点击图片显示是否删除框
// function clickdelete(a){
// 	var li = a; 
// 	console.log(li)
// 	var btnArray = ['确认', '取消'];
// 	mui.confirm('确认删除该图片？', '', btnArray, function(e) {
// 		if (e.index == 0) {
// 			li.parentNode.removeChild(li);
// 			mui.swipeoutClose(li);
// 			if($("#demo-list li").length<5){
// 				//console.log("1212")
// 				$(".androiddoem-addimg").css("display","block");
// 			}
// 		} else {
// 			setTimeout(function() {
// 				mui.swipeoutClose(li);
// 			}, 0);
// 		}
// 	});
// }


