require(["config"],function(){
	require(["jquery","load"],function($){
		$(function(){
			$.ajax({
				type : "get",
				url : "/mock/list.json",
				dataType : "json",
				success : function(responseData){
					// 处理数据，渲染
					responseData.res_body.list.forEach(function(product){				
						$(".tmp_prod:first").clone() // 克隆模板
									  .css({display:"block"}) // 设置以行内块展示
									  .appendTo(".ac-list")
									  .children().attr("href","detail.html")// 追加到 .box 内部
									  .children("img").attr("src", product.img) // 修改图片路径
									  .next("b").text(product.desc).attr("title", product.desc) // 商品描述
								 	  .next("p").html("￥"+product.price+"<i>￥"+product.prePrice+"</i>")// 商品价格
							 	      .next("font").text("月销"+product.sellNum+"件");// 商品编号
					});
				}
			});
			
			$.ajax({
				type : "get",
				url : "/mock/list.json",
				dataType : "json",
				success : function(responseData){
					// 处理数据，渲染
					responseData.res_body.hotprod.forEach(function(product){				
						$(".tmp_hotprod:first").clone() // 克隆模板
									  .css({display:"block"}) // 设置以行内块展示
									  .appendTo("#hotproductsList")
									  .children().attr("href","detail.html")// 追加到 .box 内部
									  .children("i").text(product.id)
									  .addClass("i"+product.id)// 修改图片路径
									  .next("img").attr("src", product.img) // 商品描述
								 	  .next("b").attr("title",product.desc).text(product.desc)
							 	      .next("em").text("￥"+product.price);// 商品编号
					});
				}
			});
		});

	})
})
