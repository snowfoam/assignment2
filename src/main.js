import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Button, Image, Field,NavBar,Panel,Cell,CellGroup,RadioGroup,Radio,NumberKeyboard,Notify,
  Tabbar, TabbarItem,Icon,Card,Search,List,Tab, Tabs,Popup,Sticky,PullRefresh,Uploader} from 'vant'
import VueSocketio from 'vue-socket.io';

Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://localhost:8000',
  vuex:{
    store
  }
}))
Vue.use(Button).use(Image).use(Field).use(NavBar).use(Panel).use(CellGroup).use(Cell).use(RadioGroup).use(Radio).use(NumberKeyboard ).use(Notify)
  .use(Tabbar).use(TabbarItem).use(Icon).use(Card).use(Search).use(List).use(Tab).use(Tabs).use(Popup ).use(Sticky).use(PullRefresh)
  .use(Uploader)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
