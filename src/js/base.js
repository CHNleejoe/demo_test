define(["jquery","cookie"],function($){
	function numTotal(){
		if ($.cookie("prods")) {
			var allproducts=$.parseJSON($.cookie("prods"));
			var totalnum=0;
			allproducts.forEach(function(index){
				totalnum+=Number(index.num);	
			});
			$("#iNum").text(totalnum);
		}
	}
	numTotal()
})