export default {
	mounted() {
		import('/scripts/developments.js');
	},
	template: /*html*/ `
  <div class="wrap-slider">
  <div class="slider">
    <div class="slider__inner">
        <div class="slider__arrow slider__arrow_left">
          <img src="./assets/img/arrow.svg" alt="" class="slider__arrow-img"></div>
      <div class="slider__wrap-img"><img src="./assets/media/anime/anime5.jpg" alt="" class="slider__img"></div>
    
      <div class="slider__arrow slider__arrow_right">
        <img src="./assets/img/arrow.svg" alt="" class="slider__arrow-img">
      </div>
    </div>
    <div class="slider__dotted">
    </div>
  </div>
</div>
  `,
};
