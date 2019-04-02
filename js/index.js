window.addEventListener('DOMContentLoaded', () => {

//СМЕЩЕНИЕ ФОНА В HEADER ПРИ ДВИЖЕНИИ КУРСОРА

	let headerImgWrap = document.querySelector('.header__bg__wrap'),//Контейнер фоновой картинки
		headerImg = document.querySelector('.header__bg__img'),//Фоновая картинка
		width = window.screen.width,//Текущая ширина экрана
		height = window.screen.height;//Текущая высота экрана

//Обработчик события для смещения фона в header при движении курсора мыши
	headerImgWrap.addEventListener('mousemove', (e) => {

//Задаем коэффициент смещения фона относительно контейнера картинки
		let moveX = ( (width / 2) - e.clientX) * 0.05,
			moveY = ( (height / 2) - e.clientY) * 0.05;

//Смещаем фоновую картинку по ширине и высоте на полученный коэффициент
			headerImg.style.backgroundPositionX = `${moveX}px`;
			headerImg.style.backgroundPositionY = `${moveY}px`;
	});

//КОНТРОЛЬ ФОНА МЕНЮ (HEADER)

let	header = document.querySelector('.header');//Фон меню сайта

//Смена фона при прокрутке вниз и возвращении наверх
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;

		window.addEventListener('scroll', () => {
			scrolled = window.pageYOffset || document.documentElement.scrollTop;
				if (scrolled > 70) {//Если прокрутка превышает 70px, фон становится светлым
					header.classList.add('header--grey');
					header.style.boxShadow = '0px 10px 33px -5px grey';
				} else {//Если прокрутка меньше 70px, фон становится прежним
					header.classList.remove('header--grey');
					header.style.boxShadow = 'none';
				}
		});

//Проверка фона после перехагрузки страницы
	function screenSizeCheck() {
			if (scrolled > 70 || width < 993) {
				header.classList.add('header--grey');
				header.style.boxShadow = '0px 10px 33px -5px grey';
			} else {
				header.classList.remove('header--grey');
				header.style.boxShadow = 'none';
			}	
	};
	screenSizeCheck();

//СМЕНА КАРТИНОК И ТЕКСТА В РАЗДЕЛЕ PRINCIPLES

	let pictures = document.querySelectorAll('.principles__img'),//Псевдомассив картинок
		articles = document.querySelectorAll('.principles__article'),//Псевдомассив статей
		slider = document.getElementById('principles-row'),//Контейнер картинок и текстов
		articleIndex = 0,//Текущая (активная) статья
		pictureIndex = 0;//Текущая (активная) картинка

	function imgTextChange() {
		
//Удаление активного класса у текущей статьи
		articles[articleIndex].classList.remove('principles__article--active');
		pictures[pictureIndex].classList.remove('principles__img--active');
		articleIndex += 1;//Увеличение индекса статьи(выбор следующей статьи)
		pictureIndex += 1;//Увеличение индекса картинки(выбор следующей картинки)

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
		pictures[pictureIndex].classList.add('principles__img--active');
	};

	let sliderInterval = setInterval(imgTextChange, 5000); 

// ВЫВОД ТЕКУЩЕГО ГОДА В ФУТЕРЕ

	function getYear() {
		let date = new Date(),
			currentYear = date.getFullYear(),
			yearWrite = document.querySelector('.year');

			if (currentYear > 2018) {
				yearWrite.innerHTML = `2018 - ${currentYear}`;
			} else {
				yearWrite.innerHTML = currentYear;
			}
	};
	getYear();

});