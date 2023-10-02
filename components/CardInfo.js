const CardInfo = {
  props: ['title', 'desc'],
  template: /*html*/ `
  <div class="card-info">
  <div class="card-info__inner">
      <h4 class="card-info__title">{{title}}</h4>
      <div class="card-info__content">
        <p v-html="desc" class="card-info__text" data-text="read">
        </p>
      </div>
    </div>
  </div>
  `,
};

export default CardInfo;
