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
				
				$(restrictTo).filterFind('.comment-form').on('submit', function(e) {
					e.preventDefault();

					var context = {
						'name': $(this).find('.js-name-input').val(),
						'message': $(this).find('.js-message-input').val(),
						'avatar-src': 'https://secure.gravatar.com/avatar/' + Math.ceil(Math.random()*1000000) + '?s=64&d=identicon', // Random thumbnail
					};
					if(context.name.length > 0 && context.message.length > 0)
					{
						renderer.append('./modules/comment.module', context, {}, $(restrictTo).filterFind('.comment-list'), function(attachReturn) {
							// ...
						}, require);
					}
				});

			});

		}
	};
});

