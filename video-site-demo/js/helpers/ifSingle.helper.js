define(function() {
	// Make sure that the the context given is string, int, etc. NOT a object `{...}`
	// usage: 
	// {{#@helpers/ifSingle.helper}}...{{/helpers/ifSingle.helper}}
	return function(context, options) {
		// If not an object
		if(!(context !== null && typeof context === 'object')) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	};
});