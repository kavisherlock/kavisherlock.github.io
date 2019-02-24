import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import Books from './components/Books/Books.vue';
import Work from './components/Work/WorkList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/books', name: 'Books', component: Books },
  { path: '/work', name: 'Work', component: Work },
];

export default new VueRouter({
  routes,
});
