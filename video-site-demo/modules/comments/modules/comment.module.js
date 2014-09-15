define(['require', 'hbs!./comment/comment', 'css!./comment/comment'], function(require, tmpl, commentcss) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods
			require(['./comment/comment.bits'], function(commentModule) {
				commentModule.bind(elements);
			});
		}
	};
});