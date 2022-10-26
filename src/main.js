import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import lazy from "./directives/lazy";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.directive("lazy", lazy);
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
