<template>
  <div class="h-100 d-flex">
    <Sidebar />
    <div class="w-100">
      <div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Equipe</h2>
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
        <h1>Editar membro</h1>
        <FormUser :user="this.users[this.id]"/>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import FormUser from '@/components/FormUser';
export default {
  props: ['id'],
  components: {
    Sidebar,
    FormUser
  },
  data() {
    return {
      users: {
        '1' : { "nome": "Vinicio Bernardes", "email": 'viniciobernardessilva@gmail.com', "data_nascimento" : '05/27/2000', "cpf": '14494199680', "telefone": '34996786374',"cargo": ["Cabelereiro"], "atividades": ["Cabelo", "Barba"] },
        '2' : { "nome": "Felipe Cintra", "email": 'felipinho@gmail.com', "data_nascimento" : '12/25/2001', "cpf": '11111111111', "telefone": '34988063044',"cargo": ["Cabelereiro"], "atividades": ["Cabelo", "Barba", "Limpeza Facial"] },
      },
      items: [
        {
          text: 'Geral',
          disabled: false,
          href: '/dashboard',
        },
        {
          text: 'Equipe',
          disabled: false,
          href: '/equipe',
        },
        {
          text: 'Editar membro',
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
