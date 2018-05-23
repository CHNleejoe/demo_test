require.config({
	baseUrl : "/",
	paths : {
		jquery : "/project/project/dist/lib/jquery/jquery-1.12.4.min",
		artTemplate : "/project/project/dist/lib/artTemplate/template-web",
		cookie : "/project/project/dist/lib/jquery-plugins/jquery.cookie",
		fly : "/project/project/dist/lib/jquery-plugins/jquery.fly.min",
		zoom : "/project/project/dist/lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
		load : "/project/project/dist/js/loadHeadAndFooter"
	},
	shim : {
		fly : {
			deps : ["jquery"]
		},
		zoom : {
			deps : ["jquery"]
		}
	}
});