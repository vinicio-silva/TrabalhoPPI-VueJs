<template>
  <v-card class="h-100">
      <v-layout class="h-100">
        <v-navigation-drawer class="pa-4">
          <v-list>
            <v-btn variant="plain" class="text-h4 font-weight-bold brand-color" to="/">Agendify</v-btn>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-list-box-outline" title="Geral" value="geral" to="/dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-pencil-ruler" title="Produtos & Serviços" value="produtos" to="/atividades"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-month-outline" title="Agendamentos" value="agendamentos" to="/agenda"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group" title="Equipe" value="equipe" to="/equipe"></v-list-item>
          </v-list>

          <v-divider class="my-3"></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-cog-outline" title="Configurações" value="config" to="/configuracao"></v-list-item>
            <v-list-item prepend-icon="mdi-help-circle-outline" title="Suporte" value="suporte" to="/suporte"></v-list-item>
          </v-list>

        </v-navigation-drawer>

        <v-main></v-main>
      </v-layout>
    </v-card>
</template>

<script setup lang="ts">
  //
</script>

<style scoped>
.brand-color {
  color: #1C10DA;
}
</style>
