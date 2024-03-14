export default {
	data() {
		return {
			desc: `
        В настоящее время, страница фриланса дорабатывается.
      `,
		};
	},
	template: /*html*/ `
  <div class="advert">
  <div class="advert__inner">
    <img class="advert__icon" src="./assets/img/bullhorn.svg">
    <p class="advert__desc" v-html="desc">
    </p>
  </div>
  
  </div>
  `,
};
