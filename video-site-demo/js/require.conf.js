// The following code is wrapped in this immediately invoking function
// Because the jsHint linter does not like the "use strict" tag dangling
// in the outer scope in case we concatenate a bunch of javascript together
// that is non-strict
(function () {

	"use strict";

	require.config({


		paths: {
			'jquery': 'lib/jquery-1.11.1',
			'jquery-ui': 'lib/jquery-ui-1.11.1',
			'jquery-utility': 'jquery.utility',

			'handlebars': 'lib/handlebars-v1.3.0',
			'handlebars-runtime': 'lib/handlebars.runtime-v1.3.0',

			'amd-loader': 'lib/amd-loader',
			'hbs': 'lib/require-hbs',
			'css': 'lib/require-css',

			'renderer': 'renderer',
			'modules': '../modules',
			'pages': '../pages'

		},
		shim: {
			'jquery-ui': {
				deps: [
					'jquery'
				]
			},
			'jquery-utility': {
				deps: [
					'jquery'
				]
			},

			'handlebars': {
				exports: 'Handlebars'
			},
			'handlebars-runtime': {
				exports: 'Handlebars'
			}
		}

	});

	// Load up the video page
	// This is kinda like an initialization of the application
	require([
		'require',
		'jquery',
		'renderer'
	], function(
		require,
		$,
		renderer
	) {
		// The variables we are going to pass into our template
		var context = {
		
			'video-title': "Big Buck Bunny",
			'video-description': "Big Buck Bunny (code-named Peach) is a short computer animated comedy film by the Blender Institute, part of the Blender Foundation. Like the foundation's previous film Elephants Dream, the film was made using Blender, a free software application for animation made by the same foundation. It was released as an Open Source film under Creative Commons License Attribution 3.0. - Wikipedia",
			'video-src': 'video/big_buck_bunny.webm',

			'comment-list': [
				{
					'name': "Eric",
					'message': "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
					'avatar-src': 'https://secure.gravatar.com/avatar/ac5413?s=64&d=identicon'
				},
				{
					'name': "MLM",
					'message': "Aenean commodo ligula eget dolor. Aenean massa.",
					'avatar-src': 'https://secure.gravatar.com/avatar/ab1234?s=64&d=identicon'
				},
			],

			'video-suggestion-list': [
				{
					'video-title': "Lorem Ipsum",
					'thumbnail-src': 'https://secure.gravatar.com/avatar/e1e1e1?s=64&d=identicon',
					'channel-name': "Dummy",
					'view-count': 23921685,
				},
				{
					'video-title': "Aenean massa",
					'thumbnail-src': 'https://secure.gravatar.com/avatar/aeeaaa?s=64&d=identicon',
					'channel-name': "Dummy2",
					'view-count': 2364,
				},
				{
					'video-title': "sit amet",
					'thumbnail-src': 'https://secure.gravatar.com/avatar/aeaeae?s=64&d=identicon',
					'channel-name': "Upldr",
					'view-count': 23921685,
				},
				{
					'video-title': "commodo ligula eget dolor - feat. Aenean massa",
					'thumbnail-src': 'https://secure.gravatar.com/avatar/a4a4a4?s=64&d=identicon',
					'channel-name': "Aenean massa",
					'view-count': 2364,
				},
			],
		};
		renderer.append('pages/video.page', context, {}, $('body'), function(attachReturn) {
			// ...
		}, require);
	});

}());