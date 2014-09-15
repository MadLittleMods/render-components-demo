define([
	'module', // we can use `module.id` for binding or something...
	'jquery',
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
				//$(restrictTo).filterFind('.comment')

			});

		}
	};
});
