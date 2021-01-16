import Vue from "vue";
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/ru-RU";
import VueMarkdown from "vue-markdown";

Vue.use(Element, { locale });
Vue.component("vue-markdown", VueMarkdown);
