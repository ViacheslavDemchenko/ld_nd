$(document).ready(function() {

//ПРЕЛОАДЕР

	var preloader = $('.loaderArea'),
	    loader = preloader.find('.loader');
	    loader.fadeOut();
	    preloader.delay(350).fadeOut('slow');

//МОБИЛЬНОЕ МЕНЮ И ФОН МЕНЮ

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

//БЕГУЩИЕ СТРОКИ В HEADER

	var typed = new Typed('#typed', {
		    strings: ['"Радость — это то, что мы испытываем в процессе приближения к цели стать самим собой."', '"Изменение происходит, тогда, когда человек становится тем, кем он на самом деле является, а не тогда, когда человек предпринимает попытки стать тем, кем он не является."'],
		    typeSpeed: 50,
		    backDelay: 1000,
		    loop: true
  		}); 

//ПЛАВНАЯ ПРОКРУТКА ЭКРАНА

  	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({highlightSelector:"nav a"
	});

//ВАЛИДАЦИЯ ФОРМЫ ОТПРАВКИ СООБЩЕНИЯ

	$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			},

			messages: {
				name: 'Пожалуйста, введите свое имя',
				email: {
					required: 'Пожалуйста, введите свой email',
					email: 'Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой.'
				},
				message: 'Пожалуйста, введите текст сообщения'
			},

			submitHandler: function(form) {
			  ajaxFormSubmit();
			}
		});

//ФУНКЦИЯ ОТРАВКИ ЗАПРОСА НА СЕРВЕР ЧЕРЕЗ AJAX

	function ajaxFormSubmit(){
		var string = $('#contact-form').serialize();

		$.ajax({
			type: 'POST', 
			url: 'php/mail.php',
			data: string,
			
			success: function(html){
				$('#contact-form').slideUp(800);
				$('#answer').html(html);
			}
		});
		return false; 
	}; 

//АНИМАЦИЯ

	new WOW().init();
});