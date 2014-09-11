define(['require', 'hbs!./list-item/list-item', 'css!./list-item/list-item'], function(require, tmpl, maincss) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods
			require(['./list-item/list-item.bits'], function(listmodule) {
				listmodule.bind(elements);
			});
		}
	};
});