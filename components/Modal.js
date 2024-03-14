export default {
	props: ['isOpenModal', 'cardModal'],
	setup() {
		// console.log(props[1]);
	},
	template: /*html*/ `
  <div class="modal" v-show="isOpenModal">
    <div class="modal__ground" >
        <div class="modal__wrap-window" @click.self="$emit('closeModal')">
          <div class="modal__window">
            <div class="modal__window-inner">
              <button class="modal__btn-close" @click="$emit('closeModal')">
              <svg class="modal__btn-close-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
              </button>
                <div class="modal__content">
                  <div class="full-card-portfolio">
                    <div class="full-card-portfolio__title">
                    {{ cardModal.title }}
                    </div>
                    <div class="full-card-portfolio__box">
                      <div class="full-card-portfolio__desc" 
                      v-html="cardModal.desc"></div>
                    </div><div class="full-card-portfolio__box">
                    <div class="full-card-portfolio__panel">
                    <a v-if="cardModal.btns.demo" :href="cardModal.btns.demo" class="card-info__btn card-info__btn_demo" target="_blank">Живое демо</a>
                      <a v-if="cardModal.btns.code" :href="cardModal.btns.code" class="card-info__btn card-info__btn_code" target="_blank">Показать код</a>
                      <!--<button>Открыть скриншот</button>-->
                    </div>
                  </div>
                   <div class="full-card-portfolio__box"><img :src="'..' + cardModal.screen.src" :alt="'portfolio screen' + cardModal.id" class="full-card-portfolio__screen"></div>
                    
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  `,
};
