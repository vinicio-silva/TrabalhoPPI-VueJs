<template>
  <div class="h-100 d-flex">
    <Sidebar/>
    <div class="w-100">
      <div class=" d-flex justify-end" style="height: 70px;">
      <v-toolbar color="white" class="pa-2">
        <v-btn stacked>
          Botão 1
        </v-btn>
        <v-btn stacked>
          Botão 2
        </v-btn>
        <v-btn stacked variant="flat">
          Botão 3
        </v-btn>
      </v-toolbar>
      </div>
      <div class="d-flex justify-center pt-5">
        BODY DA APLICAÇÃO
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
export default {
  components: {
  Sidebar
}
}
</script>
<style scoped>
.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}
</style>
