(function($){
	var m;
	$.fn.addIC=function(str){
		m = $(this);
		if( $.isArray(str) ) {
			var maxList = str.length;
			for( var i=0; i<maxList; i++ ) {
				setIC( str[i].trim() );
			}
		} else {
			var list = str.split(",");
			var maxList = list.length;
			if( maxList>0 ) {
				for( var i=0; i<maxList; i++ ) {
					setIC( list[i].trim() );
				}
			} else {
				setIC( str.trim() );
			}
		}
	}
	function setIC(str) {
		if(str.match(/^\./)) {
			m.addClass(str.substr(1));
		} else if(str.match(/^#/)) {
			m.attr("id", str.substr(1));
		}
	}
	String.prototype.jtrim = function() {
		return unescape(escape(this).replace(/^(%u3000|%20|%09)+|(%u3000|%20|%09)+$/g, ""));
	}
})(jQuery);