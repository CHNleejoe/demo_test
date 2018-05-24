/* 定义加载头部与尾部的模块 */
define(["jquery", "cookie"], function($){
		/* 加载头部 */
		$("header").load("/html/include/header.html", function(){
			/* 为搜索框绑定键盘弹起事件 */
			$(".search #txtSearch").on("keyup", function(){
				let _search = $(this).val(),
					url = `https://suggest.taobao.com/sug?code=utf-8&q=${_search}&callback=?`;
				$.getJSON(url, function(data){
					console.log(data);
					var html = "";
					data.result.forEach(function(curr){
						html += `<div class="searchLi">${curr[0]}</div>`;
					});
					$("#searchRel").html(html);
				});
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
			numTotal();
			
			function isLogin(){
				if ($.cookie("login")) {
					var login_index=$.parseJSON($.cookie("login"));
					$("#login_user").children("#headUserName").html("hi! <a style='float:right;margin:0;padding-left:2px;' href='javascript:void(0)'>"+login_index+"</a>");
					$("#unlogin_user").css("display","none");
					$("#login_user").css("display","block");
					
				}
			}
			isLogin();
		
			$("#quitLogin").click(function(){
				$.cookie('login',-1, { expires: -1,path:"/" });
				$("#unlogin_user").css("display","block");
				$("#login_user").css("display","none");
				if ($("#no_indexLogin")) {
					$("#no_indexLogin").css("display","block");
					$("#yes_indexLogin").css("display","none");
				}
			});
		});
		
		/* 加载尾部 */
		$("footer").load("/html/include/footer.html",function(){
		});
	});
