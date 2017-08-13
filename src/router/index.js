import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Project from'@/components/Project';
import Blog from '@/components/Blog';
import '../../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Router);
Vue.use(VueResource);
Vue.use(Vuetify);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path:'/projects',
      name: 'Project',
      component: Project
    },
    {
      path:'/blog',
      name:'Blog',
      component:Blog
    },
    {
      path:'/experience',
      name:'Experience',
      component: Experience
    }
  ],
});
