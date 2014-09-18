define(['hbs!./comments/comments', 'css!./comments/comments', './comments/comments.bits'], function(tmpl, commentscss, commentsScriptBits) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			commentsScriptBits.bind(elements);
		}
	};
});