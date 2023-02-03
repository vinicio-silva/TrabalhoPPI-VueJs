<template>
  <div class="h-100 d-flex">
    <div class="w-100">
      <div class="pa-12">
        <h1>Cadastro</h1>
        <FormCliente/>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import FormCliente from '@/components/FormCliente';
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
