define([
	'module',
	'renderer',
	'require',
	'jquery',
	'handlebars'
], function(
	module,
	renderer,
	require,
	$,
	Handlebars
) {

	// usage:
	// {{@helpers/renderer.helper module="./modules/list-item.module" }}
	return function(options) {

		var context = this;

		var moduleName = options.hash.module;
		
		//console.log(options);
		//console.log(context);

		// Just try to get a random number to use as the class name
		var scriptClass = new Date().getUTCMilliseconds() + Math.round(Math.random()*1000000000);
		return new Handlebars.SafeString(
			"<script type=\"text/javascript\" class=\"" + scriptClass + "\">" +
				"require(['require', 'renderer', 'jquery'], function(require, renderer, $) {" +
					"var $scriptElement = $('." + scriptClass + "');" +
					"renderer.before('" + moduleName + "', " + JSON.stringify(context) + ", {}, $scriptElement, function(attachReturn) {" +
						"$scriptElement.remove();" +
					"}, require);" +
				"});" +
			"</script>"
		);
	};
});