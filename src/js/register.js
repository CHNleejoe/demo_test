$(function(){
//	$.cookie('user', '{"phoneNo":"98765432112","pass":"654321"}', { expires: 7,path:"/" });
	var $txtPhoneNo="",
		$txtPicCode="",
		$txtPass=NaN,
		$txtPassConfirm="",
		$txtValidCode,
		$btnAgree;
	$("#txtPhoneNo").focus(function(){
		$("#txtPhoneNo").css("borderColor","#dc0f50");
		$("#txtPhoneNo").blur(function(){
			$txtPhoneNo=$("#txtPhoneNo").val();
			if (Number($txtPhoneNo)/10000000000>1) {
				$("#emPhoneNo").show().removeClass("e1").html("");
				$("#txtPhoneNo").css("borderColor","");
			}else{
				$("#emPhoneNo").show().addClass("e1").html("请输入11位有效手机号");
				$("#txtPhoneNo").css("borderColor","#dc0f50");
				$txtPhoneNo=0;
			}
		});
	});
	
	
	
	$("#txtPass").focus(function(){
		$("#txtPass").css("borderColor","#dc0f50");
		$("#txtPass").blur(function(){
			$txtPass=$("#txtPass").val();
			if ($txtPass.length>=6&&$txtPass.length<=16) {
				$("#emPass").show().removeClass("e1").html("").css("background","url(../img/correct_bg.png) no-repeat 0 center");
				$("#txtPass").css("borderColor","");
			}else if($txtPass.length==0){
				$("#emPass").show().removeClass("e2").addClass("e1").html("请输入密码").css("background","url(../img/error_bg.png) no-repeat 0 center");
				$("#txtPass").css("borderColor","#dc0f50");
				$txtPass=NaN;
			}else{
				$("#emPass").show().removeClass("e1").addClass("e2").html("请输入6-16位字符且不能包含空格").css("background","url(../img/error_bg.png) no-repeat 0 center");
				$("#txtPass").css("borderColor","#dc0f50");
				$txtPass=NaN;
			}
		});	
	});
	
	
	
	$("#txtPassConfirm").focus(function(){
		$("#txtPassConfirm").css("borderColor","#dc0f50");
		$("#txtPassConfirm").blur(function(){
			$txtPassConfirm=$("#txtPassConfirm").val();
			if ($txtPass===$txtPassConfirm) {
				$("#emPassConfirm").show().css("background","url(../img/correct_bg.png) no-repeat 0 center").html("");
				$("#txtPassConfirm").css("borderColor","");
			}else if($txtPassConfirm.length==0){
				$("#emPassConfirm").show().addClass("e1").html("请输入确认密码").css("background","url(../img/error_bg.png) no-repeat 0 center");
				$("#txtPassConfirm").css("borderColor","#dc0f50");
			}else{
				$("#emPassConfirm").show().addClass("e1").html("两次输入的密码不一致").css("background","url(../img/error_bg.png) no-repeat 0 center");
				$("#txtPassConfirm").css("borderColor","#dc0f50");
			}
		});
	});
	
	$("#btnPhoneRegister").click(function(){
		if ($txtPass&&$txtPhoneNo) {
			
			var str=$.cookie('user');
			if(str){
				var allUsers=$.cookie("user").split("__");
				allUsers.forEach(function(u){
					if($txtPhoneNo==$.parseJSON(u).phoneNo){
						$("#emPhoneNo").show().addClass("e1").html("该手机已被注册");
						$("#txtPhoneNo").css("borderColor","#dc0f50");
						$txtPhoneNo=0;
						return;
					}
				});
				str+="__{\"phoneNo\":\""+$txtPhoneNo+"\",\"pass\":\""+$txtPass+"\"}";
			}else{
				str="{\"phoneNo\":\""+$txtPhoneNo+"\",\"pass\":\""+$txtPass+"\"}";
			}
		$.cookie('user',str, { expires: 7,path:"/" });
		$("#txtPhoneNo").val("");
		$("#txtPass").val("");
		$("#txtPassConfirm").val("");
		$("#emPhoneNo").hide();
		$("#emPass").hide();
		$("#emPassConfirm").hide();
		}
	})
});
