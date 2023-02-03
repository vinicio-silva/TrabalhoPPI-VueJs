<template>
  <div class="h-100 d-flex">
    <Sidebar />
    <div class="w-100">
      <div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2 class="title">Equipe</h2>
          <div class="subtitle">Veja todas as informações sobre sua equipe</div>
        </div>
        <v-toolbar color="white" class="pa-2">
          <v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
          <v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile" to="/cliente/edit"></v-btn>
        </v-toolbar>
      </div>
      <div class="pa-6">
        <div class="d-flex justify-space-between pr-8">
          <div class="d-flex" style="min-width: 300px;">
            <v-text-field class="mx-2" placeholder="Buscar colaborador" prepend-inner-icon="mdi-magnify" filled dense></v-text-field>
          </div>
          <div>
            <v-btn prepend-icon="mdi-plus" color="#1C10DA" class="text-white ml-4" height="40px" to="/equipe/create">
              Adicionar membro
            </v-btn>
          </div>
        </div>
        <v-table>
          <thead>
            <tr>
              <th class="text-left f-20">
                ID
              </th>
              <th class="text-left f-20">
                Nome
              </th>
              <th class="text-left f-20">
                Cargo
              </th>
              <th class="text-left f-20">
                Serviços
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody v-for="item, index in users">
            <tr class="border_bottom">
              <td>{{ index }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.cargo }}</td>
              <td>
                <div class="d-flex flex-row">
                  <div class="pr-2" v-for="servico in item.servicos">{{ servico }};</div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-end">
                  <v-btn flat stacked prepend-icon="mdi-eye-outline" title="notification" value="notification"></v-btn>
                  <v-btn flat stacked title="notification" value="notification" :to="{name: 'user-edit', params: {id: index}}">
                    <v-icon color="#EFA00B">
                      mdi-text-box-edit-outline
                    </v-icon>
                  </v-btn>
                  <v-btn flat stacked title="notification" value="notification">
                    <v-icon color="#CE2D4F">
                      mdi-trash-can-outline
                    </v-icon>
                  </v-btn>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      users: {
        '1' : { "nome": "Vinicio Bernardes", "cargo": "Cabelereiro", "servicos": ["Cabelo", "Barba"] },
        '2' : { "nome": "Felipe Cintra", "cargo": "Cabelereiro", "servicos": ["Cabelo", "Barba", "Sombrancelha"] },
      },
    }
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

tr.border_bottom td {
  border-bottom: 1px solid #E0E0E0;
}
</style>
