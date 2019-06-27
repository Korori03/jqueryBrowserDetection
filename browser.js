/*
	jQuery Code v1.0.0  2013-05-30
	(c) 2013 Korori - korori-gaming.com
	license: http://www.opensource.org/licenses/mit-license.php
*/


/*
	Variables
*/

var jpopupStatus = 0;
var loaderStatus = 0;

/*
	Jquery Plugin Start
*/

(function($){
	
	/*
		Browser Check Plugin
	*/
	if(!$.browser){
		$.browser={
			chrome:false,
			mozilla:false,
			opera:false,
			msie:false,
			safari:false
		};
		var ua = navigator.userAgent;
		$.each($.browser,function(c,a){
			$.browser[c]=((new RegExp(c,'i').test(ua)))?true:false;
			if($.browser.mozilla && c =='mozilla'){$.browser.mozilla=((new RegExp('firefox','i').test(ua)))?true:false;};
			if($.browser.chrome && c =='safari'){$.browser.safari=false;};
		});
	};
  
  }(jQuery));
