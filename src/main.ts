import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import PostItem from './components/PostItem.vue';

const app = createApp(App)
app.component('PostItem', PostItem);

app.use(createPinia())

app.mount('#app')
