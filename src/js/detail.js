$(function(){
	console.log($("#navDetail"))
	$("#navDetail").click(function(e){
		$(this).children("li").removeClass("curr");
		$(e.target).addClass("curr");
		if($(e.target).text()=="商品详情"){
			$("#topImgInfo").css("display","block");
			$("#ulProductPropertyInfo").css("display","none");
		}else{
			$("#topImgInfo").css("display","none");
			$("#ulProductPropertyInfo").css("display","block");
		}
	});
	$(“#btnAddShoppingCart”).click(function(){
		
	});
});
