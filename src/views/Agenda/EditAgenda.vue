<template>
  <div class="h-100 d-flex">
    <Sidebar />
    <div class="w-100">
      <div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Agendamentos</h2>
          <v-breadcrumbs class="px-0" :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-toolbar color="white" class="pa-2">
          <v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
          <v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile"></v-btn>
        </v-toolbar>
      </div>
      <div class="pa-12">
        <h1>Editar agenda</h1>
        <FormAgenda :agenda="this.agenda[this.id]"/>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import FormAgenda from '@/components/FormAgenda';
export default {
  props: ['id'],
  components: {
    Sidebar,
    FormAgenda
  },
  data() {
    return {
      agenda: {
        '1' : { "cliente": "Vinicio Bernardes", "servicos": ["Cabelo", "Barba"], "valor": "R$ 60", "data": "12/12/2022 19:30:00", "profissional": "Dimitri Marco" },
        '2' : { "cliente": "Felipe Cintra",  "servicos": ["Cabelo", "Barba", "Sombrancelha"], "valor": "R$ 85", "data": "12/12/2022 19:30:00", "profissional": "Michael Rusbe" },
      },
      items: [
        {
          text: 'Geral',
          disabled: false,
          href: '/dashboard',
        },
        {
          text: 'Agendamentos',
          disabled: false,
          href: '/agenda',
        },
        {
          text: 'Editar agendamento',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
      ],
    }
  },
}
</script>
<style scoped>
.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

tr.border_bottom td {
  border-bottom: 1px solid #E0E0E0;
}
</style>
