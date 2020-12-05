import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Books from './pages/Books.vue';
import Work from './pages/Work.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/books', name: 'Books', component: Books },
  { path: '/work', name: 'Work', component: Work },
];

export default new VueRouter({
  routes,
});
