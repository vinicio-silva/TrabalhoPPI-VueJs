/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Equipe from '@/views/Equipe/Equipe.vue'
import CreateUser from '@/views/Equipe/CreateUser.vue'
import EditUser from '@/views/Equipe/EditUser.vue'
import Agenda from '@/views/Agenda.vue'
import Atividades from '@/views/Atividades.vue'
import Configuracao from '@/views/Configuracao.vue'
import Suporte from '@/views/Suporte.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/equipe', component: Equipe },
  { path: '/equipe/create', component: CreateUser },
  { path: '/equipe/:id/edit', component: EditUser, name: 'user-edit', props: true },
  { path: '/agenda', component: Agenda },
  { path: '/atividades', component: Atividades },
  { path: '/configuracao', component: Configuracao },
  { path: '/suporte', component: Suporte },
  { path: '/equipe', component: Equipe },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)


.use(router)

app.component('Datepicker', Datepicker);

registerPlugins(app)

app.mount('#app')
