define(['jquery'], function($) {
	// via: http://stackoverflow.com/a/18026063/796832
	// Modified by MLM
	// usage:
	// {{#@helpers/include.helper title="Options" tabId="options"}}{{> ./main-nav-item.partial }}{{/helpers/include.helper}}
	// 
	// `^concat` is a special parameter that adds onto the current context. 
	// Must be in a JSON parseable format. 
	// concat if array and extend if object.
	// see for valid expressions: http://handlebarsjs.com/expressions.html
	// {{#@helpers/include.helper [^concat]='{ "item-list": ["asdf"] }'}}
	//		{{#each item-list}}
	//			<li><a href="#0-{{this}}">{{this}}</a></li>
	//		{{/each}}
	// {{/helpers/include.helper}}
	return function(context, options) {
		// If context and !options
		// This means that we have no context and only options
		if(typeof context !== "undefined" && typeof options === 'undefined')
		{
			options = context;
			context = null;
		}

		//console.log(this);
		//console.log(context);
		//console.log(options);

		// Use the context passed in, otherwise use the global
		context = context || this;

		var ctx = $.extend({}, context, options.hash);

		/* */
		var concatList = {};
		try {
			concatList = JSON.parse(options.hash['^concat'] || "");
		} catch(e) {

		}
		Object.keys(concatList || {}).forEach(function(key, index, array) {
			ctx[key] = extendConcat(concatList[key], ctx[key]);
		});

		function extendConcat(piece, whole) {
			//console.log(piece, whole);
			
			var resultant = null;
			if(whole)
			{
				if(Object.prototype.toString.call(piece) === '[object Array]') {
					resultant = whole.concat(piece);
				}
				else if(Object.prototype.toString.call(piece) === '[object Object]') {
					resultant = $.extend({}, whole, piece);
				}
				
				return resultant;
			}
			
			return piece;
		}
		/* */


		/* * /
		console.groupCollapsed("ctx: ");
			console.log(ctx);
		console.groupEnd();
		/* */

		return options.fn(ctx);
	};
});