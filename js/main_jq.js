$(document).ready(function() {

	var preloader = $('.loaderArea'),
	    loader = preloader.find('.loader');
	    loader.fadeOut();
	    preloader.delay(350).fadeOut('slow');

	var menuButton = $('#menu__button'),
		menuMobile = $('.menu__list'),
		menuLink = $('.menu__list__link'),
		menuMobileOpen = 'menu__list--open';


	function screenWidthCheck() {
		if (menuButton.hasClass('active')) {
	        menuButton.removeClass('active');
	    } else {
	        menuButton.addClass('active');
	    }
	};

	menuButton.on('click', function(e) {
		e.preventDefault();
		menuMobile.toggleClass(menuMobileOpen);
		screenWidthCheck();
	});

	menuLink.on('click', function() {
		menuMobile.removeClass(menuMobileOpen);
		screenWidthCheck();
	});

	$(window).resize(function() {
		var w = $(window).width();
			if (w > 768 ) {
			    menuMobile.removeAttr('style');
			    menuMobile.removeClass(menuMobileOpen);

			    if (menuButton.hasClass('active')) {
	       			menuButton.removeClass('active');
	       		}
			}
	});

  	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({highlightSelector:"nav a"
	});

	new WOW().init();
});