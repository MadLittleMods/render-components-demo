(function () {

	"use strict";

	require.config({


		paths: {
			'jquery': 'lib/jquery-1.11.1',
			'jquery-utility': 'jquery.utility',

			'handlebars': 'lib/handlebars-v1.3.0',
			'handlebars-runtime': 'lib/handlebars.runtime-v1.3.0',

			'amd-loader': 'lib/amd-loader',
			'hbs': 'lib/require-hbs',
			'css': 'lib/require-css',

			'renderer': 'renderer',
			'modules': '../modules',

		},
		shim: {
			'handlebars': {
				exports: 'Handlebars'
			},
			'handlebars-runtime': {
				exports: 'Handlebars'
			}
		}

	});

	// Load up the first module
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
			// The initial list items
			'listItems': [
				'Lorem',
				'Ipsum'
			]
		};
		renderer.append('modules/main.module', context, {}, $('body'), function(attachReturn) {
			// ...
		}, require);
	});

}());