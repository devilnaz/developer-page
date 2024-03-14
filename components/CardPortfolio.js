export default {
	props: ['data', 'index', 'count', 'style'],
	setup() {
		function onOpenModal(elem) {
			console.log(elem);
		}
		return {
			onOpenModal,
		};
	},
	template: /*html*/ `
  <div class="card-portfolio" v-if="index < count - 3" @click="$emit('openModal'), onOpenModal(this), $emit('setCardModal')" :style="{paddingTop: style + '%'}">
    <div class="card-portfolio__inner">
      <div class="card-portfolio__wrap-img">
        <img :src="'./' + data.screen.src" :style="{objectPosition: data.screen.position}" :alt="'screen' + data.id" class="card-portfolio__img">
        </div></div>
    </div>
  <div class="card-portfolio" v-else-if="index < count" @click="$emit('openModal'), onOpenModal(this), $emit('setCardModal')" :style="{paddingTop: style / 2 + '%'}">
  <div class="card-portfolio__inner">
    <div class="card-portfolio__wrap-img">
      <img :src="'./' + data.screen.src" :style="{objectPosition: data.screen.position}" :alt="'screen' + data.id" class="card-portfolio__img">
      </div></div>
  </div>
  `,
};
