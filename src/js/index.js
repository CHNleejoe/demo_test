// 依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery", "xmcarousel","base","load"], function($,carousel){
		$(function(){
			$("#index_lunbo").carousel({
				imgs : [
					{src:"img/lunbo1.jpg", href:"html/detail.html"},
					{src:"img/lunbo2.jpg", href:"html/detail.html"},
					{src:"img/lunbo3.jpg", href:"html/detail.html"},
				],
				width: 714,
				height: 382,
				duration : 5000,
				addPrevNextBtn: true
			});
			
			$("#lunboF1").carousel({
				imgs : [
					{src:"img/388eebf43255453b8c3ab833ba8097a4.jpg", href:"html/detail.html"}
				],
				width: 580,
				height: 310,
				duration : 5000,
				addPrevNextBtn: true
			});
			
			$("#lunboF2").carousel({
				imgs : [
					{src:"img/e2abf82b33a94e59af2a1c4e1436caa6.jpg", href:"html/detail.html"}
				],
				width: 580,
				height: 310,
				duration : 5000,
				addPrevNextBtn: true
			});
			
			$("#lunboF3").carousel({
				imgs : [
					{src:"img/7f116d7367ff48be8bc837763a064bab.jpg", href:"html/detail.html"},
					{src:"img/931a58427aac4323a19fcf9c0c3580a9.jpg", href:"html/detail.html"}
				],
				width: 580,
				height: 310,
				duration : 5000,
				addPrevNextBtn: true
			});
			
			$("#lunboF4").carousel({
				imgs : [
					{src:"img/e4d7f397307343d28cfd08a2a22fb04b.jpg", href:"html/detail.html"}
				],
				width: 580,
				height: 310,
				duration : 5000,
				addPrevNextBtn: true
			});
			
			(function(){
				var	len = $(".list3Li").length, // 图片张数
						liWidth = 1180, // 每个图片盒子宽度
						currentIndex = 1, // 当前图片索引
						nextIndex = 2;// 即将显示图片的索引
				var	isAnimated = false; // 标记是否正在执行运动动画效果, false:未执行  true:执行
				$(".list3Li:first").before($(".list3Li:last").clone());
				$(".list3Li:eq(1)").clone().appendTo("#list3");
				len += 2;
				$("#list3").css("width", liWidth * len + "px")
				$("#list3").css("left",-liWidth + "px")
				function move(){
					isAnimated = true;
					var _left = -1 * nextIndex * liWidth;
					$("#list3").animate( {left : _left}, 200, function(){
						if (currentIndex === len - 1) { // 最后
							currentIndex = 1;
							nextIndex = 2;
							$("#list3").css("left",-liWidth + "px");
						} else if (currentIndex === 0) { // 最前
							currentIndex = len - 2;
							nextIndex = len - 1;
							$("#list3").css("left",-1 * (len - 2) * liWidth + "px");
						}
						isAnimated = false;
					});
					currentIndex = nextIndex;
					nextIndex++;
				}
				$(".list3prev").click(function(){
					nextIndex = currentIndex - 1;
					move();
				});
				$(".list3next").click(function(){
					if (!isAnimated)
						move();
				});
			})()
			
			
			
		
				var	_len = $(".listLikeLi").length, // 图片张数
						_liWidth = 1180, // 每个图片盒子宽度
						_currentIndex = 1, // 当前图片索引
						_nextIndex = 2;// 即将显示图片的索引
				var	_isAnimated = false; // 标记是否正在执行运动动画效果, false:未执行  true:执行
				$(".listLikeLi:first").before($(".listLikeLi:last").clone());
				$(".listLikeLi:eq(1)").clone().appendTo("#listLike");
				_len += 2;
				$("#listLike").css("width", _liWidth * _len + "px")
				$("#listLike").css("left",-_liWidth + "px")
				function Likemove(){
					_isAnimated = true;
					var _Likeleft = -1 * _nextIndex * _liWidth;
					$("#listLike").animate( {left : _Likeleft}, 200, function(){
						if (_currentIndex === _len - 1) { // 最后
							_currentIndex = 1;
							_nextIndex = 2;
							$("#listLike").css("left",-_liWidth + "px");
						} else if (_currentIndex === 0) { // 最前
							_currentIndex = _len - 2;
							_nextIndex = _len - 1;
							$("#listLike").css("left",-1 * (_len - 2) * _liWidth + "px");
						}
						_isAnimated = false;
					});
					_currentIndex = _nextIndex;
					_nextIndex++;
				}
				$(".listLikeprev").click(function(){
					_nextIndex = _currentIndex - 1;
					Likemove();
				});
				$(".listLikenext").click(function(){
					if (!_isAnimated)
						Likemove();
				});
				
		});
	});
});