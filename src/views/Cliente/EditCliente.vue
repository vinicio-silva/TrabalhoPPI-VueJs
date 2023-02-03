<template>
  <div class="h-100 d-flex">
    <Sidebar />
    <div class="w-100">
      <div class="d-flex justify-end px-6 pt-4" style="height: 90px;">
        <v-toolbar color="white" class="pa-2">
          <v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
          <v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile" to="/cliente/edit"></v-btn>
        </v-toolbar>
      </div>
      <div class="pa-12">
        <h1>Editar membro</h1>
        <FormCliente/>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import FormCliente from '@/components/FormCliente.vue';
export default {
  components: {
    Sidebar,
    FormCliente
},
  data() {
    return {
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
