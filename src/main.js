import './style.css';

import { createApp, h } from 'vue';

import AppLayout from './App.vue';

const app = createApp(AppLayout);

import { createRouter, createWebHistory } from 'vue-router';

import routes from '~pages';

const router = createRouter({
    routes,
    history: createWebHistory(),
});

app.use(router);

app.mount('#app');
