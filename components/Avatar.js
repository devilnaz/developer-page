const Avatar = {
	props: ['src'],
	template: /*html*/ `
		<div class="avatar-header">
			<div class="avatar-header__inner">
				<img :src="'./assets/media/' + src" alt="фото разработчика" class="avatar-header__img" />
			</div>
		</div>
	`,
};

export default Avatar;
