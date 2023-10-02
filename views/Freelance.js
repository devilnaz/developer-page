import Avatar from '../components/Avatar.js';
import Contacts from '../components/Contacts.js';
import InfoHeader from '../components/InfoHeader.js';
import CardInfo from '../components/CardInfo.js';

export default {
	data() {
		return {
      avatarSrc: 'avatar4.jpg',
			aboutMe: {
        title: 'Немного обо мне',
        desc: `
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
        `,
      }
		};
	},
	components: {
		Avatar,
		InfoHeader,
		Contacts,
    CardInfo,
	},
	template: /*html*/ `
  <div class="developer-page__header">
    <header class="header">
      <div class="header__avatar">
        <Avatar :src="avatarSrc" />
      </div>
      <div class="header__info">
      
      <InfoHeader/>
      </div>
    </header>
  </div>
  <main class="content">
				<div class="content__container">
        <div class="content__column content__column_small">
        <Contacts/>
      </div>
      <div class="content__column content__column_medium">
      <CardInfo :title="aboutMe.title" :desc="aboutMe.desc" />
            </div>
        </div>
        </main>
  `,
};
