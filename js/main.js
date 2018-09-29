$(document).ready( () => {

//Смещение фона в header при движении курсора 
	$('.header__bg__wrap').mousemove(function(e) {
			let moveX = (($(window).width() / 2) - e.pageX) * 0.05;
			let moveY = (($(window).height() / 2) - e.pageY) * 0.05;

				$('.header__bg__img').css('background-position-x', moveX + 'px');
				$('.header__bg__img').css('background-position-y', moveY + 'px');

		});

//Смена фона меню при пролистывании вниз
	$(window).on('scroll', () => {
		if($(window).scrollTop()) {
			$('.header').addClass('header--grey');
			$('.contacts__link').addClass('color--white');
			$('.menu__list__link').addClass('color--white');
		} else {
			$('.header').removeClass('header--grey');
			$('.contacts__link').removeClass('color--white');
			$('.menu__list__link').removeClass('color--white');
		}
	});

//Бегущие строки в header
	let typed = new Typed('#typed', {
		    strings: ['"Радость — это то, что мы испытываем в процессе приближения к цели стать самим собой."', '"Изменение происходит, тогда, когда человек становится тем, кем он на самом деле является, а не тогда, когда человек предпринимает попытки стать тем, кем он не является."'],
		    typeSpeed: 50,
		    backDelay: 1000,
		    loop: true
  		});

//Таймер обратного отсчета
	function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
	            seconds = Math.floor((t / 1000) % 60),
	            minutes = Math.floor((t / 1000 / 60) % 60),
	            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
	            days = Math.floor(t / (1000 * 60 * 60 * 24));

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

        function initializeClock(id, endtime) {
            let clock = document.getElementById(id),
	            daysSpan = clock.querySelector('.days'),
	            hoursSpan = clock.querySelector('.hours'),
	            minutesSpan = clock.querySelector('.minutes'),
	            secondsSpan = clock.querySelector('.seconds');

            function updateClock() {
                let t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            };
            updateClock();

            let timeinterval = setInterval(updateClock, 1000);
        };
		
			let end = new Date();
				end.setHours(23,59,59,999);
		
        initializeClock('clockdiv', end);
});