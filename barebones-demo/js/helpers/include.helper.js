define(function() {
	// via: http://stackoverflow.com/a/18026063/796832
	// Modified by MLM
	// usage:
	// {{#@helpers/include.helper title="Options" tabId="options"}}{{> ./main-nav-item.partial }}{{/helpers/include.helper}}
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
		var ctx = context || this;

		var mergeContext = function(obj) {
			for(var k in obj)
				ctx[k] = obj[k];
		};

		mergeContext(options.hash);


		//console.groupCollapsed("ctx: ");
		//	console.log(ctx);
		//console.groupEnd();

		return options.fn(ctx);
	};
});