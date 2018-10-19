'use strict';

window.addEventListener('DOMContentLoaded', function () {

	//СМЕЩЕНИЕ ФОНА В HEADER ПРИ ДВИЖЕНИИ КУРСОРА

	var headerImgWrap = document.querySelector('.header__bg__wrap'),
	    //Контейнер фоновой картинки
	headerImg = document.querySelector('.header__bg__img'),
	    //Фоновая картинка
	width = window.screen.width,
	    //Текущая ширина экрана
	height = window.screen.height; //Текущая высота экрана

	//Обработчик события для смещения фона в header при движении курсора мыши
	headerImgWrap.addEventListener('mousemove', function (e) {

		//Задаем коэффициент смещения фона относительно контейнера картинки
		var moveX = (width / 2 - e.clientX) * 0.05,
		    moveY = (height / 2 - e.clientY) * 0.05;

		//Смещаем фоновую картинку по ширине и высоте на полученный коэффициент
		headerImg.style.backgroundPositionX = moveX + 'px';
		headerImg.style.backgroundPositionY = moveY + 'px';
	});

	//КОНТРОЛЬ ФОНА МЕНЮ (HEADER)

	var header = document.querySelector('.header'); //Фон меню сайта

	//Смена фона при прокрутке вниз и возвращении наверх
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;

	window.addEventListener('scroll', function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 70) {
			//Если прокрутка превышает 70px, фон становится светлым
			header.classList.add('header--grey');
		} else {
			//Если прокрутка меньше 70px, фон становится прежним
			header.classList.remove('header--grey');
		}
	});

	//Проверка фона после перехагрузки страницы
	function screenSizeCheck() {
		if (scrolled > 70 || width < 993) {
			header.classList.add('header--grey');
		} else {
			header.classList.remove('header--grey');
		}
	};
	screenSizeCheck();

	//ТАЙМЕР ОБРАТНОГО ОТСЧЕТА

	//Функция получения времени
	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date()),
		    seconds = Math.floor(t / 1000 % 60),
		    minutes = Math.floor(t / 1000 / 60 % 60),
		    hours = Math.floor(t / (1000 * 60 * 60) % 24),
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
		var clock = document.getElementById(id),
		    daysSpan = clock.querySelector('.days'),
		    hoursSpan = clock.querySelector('.hours'),
		    minutesSpan = clock.querySelector('.minutes'),
		    secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		};
		updateClock();

		var timeinterval = setInterval(updateClock, 1000);
	};

	var end = new Date();
	end.setHours(23, 59, 59, 999);

	initializeClock('clockdiv', end);

	//СМЕНА КАРТИНОК И ТЕКСТА В РАЗДЕЛЕ PRINCIPLES

	var pictures = document.querySelectorAll('.principles-img'),
	    //Псевдомассив картинок
	articles = document.querySelectorAll('.principles__article'),
	    //Псевдомассив статей
	articleIndex = 0,
	    //Текущая (активная) статья
	pictureIndex = 0; //Текущая (активная) картинка

	function imgTextChange() {

		//Удаление активного класса у текущей статьи
		articles[articleIndex].classList.remove('principles__article--active');
		pictures[pictureIndex].classList.remove('principles-img--active');
		articleIndex += 1; //Увеличение индекса статьи(выбор следующей статьи)
		pictureIndex += 1; //Увеличение индекса картинки(выбор следующей картинки)

		//Обнуление переменной при достижении последней статьи
		if (articleIndex == articles.length) {
			articleIndex = 0;
		}
		//Обнуление переменной при достижении последней картинки
		if (pictureIndex == pictures.length) {
			pictureIndex = 0;
		}

		//Присвоение активного класса следующей статье
		articles[articleIndex].classList.add('principles__article--active');
		pictures[pictureIndex].classList.add('principles-img--active');
	};

	var timeinterval = setInterval(imgTextChange, 5000);

	// ВЫВОД ТЕКУЩЕГО ГОДА В ФУТЕРЕ

	function getYear() {
		var date = new Date(),
		    currentYear = date.getFullYear(),
		    yearWrite = document.querySelector('.year');

		if (currentYear > 2018) {
			yearWrite.innerHTML = '2018 - ' + currentYear;
		} else {
			yearWrite.innerHTML = currentYear;
		}
	};
	getYear();

	//ОТКРЫТИЕ ФОРМЫ ОБРАТНОЙ СВЯЗИ (МОДАЛЬНОГО ОКНА)
	//И ЗАПРЕТ ПРОКРУТКИ ЭКРАНА ПРИ ОТКРЫТОЙ ФОРМЕ ОБРАТНОЙ СВЯЗИ	

	var form = document.querySelector('.contact-form__overlay'),
	    //Подложка
	formOpen = document.querySelector('.contact-form__open'),
	    //Ссылка для открытия модального окна
	formClose = document.querySelector('.contact-form__close'),
	    //Кнопка закрытия модального окна
	body = document.body; //Body

	formOpen.addEventListener('click', function () {
		form.style.display = 'block'; //Открытие модельного окна
		document.body.classList.add('no-scroll'); //Запрет на прокрутку экрана
	});

	formClose.addEventListener('click', function () {
		form.style.display = 'none'; //Закрытие модельного окна
		document.body.classList.remove('no-scroll'); //Снятие запрета на прокрутку экрана
	});

	//Закрытие модального окна подарка по клику за его пределами
	window.addEventListener('click', function (e) {
		var target = e.target;
		if (target.closest('.contact-form__wrap') && !target.closest('.contact-form__close')) {
			e.stopPropagation();
		} else if (target.closest('.contact-form__overlay')) {
			form.style.display = 'none';
			document.body.classList.remove('no-scroll'); //Снятие запрета на прокрутку экрана
		}
	});
});