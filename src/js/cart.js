require(["config"],function(){
	require(["jquery","cookie",'load'],function($){
		$(function(){
			var prods=$.cookie("prods");
			numTotal();
			if (prods) {
				$("#cartNull").css("display","none");
				$("#divCart").css("display","block");
				prods=$.parseJSON(prods);
				var totalpay=0;
				prods.forEach(function(index){
					$(".tmp_product:first")
						.clone()
						.css({display:""})
						.appendTo("#tbCartList")
						.children(".prodPrice").children("span").text(index.price)
						.parent().parent()
						.children(".prodName").children().children(".prodImg").attr("src",index.img)
						.next("p").children(".prodName").text(index.prod)
						.parent().parent().parent().parent()
						.children(".prodNum").children().children(".prodNum").attr("value",index.num)
						.parent().parent().parent()
						.children(".prodTotalPrice").children().text(Number(index.num)*Number(index.price));
					$(".tmp_product:last").data("prodId",index.id);
					totalpay+=Number(index.num)*Number(index.price);
				});
				$("#pay_money").text("￥"+totalpay+".00");
			}else{
				$("#cartNull").css("display","block");
				$("#divCart").css("display","none");
			}
			console.log($(".tmp_product:last").data("prodId"))
			
		
			
			
			$("#tbCartList").click(function(e){
				var _target=e.target;
				if (_target.className==="del"&&$(_target).text()=="删除") {
					var tmp_text=$(_target).parent().parent().children(".prodName").children().children("p").children("b").text();
		
					var index = exist(tmp_text, prods);
					prods.splice(index, 1);
					$.cookie("prods", JSON.stringify(prods), {expires:7, path:"/"});
					_target=_target.parentNode.parentNode;
					_target.parentNode.removeChild(_target);
					
					numTotal();
					$("#pay_money").text("￥"+payTotal()+".00");
				}
			});
			
			
			function exist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
						return i;
				}
				return -1;
			}
			
			function payTotal(){
				if ($.cookie("prods")) {
					var allproducts=$.parseJSON($.cookie("prods"));
					var totalpay=0;
					allproducts.forEach(function(index){
						totalpay+=Number(index.num)*Number(index.price);	
					});
					return totalpay;
				}
				return 0;
			}
			
			function numTotal(){
				if ($.cookie("prods")) {
					var allproducts=$.parseJSON($.cookie("prods"));
					var totalnum=0;
					allproducts.forEach(function(index){
						totalnum+=Number(index.num);	
					});
					$("#iNum").text(totalnum);
					$("#headNum").children("span").text(totalnum);
				}else{
					$("#iNum").text("0");
					$("#headNum").children("span").text("0");
				}
			}
		});


	})
})















//$(function(){
//	var prods=$.cookie("prods");
//	numTotal();
//	if (prods) {
//		$("#cartNull").css("display","none");
//		$("#divCart").css("display","block");
//		prods=$.parseJSON(prods);
//		var totalpay=0;
//		prods.forEach(function(index){
//			$(".tmp_product:first")
//				.clone()
//				.css({display:""})
//				.appendTo("#tbCartList")
//				.children(".prodPrice").children("span").text(index.price)
//				.parent().parent()
//				.children(".prodName").children().children(".prodImg").attr("src",index.img)
//				.next("p").children(".prodName").text(index.prod)
//				.parent().parent().parent().parent()
//				.children(".prodNum").children().children(".prodNum").attr("value",index.num)
//				.parent().parent().parent()
//				.children(".prodTotalPrice").children().text(Number(index.num)*Number(index.price));
//			$(".tmp_product:last").data("prodId",index.id);
//			totalpay+=Number(index.num)*Number(index.price);
//		});
//		$("#pay_money").text("￥"+totalpay+".00");
//	}else{
//		$("#cartNull").css("display","block");
//		$("#divCart").css("display","none");
//	}
//	console.log($(".tmp_product:last").data("prodId"))
//	
//
//	
//	
//	$("#tbCartList").click(function(e){
//		var _target=e.target;
//		if (_target.className==="del"&&$(_target).text()=="删除") {
//			var tmp_text=$(_target).parent().parent().children(".prodName").children().children("p").children("b").text();
//
//			var index = exist(tmp_text, prods);
//			prods.splice(index, 1);
//			$.cookie("prods", JSON.stringify(prods), {expires:7, path:"/"});
//			_target=_target.parentNode.parentNode;
//			_target.parentNode.removeChild(_target);
//			
//			
//			$("#pay_money").text("￥"+payTotal()+".00");
//		}
//	});
//	
//	
//	function exist(id, products) {
//		for (var i = 0, len = products.length; i < len; i++) {
//			if (products[i].id == id)
//				return i;
//		}
//		return -1;
//	}
//	
//	function payTotal(){
//		var allproducts=$.parseJSON($.cookie("prods"));
//		var totalpay=0;
//		allproducts.forEach(function(index){
//			totalpay+=Number(index.num)*Number(index.price);	
//		});
//		return totalpay;
//	}
//	
//	function numTotal(){
//		var allproducts=$.parseJSON($.cookie("prods"));
//		var totalnum=0;
//		allproducts.forEach(function(index){
//			totalnum+=Number(index.num);	
//		});
//		$("#iNum").text(totalnum);
//		$("#headNum").children("span").text(totalnum);
//	}
//	
//});
