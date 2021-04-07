import { createApp } from 'vue';
import App from './App.vue';
import vueVimeoPlayer from 'vue-vimeo-player';

const app = createApp(App);

app.use(vueVimeoPlayer);

app.mount('#app');
