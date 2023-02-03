<template>
  <v-card class="h-100 mx-auto" width="20%">
      <v-layout class="h-100 w-100">
        <v-navigation-drawer class="pa-4 w-100" permanent color="#F2F2F2">
          <v-list>
            <v-btn variant="plain" class="text-h4 font-weight-bold logo-title" to="/">Agendify</v-btn>
          </v-list>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-list-box-outline" title="Geral" value="geral" to="/dashboard" class="body"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group" title="Clientes" value="clientes" to="/cliente" class="body"></v-list-item>
            <v-list-item prepend-icon="mdi-pencil-ruler" title="Serviços" value="servicos" to="/servicos" class="body"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-month-outline" title="Agendamentos" value="agendamentos" to="/agenda" class="body"></v-list-item>
            <v-list-item prepend-icon="mdi-badge-account" title="Equipe" value="equipe" to="/equipe" class="body"></v-list-item>
            <v-list-item prepend-icon="mdi-account-card" title="Cargos" value="cargos" to="/cargos" class="body"></v-list-item>
          </v-list>

          <v-divider class="my-3"></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-cog-outline" title="Configurações" value="config" to="/configuracao" class="body"></v-list-item>
            <v-list-item prepend-icon="mdi-help-circle-outline" title="Suporte" value="suporte" to="/suporte" class="body"></v-list-item>
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
.logo-title {
  color: #1C10DA;
  background: none;
}
</style>
