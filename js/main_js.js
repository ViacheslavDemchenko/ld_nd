'use strict';

window.addEventListener('DOMContentLoaded', function () {

	var header = document.querySelector('.header'), 
	    width = window.screen.width;

	var scrolled = window.pageYOffset || document.documentElement.scrollTop;

	window.addEventListener('scroll', function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 70) {
			header.classList.add('header--grey');
			header.style.boxShadow = '0px 10px 33px -5px grey';
		} else {
			header.classList.remove('header--grey');
			header.style.boxShadow = 'none';
		}
	});

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

	var pictures = document.querySelectorAll('.principles__img'),
        articles = document.querySelectorAll('.principles__article'),
	    slider = document.getElementById('principles-row'),
	    articleIndex = 0,
	    pictureIndex = 0; 

	function imgTextChange() {
		articles[articleIndex].classList.remove('principles__article--active');
		pictures[pictureIndex].classList.remove('principles__img--active');
		articleIndex += 1;
		pictureIndex += 1; 

		if (articleIndex == articles.length) {
			articleIndex = 0;
		}

		if (pictureIndex == pictures.length) {
			pictureIndex = 0;
		}

		articles[articleIndex].classList.add('principles__article--active');
		pictures[pictureIndex].classList.add('principles__img--active');
	};

	var sliderInterval = setInterval(imgTextChange, 5000);

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
});