define(['hbs!modules/video-suggestion/video-suggestion', 'css!modules/video-suggestion/video-suggestion'], function(tmpl, css) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods
			/*
			require(['modules/comments/comments.bits'], function(suggestionModule) {
				suggestionModule.bind(elements);
			});
			*/
		}
	};
});