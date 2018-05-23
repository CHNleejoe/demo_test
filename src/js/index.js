// 依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery", "load"], function($){
		$(function(){
			$(".container").hover(function(){
				// $(this).animate({opacity: 0.3}, 3000)
				console.log(this)
			}, function(){
				// $(this).animate({opacity: 1}, 3000)
				console.log(this)
			})
		});
	});
});