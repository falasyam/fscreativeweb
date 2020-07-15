import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Work from '../views/Work'
import Blog from '../components/Blog'
import BlogPost from '../views/BlogPost.vue'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  },
  {
    path: '/:slug',
    name: 'page',
    component: Page
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
