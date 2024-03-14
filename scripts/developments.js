initFunctions();

function initFunctions() {
	slider();
}

function slider() {
	const imgSrcList = [
		'./assets/media/anime/anime1.jpg',
		'./assets/media/anime/anime2.jpeg',
		'./assets/media/anime/anime3.jpg',
		'./assets/media/anime/anime4.jpg',
		'./assets/media/anime/anime5.jpg',
	];

	const arrowLeft = document.querySelector('.slider__arrow_left');
	const arrowRight = document.querySelector('.slider__arrow_right');
	const sliderImg = document.querySelector('.slider__img');

	function getCurImgIdx() {
		const curImg = sliderImg.getAttribute('src');
		const curIdx = imgSrcList.indexOf(curImg);
		return curIdx;
	}

	arrowLeft.addEventListener('click', function () {
		const idx = (getCurImgIdx() - 1 + imgSrcList.length) % imgSrcList.length;
		sliderImg.setAttribute('src', imgSrcList[idx]);
		setActiveDot();
	});

	arrowRight.addEventListener('click', function () {
		const idx = (getCurImgIdx() + 1) % imgSrcList.length;
		sliderImg.setAttribute('src', imgSrcList[idx]);
		setActiveDot();
	});

	const dotted = document.querySelector('.slider__dotted');
	imgSrcList.forEach((item, idx) => {
		const dot = document.createElement('span');
		dot.classList.add('slider__dot');
		getCurImgIdx() === idx ? dot.classList.add('slider__dot_active') : '';
		dotted.append(dot);
	});

	function setActiveDot() {
		const dotList = document.querySelectorAll('.slider__dot');
		dotList.forEach((item, idx) => {
			item.classList.remove('slider__dot_active');
			idx === getCurImgIdx() ? item.classList.add('slider__dot_active') : '';
		});
	}

	switchDot();

	function switchDot() {
		const dotList = document.querySelectorAll('.slider__dot');
		dotList.forEach((item, idx) => {
			item.addEventListener('click', function () {
				sliderImg.setAttribute('src', imgSrcList[idx]);
				dotList.forEach((item) => {
					item.classList.remove('slider__dot_active');
				});
				item.classList.add('slider__dot_active');
			});
		});
	}
}
