define([
	'module', // we can use `module.id` for binding or something...
	'jquery',
	'jquery-ui',
	'jquery-utility',
	'renderer',
	'require'
], function(
	module,
	$,
	$utility,
	renderer,
	require
) {

	"use strict";

	return {

		bind: function(restrictTo) {
			// Set restricTo default
			restrictTo = typeof restrictTo !== 'undefined' ? restrictTo : $(document);

			$(document).ready(function() {

					$(restrictTo).filterFind('.player-wrapper').resizable({
						minHeight: 150,
						handles: {
							's': '.player-wrapper-resize-handle'
						}
					});
			

				

			});

		}
	};
});

