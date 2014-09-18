define(['hbs!./video/video', 'css!./video/video', './video/video.bits'], function(tmpl, videocss, videoScriptBits) {
	return {
		template: tmpl,
		attach: function(options, elements) {
			// You can do stuff here
			// even return some methods

			// Bind some stuff
			videoScriptBits.bind(elements);
		}
	};
});