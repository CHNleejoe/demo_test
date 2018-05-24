define(["jquery","cookie"],function($){
	function numTotal(){
		if ($.cookie("prods")) {
			var allproducts=$.parseJSON($.cookie("prods"));
			var totalnum=0;
			allproducts.forEach(function(index){
				totalnum+=Number(index.num);	
			});
			console.log($("#iNum"))
			$("#iNum").text(totalnum);
		}
	}
	numTotal()
})