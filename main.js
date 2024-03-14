import Home from './views/Home.js';
import Freelance from './views/Freelance.js';
import Resume from './views/Resume.js';
import Field from './views/Field.js';
import Blog from './views/Blog.js';

const routes = [
	{ path: '/', redirect: '/freelance' },
	{ path: '/freelance', component: Freelance },
	{ path: '/resume', component: Resume },
	{ path: '/field', component: Field },
	{ path: '/blog', component: Blog },
];

Vue.createApp({})
	.use(
		VueRouter.createRouter({
			history: VueRouter.createWebHashHistory(),
			routes, // short for `routes: routes`
		})
	)
	.mount('#app-developer');
