import Avatar from '../components/Avatar.js';
import GluedDate from '../components/GluedDate.js';
import InfoHeader from '../components/InfoHeader.js';
import Contacts from '../components/Contacts.js';
export default {
	components: {
		Avatar,
		GluedDate,
		InfoHeader,
		Contacts,
	},
	data() {
		return {
			avatarSrc: 'avatar4.jpg',
			aboutMe: {
				title: 'Пару слов туда сюда',
				desc: 'Бодрый текст обо мне',
			},
		};
	},
	template: /*html*/ `
  
  <div class="developer-page__inner">
		<div class="developer-page__header">
			<GluedDate />
			<header class="header">
				<div class="header__avatar">
					<Avatar :src="avatarSrc" />
				</div>
				<div class="header__info">
					<InfoHeader />
				</div>
			</header>
		</div>
		<main class="content">
			<div class="content__container">
				<div class="content__column content__column_small">
					<Contacts />
				</div>
				<div class="content__column content__column_medium">
					<div class="card-info">
						<div class="card-info__inner">
							<h4 class="card-info__title">Немного обо мне</h4>
							<div class="card-info__content">
								<p class="card-info__text" data-text="read">
									Воспринимаю программирование как хобби. В свободное время, углубляюсь в изучение
									продвинутых тем по JavaScript. Нравится поэкспериментировать над нахождением
									собственных решений, по реализации конкретного компонента.
									<br /><br />
									Больше всего приносит удовольствие, когда новые полученные знания, успешно
									применяются на практике. Нацеленно создаю решения с фокусом на оптимизацию,
									лаконичным и простым для понимая кодом. Могу часами обсуждать о разработке, в
									особенности все что связано с фронтендом.
									<br /><br />
									В настоящее время активно ищу компанию с вакансией фронтенд-разработчик.
									Написанный код в нынешней компании не могу отдельно вынести для демонстрации.
									Поэтому постараюсь свои умения продемонстрировать при реализации pet-проектов.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content__container">
				<div class="content__column content__column_small">
					<div class="combined-info">
						<div class="combined-info__block">
							<div class="card-info">
								<div class="card-info__inner">
									<h4 class="card-info__title">Навыки</h4>
									<div class="card-info__content">
										<ul class="card-info__list">
											<li class="card-info__item">HTML / CSS / Sass</li>
											<li class="card-info__item">JavaScript</li>
											<li class="card-info__item">React / Redux</li>
											<li class="card-info__item">Vue / Pinia</li>
											<li class="card-info__item">Bootstrap / Primevue</li>
											<li class="card-info__item">PhotoShop / Figma</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="combined-info__block">
							<div class="card-info">
								<div class="card-info__inner">
									<h4 class="card-info__title">Обучение</h4>
									<div class="card-info__content">
										<ul class="card-info__list card-info__list_special">
											<li class="card-info__item">
												<b>Learn JavaScript</b>
												<br />
												Веб-учебник по JS
											</li>
											<li class="card-info__item">
												<b>Дока</b>
												<br />
												Документация для фронтенд-разработчиков
											</li>
											<li class="card-info__item">
												<b>MDN Web Docs</b>
												<br />
												Ресурс для разработчиков
											</li>
											<li class="card-info__item">
												<b>Хекслет</b>
												<br />
												Фронтенд-разработчик
											</li>
											<li class="card-info__item">
												<b>HTML Academy</b>
												<br />
												HTML и CSS. Профессиональная вёрстка сайтов
											</li>
											<li class="card-info__item">
												<b>HTML Academy</b>
												<br />
												HTML и CSS. Адаптивная вёрстка и автоматизация
											</li>
											<li class="card-info__item">
												<b>HTML Academy</b>
												<br />
												JavaScript. Профессиональная разработка веб-интерфейсов
											</li>
											<li class="card-info__item">
												<b>vuejs.org</b>
												<br />
												Документация по фреймворку Vue
											</li>
											<li class="card-info__item">
												<b>Tocode.ru</b>
												<br />
												Курс по Vue 3
											</li>
											<li class="card-info__item">
												<b>Владилен Минин</b>
												<br />
												JavaScript - Полное Руководство с Нуля
											</li>
										</ul>
										<p class="card-info__note">
											Сюда не включены ютуб каналы, всеразличные документации, форумы и прочие
											сервисы и сайты по теме разработки. Указал только основопалагающие источники,
											которыми пользовался часто, либо систематически из которых получал знания.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="combined-info__block combined-info__block_languages">
							<div class="card-info">
								<div class="card-info__inner">
									<h4 class="card-info__title">Языки</h4>
									<div class="card-info__content">
										<p class="card-info__text">Русский</p>
										<p class="card-info__text">English</p>
										<p class="card-info__text">Татарча</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content__column content__column_medium">
					<div class="combined-info">
						<div class="combined-info__block">
							<div class="card-info">
								<div class="card-info__inner">
									<h4 class="card-info__title">Опыт работы</h4>
									<div class="card-info__content">
										<ul class="card-info__list card-info__list_special">
											<li class="card-info__item">
												<div class="card-info__content-head">
													Июн 2013 - Сен 2013
													<br />
													<b>Дизайнер-верстальщик</b>
													<br />
													Муниципальный новостной проект г. Наб. Челны
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														За увлеченность в сфере программирования, взяли на летнюю подработку в
														it-park. Занимался верстанием элементов с подстройкой под дизайн сайта.
														Внедрял в самописный движок. Мой первый опыт работы в команде с
														методологией Канбан.
													</p>
												</div>
											</li>
											<li class="card-info__item">
												<div class="card-info__content-head">
													Дек 2020 - Авг 2021
													<br />
													<b>Верстальщик с применением JS</b>
													<br />
													Фриланс
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														Принял решение быть разработчиком. Свой путь начал с изучения Python,
														потом реализовал первый сайт на движке Django. Посчитал, что изученных
														знаний не хватает для профессиональной разработки. Выбрал область
														фронтенда и начал активно изучать современную верстку и JavaScript.
														Первый язык Python отлично подошел для понимания основ программирования
														на другом языке. Хотя странностей в JS оказалось чуть больше. Проходил
														курсы, практиковался на pet проектах, решал задачники. Параллельно
														подрабатывал на фрилансе.
													</p>
												</div>
											</li>
											<li class="card-info__item">
												<div class="card-info__content-head">
													Сен 2021 - Янв 2023
													<br />
													<b>Фронтенд-разработчик</b>
													<br />
													Клиентская база
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														Компания предоставляет CRM программу для b2b сегмента. Предоставляет
														смежные услуги и сервисы. Имеет собственный сайт.
														<br />
														В данной компании занимаюсь разработкой и внедрением нового функционала.
														Дорабатываю текущий функционал, устраняю баги и делаю рефакторинг кода.
														Ответственнен за любые изменения и манипуляции по сайту. Выполняю
														персональные фронтенд доработки для отдельных программ, по
														дополнительной услуги от клиентов.
														<br />
														Применяется Agile подход к управлению проектами. В проектах научился
														работать с методом поставленных задач, с элементами контроля, учетом
														времени и дедлайнами.
														<br />
														Мне кажется, получил огромный опыт по работе в команде и успел
														поработать фронтенд разработчиком во всех продуктах.
													</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="combined-info__block">
							<div class="card-info">
								<div class="card-info__inner">
									<h4 class="card-info__title">Портфолио</h4>
									<div class="card-info__content">
										<ul class="card-info__list card-info__list_special">
											<li class="card-info__item">
												<div class="card-info__content-head">
													<b>Тестовые стенды</b>
													<br />
													Использовано: Vue + PrimeVue + marked/zero-md + SCSS
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														Быстрое тестирование CRM программы с накатыванием веток из GitLab'а.
														<br />
														Для демонстрации убрал взаимодействие с бэкендом по api и заменил на
														json. Но в коде сохранил в виде комментарий.
													</p>
													<div class="card-info__wrapper-img">
														<img
															class="card-info__img"
															src="./assets/media/portfolio/cb-testand.png"
															alt="screen: cb-testand" />
													</div>
													<div class="card-info__group-btn">
														<a
															href="https://devilnaz.github.io/cb-testand/"
															class="card-info__btn card-info__btn_demo"
															target="_blank">
															Демонстрация
														</a>
														<a
															href="https://github.com/devilnaz/cb-testand"
															class="card-info__btn card-info__btn_code"
															target="_blank">
															Код на GitHub
														</a>
													</div>
												</div>
											</li>
											<li class="card-info__item">
												<div class="card-info__content-head">
													<b>Страница создания аккаунтов</b>
													<br />
													С элементами на JS
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														По ТЗ требовалось реализовать страницу по дизайну из Figm'ы и внедрить
														на сайт компании.
														<br /><br />
														Для слайдера выбрал легковесную библиотеку itc-slider. Счетчик "Кол-ва
														компаний" и список-аккордеон реализовал на чистом JS. Сделал
														адаптивно-резиновую верстку, под любые экраны устройств.<br />
														Как самую сложную часть, выделю интеграцию внешней формы, которая
														создавалась на стороне CRM программы. Установил Яндекс Метрику и связал
														с кодом формы. Добавил актуальную навигацию и подвал при внедрении
														страницы под движок mstl.
													</p>
													<div class="card-info__wrapper-img card-info__wrapper-img_cb-create">
														<img
															class="card-info__img"
															src="./assets/media/portfolio/cb-page-create.png"
															alt="screen: cb-page-create" />
													</div>
													<div class="card-info__group-btn">
														<a
															href="https://devilnaz.github.io/cb-page-create/"
															class="card-info__btn card-info__btn_demo"
															target="_blank">
															Демонстрация
														</a>
														<a
															href="https://github.com/devilnaz/cb-page-create"
															class="card-info__btn card-info__btn_code"
															target="_blank">
															Код на GitHub
														</a>
													</div>
												</div>
											</li>
											<li class="card-info__item">
												<div class="card-info__content-head">
													<b>Модальное окно с подтверждением телефона</b>
													<br />
													JavaScript / jQuery
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														Планировалось реализовать модальное окно, которое будет появляться по
														кнопке. Затем внутрь окна добавить блок с введением номера телефона и
														подтверждением через СМС. Личным желанием было написать на чистом JS без
														использования библиотек, но под конец, сроки подтолкнули к jquery:)<br />
														<br />
														Особенности:<br />
														1) Реализовано без дизайна<br />
														2) Разработано универсальное окно для сайта. До этого попапов не
														было.<br />
														3) В ходе реализации, переориентирован на другой конечный результат<br />
														4) Поменян input для ввода почты на телефон, с учетом нескольких
														input'ов на стр. через JS<br />
														5) Подготовлено под особенности сайта. Внедрено во все страницы.
														Доведено до рабочего состояния<br />
													</p>
													<div class="card-info__wrapper-img">
														<img
															class="card-info__img"
															src="./assets/media/portfolio/cb-modal-sms-confirmation2.png"
															alt="screen: cb-page-create" />
													</div>
													<div class="card-info__group-btn">
														<a
															href="https://devilnaz.github.io/cb-modal-sms-confirmation/"
															class="card-info__btn card-info__btn_demo"
															target="_blank">
															Демонстрация макета
														</a>
														<a
															href="https://clientbase.ru/"
															class="card-info__btn card-info__btn_demo"
															target="_blank">
															На сайте компании
														</a>
													</div>
												</div>
											</li>
											<li class="card-info__item">
												<div class="card-info__content-head">
													<b>Макет шаблонов печати CRM</b>
													<br />
												</div>
												<div class="card-info__content-body">
													<p class="card-info__text" data-text="read">
														Необходимо было создать макет CRM программы с постраничным переходом.
														Реализовать и внедрить доработки. Функционал с шаблонами печати делал
														следующее: создавал файл, куда переносились данные из таблицы CRM в
														определенном виде.<br /><br />
														Процесс реализации:<br />
														Сначала выцепил отдельные страницы программы, но столкнулся с рядом
														проблем. По памяти, пропала часть иконок в разных местах, появилась
														проблема в отображении ckeditor, происходили ошибки в js, не отрабатывал
														плагин на jquery.<br />
														Пробовал скачать страницы другими способами, но в каждом, если уходила
														одна проблема, то появлялась другая. Поэтому выбрал оптимальный вариант,
														затем устранил недочеты в местах, где планировалось добавить доработки.
														Показал список печати во всех форматах. После реализовал ряд доработок
														по внешнему виду. По памяти из ощутимых, поменял список в окне на
														скрол(перестроил данный участок, добавил иконки), добавил блок
														"Табличные значения" с кнопкой "Копировать", изменение блока "Загрузить
														файл" и т.д.
													</p>
													<div class="card-info__wrapper-img">
														<img
															class="card-info__img"
															src="./assets/media/portfolio/cb-print-templates-demo.png"
															alt="screen: cb-print-templates-demo" />
													</div>
													<div class="card-info__group-btn">
														<a
															href="https://devilnaz.github.io/print-templates-demo/"
															class="card-info__btn card-info__btn_demo"
															target="_blank">
															Демонстрация макета
														</a>
														<a
															href="https://github.com/devilnaz/print-templates-demo"
															class="card-info__btn card-info__btn_code"
															target="_blank">
															Код на GitHub
														</a>
													</div>
												</div>
											</li>
											<!-- шаблон card-info -->
											<!--
                        <li class="card-info__item">
													<div class="card-info__content-head">
														Yan 2022 - Yan 2022
														<br />
														<b>UX UI Designer</b>
														<br />
														Company Name
														<br />
													</div>
													<div class="card-info__content-body">
														<p class="card-info__text">
															The word "résumé" comes from the French word résumer meaning 'to
															summarize'. Leonardo da Vinci is credited with the first résumé,
															though his "résumé" takes the form of a letter written about 1481–1482
															to a potential employer, Ludovico Sforza.
														</p>
													</div>
												</li>
                        -->
										</ul>
									</div>
									<div class="card-info__foreword">
										<p class="card-info__text">
											В ближайшее дни, в портфолио будет добавлено:<br />
											- Приложение документации на vuepress<br />
											- Страница-конструктор для партнеров<br />
											<br />
											К сожалению, написанный код в CRM программе не могу вынести отдельно для
											демонстрации, но планирую реализовать блок со списком, где расскажу, с какими
											проблемами и задачами сталкивался, и как их решал.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
    </div>
	`,
};
