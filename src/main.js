import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css'; 
import 'vuetify/dist/vuetify.min.js'; 

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App)

app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
