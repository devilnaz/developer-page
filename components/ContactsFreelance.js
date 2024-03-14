const ContactsFreelance = {
	data() {
		return {
			contacts: {
				subtext: 'Напишите мне, постараюсь как можно скорее ответить.',
				telegram: {
					user: 'ilnazDe',
					href: 'https://t.me/ilnazt',
					class: 'contacts__item_telegram',
				},
			},
		};
	},
	template: /*html*/ `
		<div class="card-info card-info_contacts">
			<div class="card-info__inner">
				<h4 class="card-info__title">Контакты</h4>
				<div class="card-info__content contacts">
					<ul class="contacts__list">
            <li :class="['contacts__item', contacts.telegram.class]">
              <a :href="contacts.telegram.href" class="contacts__link" target="_blank">
                {{contacts.telegram.user}}
              </a>
            </li>
					</ul>
					<div class="contacts__subtext">
						{{contacts.subtext}}
					</div>
				</div>
			</div>
		</div>
	`,
};

export default ContactsFreelance;
