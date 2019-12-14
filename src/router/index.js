import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = (name) => {
  return resolve => require([`@/components/${name}`], resolve)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'boot',
    component: _import('Welcome/Boot')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: _import('Welcome/Welcome')
  },
  {
    path: '/login',
    name: 'login',
    component: _import('Login/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: _import('Register/Register')
  },
  {
    path: '/home',
    name: 'home',
    component: _import('Home/Home'),
    redirect: '/home/message',
    children: [{
        path: 'message',
        name: 'Message',
        component: _import('Home/Message')
      },
      {
        path: 'friends',
        name: 'Friends',
        component: _import('Home/Friends')
      },
      {
        path: 'article',
        name: 'Dynamic',
        component: _import('Home/Article')
      }
    ]
  },
  {
    path:'/chat_one',
    name:'chat',
    component: _import('Chat/Chat'),
    children:[
      {
        path:':from/:to',
        name:'chatone',
        component: _import('Chat/One')
      }
    ]
  },
  {
    path: '/article/detail',
    name: 'articleDetail',
    component: _import('Home/articleDetail')
  }

]

const router = new VueRouter({
  routes
})

export default router