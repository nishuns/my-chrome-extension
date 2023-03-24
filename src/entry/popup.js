import store from '@/store';
import { createApp } from 'vue'
import App from '../view/popup.vue'

const app = createApp(App);

app.use(store);
app.mount('#app')
