// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import reset from 'reset-css';
import App from './App'
import router from './router'



Vue.use(Mint);

Vue.config.productionTip = false
import { IndexList, IndexSection } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Field } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Popup.name, Popup);
Vue.component(Field.name, Field);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
