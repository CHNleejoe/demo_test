require(["config"],function(){
	require(["jquery","cookie","load"],function($){
		$(function(){
			$("#user_login").click(function(){
				if(this.className=="curr"){
					return;
				}
				$("#user_login").addClass("curr");
				$("#fast_login").removeClass("curr");
				$("#user").show();
				$("#quick").hide();
				
			});
			$("#fast_login").click(function(){
				if(this.className=="curr"){
					return;
				}
				$("#fast_login").addClass("curr");
				$("#user_login").removeClass("curr");
				$("#quick").show();
				$("#user").hide();
			});
			
			$("#btnLogin").click(function(){
				var $user=$("#txtUserName").val(),
					$pass=$("#txtPass").val();
				if($.cookie("user")){
					var allUsers=$.cookie("user").split("__");
					for (var len=allUsers.length,i=0;i<len;i++) {
						if($user==$.parseJSON(allUsers[i]).phoneNo&&$pass==$.parseJSON(allUsers[i]).pass){
							console.log("succsee")
							$.cookie('login',$.parseJSON(allUsers[i]).phoneNo, { expires: 7,path:"/" });
							$("#login_user").children("#headUserName").html("hi! <a style='float:right;margin:0;padding-left:2px;' href='javascript:void(0)'>"+$.parseJSON(allUsers[i]).phoneNo+"</a>");
							$("#unlogin_user").css("display","none");
							$("#login_user").css("display","block");
							return;
						}
					}
					console.log("failed")
				}else{
					console.log("failed")
				}
			});
		});
	})
})

