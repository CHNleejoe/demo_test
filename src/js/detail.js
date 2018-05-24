require(["config"],function(){
	require(["jquery","zoom","cookie","load"],function($){
		$(function(){
			$('#zoom_img').elevateZoom({
				lensSize: 100
			});
			$("#nav1Main").css("display","none");
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
			$("#ulSlider").click(function(e){
				$(this).children("li").removeClass("curr");
				$(e.target).parent().addClass("curr");
				var tmp_img=$($(e.target).parent().context).attr("src")
				$("#zoom_img").attr("src",tmp_img);
				$("#zoom_img").data("zoomImage",tmp_img);
				$('#zoom_img').elevateZoom({
					lensSize: 100
				});
			});
			
			$("#btnAddShoppingCart").click(function(){
				// 获取最初触发事件的事件源元素
				var _num=Number($("#buycount").val()),
				_prod=$("#productName").text(),
				_img=$($("#ulSlider").children()[0]).children().attr("src"),
				_price=parseFloat($("#nowPrice").text().slice(1)),
				_id=$("#prodId").text();
				
				// 当前“加入购物车”所在父元素中所有孩子元素 

				// 获取当前选购商品的信息
				var currentProduct = {
					id:_id,
					img : _img,
					prod : _prod,
					price : _price,
					num : _num
				};
				

				// 先读取cookie中保存的购物车
				var products = $.cookie("prods");
				if (products) // 已存在购物车数据的保存
					products = JSON.parse(products);
				else // 不存在
					products = [];

				// 判断当前选购商品是否已添加过购物车
				var index = exist(currentProduct.id, products);
				if (index === -1) // 未选购
					// 将当前选购商品添加到数组中
					products.push(currentProduct);
				else // 已有选购
					// 将对应下标处元素对象的数量自增
					products[index].num=(products[index].num-1)+1+_num;
				// 使用数组来存放所有放入购物车的商品
				// [{}, {}, {}, {}]
				// 使用 cookie 保存已选购的购物车数据
				$.cookie("prods", JSON.stringify(products), {expires:7, path:"/"});
				numTotal();	
			});
				
				
			$(".jian").click(function(){
				var num=$("#buycount").val();
				if ($("#buycount").val()<=1) {
					$("#buycount").val(1);
				}else{
					$("#buycount").val(num-1);
				}
			});
			$(".jia").click(function(){
				var num=$("#buycount").val();
				if ($("#buycount").val()>=10000) {
					$("#buycount").val(10000);
				}else{
					$("#buycount").val(num-1+2);
				}
			});
			$("#buycount").blur(function(){
				var num=$("#buycount").val();
				if (Number(num)) {
					num<=1?num=1:num;
					num>=10000?num=10000:num;
				}else{
					num=1;
				}
				$("#buycount").val(num);
			});
			function exist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
						return i;
				}
		
				return -1;
			}
		});
		
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
		
	})
})


