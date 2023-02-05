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
import CreateUser from '@/views/Equipe/CreateEquipe.vue'
import EditUser from '@/views/Equipe/EditEquipe.vue'
import Cliente from '@/views/Cliente/Cliente.vue'
import CreateCliente from '@/views/Cliente/CreateCliente.vue'
import EditCliente from '@/views/Cliente/EditCliente.vue'
import Agenda from '@/views/Agenda/Agenda.vue'
import CreateAgenda from '@/views/Agenda/CreateAgenda.vue'
import EditAgenda from '@/views/Agenda/EditAgenda.vue'
import Servicos from '@/views/Servicos/Servicos.vue'
import CreateServico from '@/views/Servicos/CreateServico.vue'
import EditServico from '@/views/Servicos/EditServico.vue'
import Cargos from '@/views/Cargos/Cargos.vue'
import CreateCargo from '@/views/Cargos/CreateCargo.vue'
import EditCargo from '@/views/Cargos/EditCargo.vue'
import Configuracao from '@/views/Configuracao.vue'
import Suporte from '@/views/Suporte.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/equipe', component: Equipe },
  { path: '/equipe/create', component: CreateUser },
  { path: '/equipe/:id/edit', component: EditUser, name: 'equipe-edit', props: true },
  { path: '/cliente', component: Cliente },
  { path: '/cliente/create', component: CreateCliente },
  { path: '/cliente/:id/edit', component: EditCliente, name: 'user-edit', props: true},
  { path: '/agenda', component: Agenda },
  { path: '/agenda/create', component: CreateAgenda },
  { path: '/agenda/:id/edit', component: EditAgenda, name: 'agenda-edit', props: true },
  { path: '/servicos', component: Servicos },
  { path: '/servicos/create', component: CreateServico },
  { path: '/servicos/:id/edit', component: EditServico, name: 'servico-edit', props: true },
  { path: '/cargos', component: Cargos },
  { path: '/cargos/create', component: CreateCargo },
  { path: '/cargos/:id/edit', component: EditCargo, name: 'cargo-edit', props: true },
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
