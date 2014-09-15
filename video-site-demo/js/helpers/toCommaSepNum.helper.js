define(function() {
	// Given a number, returns a comma delimited pretty number. ex. 1234567 -> 1,234,567
	// usage: 
	// {{@helpers/toCommaSepNum.helper view-count}} views
	return function(number) {
		return number.toLocaleString();
	};
});