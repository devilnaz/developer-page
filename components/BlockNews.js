import CardNew from './CardNew.js';

export default {
	data() {
		return {
			news: [],
			displayedNewsCount: 2,
			newsCount: 0,
			newsPagination: 0,
			displayedNews: [],
			currentNewsPage: 1,
		};
	},
	methods: {
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
		newsCount(newCountNews) {
			const result = Math.ceil(newCountNews / this.displayedNewsCount);
			this.newsPagination = result;
		},
	},
	mounted() {
		const promiseNew = AppDatabases.getDocument('developer-bd', 'data', '66037ba2e67d1606a3cf');

		promiseNew.then((response) => {
			console.log(response);
			const data = JSON.parse(response.json);
			this.news = data.cardNews;
			this.displayedNews = data.cardNews;
			this.newsCount = data.cardNews.length;
		});
	},
	components: {
		CardNew,
	},
	template: /*html*/ `
    <h4 class="default-title">Новости</h4>
    <div class="news">
    <CardNew v-for="(cardnew, index) in displayedNews" :data="cardnew" :index="index" :displayed="displayedNewsCount"/>
    </div>
    <ul class="news-pagination" v-if="newsCount >= displayedNewsCount">
      <li class="news-pagination__num" :class="[currentNewsPage === num ? 'news-pagination__num_active' : '']" v-for="num in newsPagination" @click="clickGoToPage(num)"><span >{{num}}</span></li>
    </ul>
  `,
};
