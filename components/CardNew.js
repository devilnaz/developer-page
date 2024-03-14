export default {
	props: ['data', 'displayed', 'index'],
	template: /*html*/ `
  <div class="card-new" v-if="index < displayed">
    <div class="card-new__title">{{data.title}}</div>
    <div class="card-new__date">{{data.date}}</div>
    <p class="card-new__desc" v-html="data.desc"></p>
  </div>
  `,
};
