export default {
	props: ['data', 'index', 'count'],
	template: /*html*/ `
  <div class="review" v-if="index < count">
  <div class="review__inner">
    <div class="review__column">
      <div class="review__wrap-avatar"><img :src="data.avatar.src" alt="" class="review__avatar"></div>
    </div>
    <div class="review__column">
      <div class="review__name">{{data.name}}</div>
      <div class="review__service">{{data.service}}</div>
      <div class="review__text">{{data.text}}</div>
    </div>
  </div>
  </div>
  `,
};
