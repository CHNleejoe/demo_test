/* 定义加载头部与尾部的模块 */
require(["jquery", "cookie"], function($){
	$(function(){
		/* 加载头部 */
		$("header").load("/project/project/dist/html/include/header.html");
		/* 加载尾部 */
		$("footer").load("/project/project/dist/html/include/footer.html");//		,function(){
//			/* 为搜索框绑定键盘弹起事件 */
//			$(".search .word").on("keyup", function(){
//				let _search = $(this).val(),
//					url = `https://suggest.taobao.com/sug?code=utf-8&q=${_search}&callback=?`;
//				$.getJSON(url, function(data){
//					console.log(data);
//					var html = "";
//					data.result.forEach(function(curr){
//						html += `<div>${curr[0]}</div>`;
//					});
//					$(".suggest").html(html);
//				});
//			});
//
//			/* 判断 cookie 中是否有用户登录数据的保存 */
////			$.cookie.json = true;
//			// $.cookie("loginUser", "xiaoming", {path:"/"});
////			let user = $.cookie("loginUser");
////			if (user) {
////				$(".login_register").html(`
////					<a href="#">欢迎您：${user}</a>
////					<a href="#">退出</a>
////					`);
////			}
//		});

		
	});
});