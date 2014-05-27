
(function($) {
  /**
   * @todo
   */
  Drupal.behaviors.velocityGalleryPage = {
    attach: function (context) {
      $('.block-latest-portfolio .views-field-field-portfolio-images, .view-list-portfolio .views-field-field-portfolio-images, .view-list-articles .views-field-field-image, .block-latest-from-blog .views-field-field-image, .list-article-printerest .views-field-field-image, .view-list-members .views-field-field-member-image').hover(
        function () {
	      $('.field-more-link', this).show();
		  $(this).addClass('hover');
        },
        function () {
	      $('.field-more-link', this).hide();
		  $(this).removeClass('hover');
        }
      );
    }
  };
  
  Drupal.behaviors.velocityAccordion = {
    attach: function () {
	   $('.block-accordion').accordion({
          heightStyle: 'content',
		  autoHeight: false
       });
    }
  };
  Drupal.behaviors.velocityShow = {
    attach: function () {
      $('.form-item-tid').click(function() {
        if($("input[id=edit-tid-29]").is(":checked")){
          $('#cobalt').show();
        }
        else{
          $('#cobalt').hide();
        }
        if($("input[id=edit-tid-33]").is(":checked")){
          $('#crownline').show();
        }
        else{
          $('#crownline').hide();
        }
        if($("input[id=edit-tid-31]").is(":checked")){
          $('#mastercraft').show();
        }
        else{
          $('#mastercraft').hide();
        }
        if($("input[id=edit-tid-32]").is(":checked")){
          $('#misty').show();
        }
        else{
          $('#misty').hide();
        }
        if($("input[id=edit-tid-30]").is(":checked")){
          $('#regal').show();
        }
        else{
          $('#regal').hide();
        }
      });
    }
  };

  Drupal.behaviors.velocityTabs = {
    attach: function () {
	   $('.block-tabs').tabs();
    }
  };
  Drupal.behaviors.menu = {
    attach: function () {
      $(document).ready(function () {
        $("li").click(function () {
          $('li > ul').not($(this).children("ul")).hide();
          $(this).children("ul").toggle();
        });
      });
     }
  };
  // Drupal.behaviors.used_boats = {
  //   attach: function () {
  //     var url = $('#searchResultsDetailsPhoto img:first').attr('src');
  //     var modified = url.replace(/\?.*$/, '');
  //     $('#searchResultsDetailsPhoto img:first').attr('src', modified);
  //     alert(modified);
  //   }
  // };
  Drupal.behaviors.velocityToggle = {
    attach: function () {
        $('div.toggle_area').find('div.toggle_content').hide().end();
	  
	    $('div.toggle_label').click(function() {
          $(this).next().slideToggle();
	  	  if($(this).hasClass('active')) {
	        $(this).removeClass('active');
		  } else {
	        $(this).addClass('active');
		  }
        });
    }
  };
  
  Drupal.behaviors.velocityProgressbar = {
    attach: function () {
		
				
		$('.progressbar').each(function() {
            var value = parseInt($(this).find('.value').html());
			//alert($(this).find('.value').html());
            $(this).progressbar({value: value});
        });
      
    }
  };
  
  /*
  Drupal.behaviors.velocityKnob = {
    attach: function () {
	  $('.input-knob').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#ae351d'
      });
    }
  }; */
  
  Drupal.behaviors.velocityEqualHeights = {
    attach: function (context) {
      $('body', context).once('views-row-equalheights', function () {
        $(window).bind('load', function () {
          $($('.view-list-portfolio .view-content, .view-testimonials .view-content, .block-latest-from-blog .view-content').not('.view-list-portfolio.list-portfolio-grid .view-content, .view-list-portfolio.list-portfolio-grid-text .view-content, .view-list-portfolio.list-portfolio-1-column-text .view-content, .view-list-portfolio.list-portfolio-1-column .view-content').get().reverse()).each(function () {
            var elements = $(this).children('.views-row').css('height', '');
            
            if (!Drupal.behaviors.hasOwnProperty('omegaMediaQueries') || Drupal.omega.getCurrentLayout() != 'mobile') {
              var tallest = 0;
              elements.each(function () {    
                if ($(this).height() > tallest) {
                  tallest = $(this).height();
                }
              }).each(function() {
                if ($(this).height() < tallest) {
                  $(this).css('height', tallest);
                }
              });
            }
          });
        });
      });
    }
  };
  
  Drupal.behaviors.velocityThemeColors = {
    attach: function (context) {
      $('body', context).once('block-theme-colors-showhide', function () {													   
        jQuery('.block-theme-colors .close').click(function(e){
		  e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').hide();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .open').show();
		});
		jQuery('.block-theme-colors .open').click(function(e){
          e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').show();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .close').show();
		});  
      });
    }
  };
  
  Drupal.behaviors.velocityPreloader = {
    attach: function (context) {
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})
    }
  };
})(jQuery);

