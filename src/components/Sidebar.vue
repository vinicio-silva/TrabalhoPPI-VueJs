<template>
  <v-card class="h-100">
      <v-layout class="h-100">
        <v-navigation-drawer class="pa-4">
          <v-list>
            <v-btn variant="plain" class="text-h4" to="/">Agendify</v-btn>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Geral" value="geral"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Produtos & Serviços" value="produtos"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Agendamentos" value="agendamentos"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Equipe" value="equipe"></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Configurações" value="config"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Suporte" value="suporte"></v-list-item>
          </v-list>

        </v-navigation-drawer>

        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
</template>

<script setup lang="ts">
  //
</script>
