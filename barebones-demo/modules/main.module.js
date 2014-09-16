define(['hbs!modules/main/main', 'css!modules/main/main'], function(tmpl, maincss) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods
			require(['modules/main/main.bits'], function(mainmodule) {
				mainmodule.bind(elements);
			});
		}
	};
});