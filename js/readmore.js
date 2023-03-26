/**
 * Находит все элементы с атрибутом data-text="read"
 */
function initReadMore() {
	let textBlocks = document.querySelectorAll('[data-text="read"]');
	textBlocks.forEach((elem) => addReadMore(elem));
}

/**
 * Добавляет кнопку "Читать далее" и скрывает часть текстового содержимого
 * @param {tag} elem принимает элемент с текстом
 */
function addReadMore(elem) {
	// количество символов для показа
	const limit = 200;
	let text = elem.innerHTML;

	text = text.trim();
	text = text.replace(/\t/g, '');

	if (text.length < limit) {
		return;
	}

	let visibleText = text.slice(0, 200);
	if (visibleText.lastIndexOf(' ') === limit - 1) {
		visibleText = visibleText.slice(0, -1);
	}
	let hiddenText = text.slice(visibleText.length);

	/**
	 * создает обертку span для текста
	 * @param {string}
	 * @returns tag span с текстом внутри
	 */
	function createWrap(text) {
		let wrapper = document.createElement('span');
		wrapper.innerHTML = text;
		return wrapper;
	}

	/**
	 * Создает кнопку Читать дальше
	 * @returns btn
	 */
	function createButton() {
		let btn = document.createElement('button');
		let styleBtn = `
      font: 300 16px/32px "Inter";
      color: #005dc7;
      position: relative;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      padding: 0;
      margin-left: 5px;
    `;
		btn.style.cssText = styleBtn;
		btn.textContent = 'Читать дальше';
		btn.setAttribute('onclick', 'showHiddenText(this)');

		let shadow = document.createElement('span');
		let styleShadow = `
      background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.67), rgba(255, 255, 255, 0.89), rgb(255, 255, 255));
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      width: 20%;
      transform: translateX(-100%);
      cursor: auto;
    `;
		shadow.style.cssText = styleShadow;

		btn.prepend(shadow);
		return btn;
	}

	let visibleBlock = createWrap(visibleText + '...');
	let hiddenBlock = createWrap(hiddenText);
	hiddenBlock.style.display = 'none';

	elem.innerHTML = '';
	elem.append(visibleBlock);
	elem.append(createButton());
	elem.append(hiddenBlock);
}

/**
 * Показывает скрываемое текстовое содержимое
 * @param {tag} btn принимает кнопку
 */
function showHiddenText(btn) {
	let visibleText = btn.previousElementSibling;
	visibleText.innerHTML = visibleText.innerHTML.slice(0, -3);
	let hiddenText = btn.nextElementSibling;
	btn.remove();
	hiddenText.removeAttribute('style');
}

initReadMore();
