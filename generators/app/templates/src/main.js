import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// element安装
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// iview安装
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
