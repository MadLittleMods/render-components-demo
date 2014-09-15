define(['hbs!modules/comments/comments', 'css!modules/comments/comments'], function(tmpl, commentcss) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods
			require(['modules/comments/comments.bits'], function(commentModule) {
				commentModule.bind(elements);
			});
		}
	};
});