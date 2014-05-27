(function ($, win, Modernizr, nav, doc) {

	$.fn.headerToFixed = function (options) {

		var defaults = {
			speed : 0,
			windowWidth : $(win).width(),
			scrollTop : $(win).scrollTop()
		}, o = $.extend({}, defaults, options), $this = $(this), $clone = $('#logo').clone(), heightHeader = $this.height();
	//alert(heightHeader);
		if (o.windowWidth > 979) {
			if (o.scrollTop > heightHeader) {
				if (!$this.hasClass('fixed')) {
					$this.slideUp(o.speed).addClass('fixed').stop(true, true).slideDown(o.speed);
				}
			} else {
				if ($this.hasClass('fixed')) {
					$this.stop(true, true).slideUp(o.speed).stop(true, true).removeClass('fixed').slideDown(o.speed);
					$('#top-wrapper').toggle();
				}
			}
		}
	};
				
	$(win).scroll(function () {
		if($(location).attr('pathname') !=  "/dealer-services" && $(location).attr('pathname') !=  "/new-inventory" && $(location).attr('pathname') !=  "/build-a-boat"){
			$('#zone-branding-wrapper').headerToFixed();
		}
			$('#top-wrapper').headerToFixed();

		
		
	});  
}(jQuery, window, Modernizr, navigator, document));