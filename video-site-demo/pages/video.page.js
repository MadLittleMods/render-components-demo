define(['hbs!pages/video/video', 'css!pages/video/video'], function(tmpl, videocss) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods
			require(['pages/video/video.bits'], function(videoPage) {
				videoPage.bind(elements);
			});
		}
	};
});