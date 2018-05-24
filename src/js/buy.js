require(["config"],function(){
	require(["jquery","cookie","load"],function($){
		
		$(function(){
			var prods=$.cookie("prods");
			if (prods) {
				$("#cartNull").css("display","none");
				$("#divCart").css("display","block");
				prods=$.parseJSON(prods)
				var totalpay=0;
				prods.forEach(function(index){
					$(".tmp_product:first")
						.clone()
						.css({display:""})
						.appendTo("#ulGoodsList")
						.children(".prodPrice").children("b").text("￥"+index.price)
						.parent().parent()
						.children("a").children(".prodImg").attr("src",index.img)
						.next("b").text(index.prod)
						.parent().parent()
						.children(".prodNum").text("x"+index.num)
						.parent()
						.children(".prodTotalPrice").text("￥"+Number(index.num)*Number(index.price));
					totalpay+=Number(index.num)*Number(index.price);
					$(".tmp_product:last").data("prodId",index.id);
				});
				$("#spcost_money").text("商品总金额：￥"+totalpay+".00");
				$("#b_pay_money").text("￥"+totalpay+".00");
			}
			
			$("#addAddress").click(function(){
				$(".zheban").css("display","block");
				$(".cont").css("display","block");
			});
			$("#addAddressClose").click(function(){
				$(".zheban").css("display","none");
				$(".cont").css("display","none");
			});
			
			$("#quan").click(function(e){
				if (e.target.src) {
					$(this).children("p").children("a").removeClass("curr");
					$(e.target).parent().addClass("curr")
				}
			})
			
		});
	})
})















//$(function(){
//	var prods=$.cookie("prods");
//	if (prods) {
//		$("#cartNull").css("display","none");
//		$("#divCart").css("display","block");
//		prods=$.parseJSON(prods)
//		var totalpay=0;
//		prods.forEach(function(index){
//			$(".tmp_product:first")
//				.clone()
//				.css({display:""})
//				.appendTo("#ulGoodsList")
//				.children(".prodPrice").children("b").text("￥"+index.price)
//				.parent().parent()
//				.children("a").children(".prodImg").attr("src",index.img)
//				.next("b").text(index.prod)
//				.parent().parent()
//				.children(".prodNum").text("x"+index.num)
//				.parent()
//				.children(".prodTotalPrice").text("￥"+Number(index.num)*Number(index.price));
//			totalpay+=Number(index.num)*Number(index.price);
//			$(".tmp_product:last").data("prodId",index.id);
//		});
//		$("#spcost_money").text("商品总金额：￥"+totalpay+".00");
//		$("#b_pay_money").text("￥"+totalpay+".00");
//	}
//	
//	$("#addAddress").click(function(){
//		$(".zheban").css("display","block");
//		$(".cont").css("display","block");
//	});
//	$("#addAddressClose").click(function(){
//		$(".zheban").css("display","none");
//		$(".cont").css("display","none");
//	});
//	
//	$("#quan").click(function(e){
//		if (e.target.src) {
//			$(this).children("p").children("a").removeClass("curr");
//			$(e.target).parent().addClass("curr")
//		}
//	})
//	
//});
