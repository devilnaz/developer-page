import Avatar from '../components/Avatar.js';
import ContactsFreelance from '../components/ContactsFreelance.js';
import InfoHeader from '../components/InfoHeader.js';
import CardInfo from '../components/CardInfo.js';
import CardPortfolio from '../components/CardPortfolio.js';
import Modal from '../components/Modal.js';
import Review from '../components/Review.js';
import InfoSite from '../components/InfoSite.js';
import CardNew from '../components/CardNew.js';

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
        `,
			},
			isOpenModal: false,
			cards: [],
			cardModal: null,
			reviews: [],
			cardsCount: 6,
			news: [],
			reviewCount: 4,
			styleMore: 'height: 0',
			portfolioBlock: this.$refs.portfolio,
			styleCard: '56.25',
			displayedNewsCount: 2,
			newsCount: 0,
			newsPagination: 0,
			displayedNews: [],
			currentNewsPage: 1,
		};
	},
	methods: {
		moreCards() {
			this.cardsCount = this.cardsCount + 3;
		},
		moreNews() {
			this.reviewCount = this.reviewCount + 4;
		},
		moreHeight() {
			this.$refs.portfolio.clientHeight;
			console.log('his.$refs.portfolio.clientHeight: ', this.$refs.portfolio.clientHeight);
		},
		updateCount(newCountCards) {
			const heightPortfolio = 100; // 100%
			const heightMore = heightPortfolio / Math.ceil((newCountCards / 3) * 2 - 1).toFixed(2);

			this.styleMore = 'height:' + heightMore + '%';
		},
		clickOpenModal() {
			this.isOpenModal = true;
			const body = document.body;
			body.style.overflow = 'hidden';
		},
		clickCloseModal() {
			this.isOpenModal = false;
			const body = document.body;
			body.style.overflow = 'auto';
		},
		clickGoToPage(num) {
			console.log('ok');
			console.log('num: ', num);
			this.currentNewsPage = num;
			const startIndex = num * this.displayedNewsCount - this.displayedNewsCount;
			const endIndex = num * this.displayedNewsCount;
			this.displayedNews = this.news.slice(startIndex, endIndex);
		},
	},
	watch: {
		cardsCount(newCountCards) {
			const heightPortfolio = 100; // 100%
			const heightMore = heightPortfolio / Math.ceil((newCountCards / 3) * 2 - 1).toFixed(2);

			this.styleMore = 'height:' + heightMore + '%';
			console.log('styleMore: ', this.styleMore);
		},
		newsCount(newCountNews) {
			const result = Math.ceil(newCountNews / this.displayedNewsCount);
			this.newsPagination = result;
		},
	},
	mounted() {
		fetch('../data/card-portfolio.json')
			.then((res) => res.json())
			.then((data) => {
				this.cards = data.cardPortfolio;
				this.cardModal = data.cardPortfolio[0];
				this.updateCount(this.cardsCount);
				// this.cardsCount = data.cardPortfolio.length;
			});

		fetch('../data/card-review.json')
			.then((res) => res.json())
			.then((data) => {
				this.reviews = data.cardReviews;
			});

		fetch('../data/card-new.json')
			.then((res) => res.json())
			.then((data) => {
				this.news = data.cardNews;
				this.displayedNews = data.cardNews;
				this.newsCount = data.cardNews.length;
			});
	},
	components: {
		Avatar,
		InfoHeader,
		ContactsFreelance,
		CardInfo,
		CardPortfolio,
		Modal,
		Review,
		InfoSite,
		CardNew,
	},
	template: /*html*/ `
  <InfoSite/>
  
  <div class="developer-page__inner">
		<div class="developer-page__header">
			<header class="header">
				<div class="header__avatar">
					<Avatar :src="avatarSrc" />
				</div>
				<div class="header__info">
					<InfoHeader />
				</div>
			</header>
		</div>
		<main class="content">
			<div class="content__container">
				<div class="content__column content__column_small">
					<ContactsFreelance />
				</div>
				<div class="content__column content__column_medium">
					<CardInfo :title="aboutMe.title" :desc="aboutMe.desc" />
				</div>
			</div>
      <div class="default-container default-delimetr">
        <h4 class="default-title">Портфолио</h4>
        <div class="portfolio" >
            <div ref="portfolioGround" class="portfolio__ground">
              <div class="portfolio__inner">
                <CardPortfolio v-for="(card, index) in cards" :index="index" :count="cardsCount" :data="card" @openModal="clickOpenModal" @setCardModal="cardModal = card" :style="styleCard" />
              </div>
              <div ref="moreElem" v-if="cards.length + 3 > cardsCount" class="more-elem" :style="styleMore">
                <div class="more-elem__ground"></div>
                <div class="more-elem__wrap-btn">
                  <button class="more-elem__btn" @click="moreCards">Показать еще</button>
                </div>
              </div>
            </div>
        </div>

      </div>
      <div class="default-container default-delimetr">
        <h4 class="default-title">Отзывы</h4>
          <div class="reviews">
          <Review v-for="(review, index) in reviews" :data="review" :index="index" :count="reviewCount" :data-key="index+1"/>
          </div>
          <div v-if="reviews.length > reviewCount" class="reviews__wrap-btn-more"><button @click="moreNews" class="reviews__btn-more">Показать еще</button></div>
      </div>
      
      <div class="default-container default-delimetr">
        <h4 class="default-title">Новости</h4>
          <div class="news">
          <CardNew v-for="(cardnew, index) in displayedNews" :data="cardnew" :index="index" :displayed="displayedNewsCount"/>
          </div>
          <ul class="news-pagination" v-if="newsCount >= displayedNewsCount">
            <li class="news-pagination__num" :class="[currentNewsPage === num ? 'news-pagination__num_active' : '']" v-for="num in newsPagination" @click="clickGoToPage(num)"><span >{{num}}</span></li>
          </ul>
      </div>
		</main>
    <Modal v-if="cardModal" :isOpenModal="isOpenModal" @closeModal="clickCloseModal" :cardModal="cardModal" />
    </div>
	`,
};
