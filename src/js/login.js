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
			allUsers.forEach(function(u){
				if($user==$.parseJSON(u).phoneNo&&$pass==$.parseJSON(u).pass){
					console.log("succsee")
					return;
				}
				console.log("failed")
			});
		}else{
			console.log("failed")
		}
	});
});