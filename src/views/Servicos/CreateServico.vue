<template>
  <div class="h-100 d-flex">
    <Sidebar />
    <div class="w-100">
      <div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Serviços</h2>
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
        <h1>Adicionar serviço</h1>
        <FormServico/>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import FormServico from '@/components/FormServico';
export default {
  components: {
    Sidebar,
    FormServico
  },
  data() {
    return {
      items: [
        {
          text: 'Geral',
          disabled: false,
          href: '/dashboard',
        },
        {
          text: 'Serviços',
          disabled: false,
          href: '/servicos',
        },
        {
          text: 'Adicionar serviço',
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
