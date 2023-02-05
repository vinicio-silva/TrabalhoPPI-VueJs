<template>
  <div class="h-100 d-flex">
    <Sidebar />
    <div class="w-100">
      <div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2 class="title">Clientes</h2>
          <div class="subtitle">Veja todas as informações sobre seus clientes</div>
        </div>
        <v-toolbar color="white" class="pa-2">
          <v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
          <v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile" ></v-btn>
        </v-toolbar>
      </div>
      <div class="pa-6">
        <div class="d-flex justify-space-between pr-8">
          <div class="d-flex" style="min-width: 300px;">
            <v-text-field class="mx-2" placeholder="Buscar cliente" prepend-inner-icon="mdi-magnify" filled dense></v-text-field>
          </div>
          <div>
            <v-btn prepend-icon="mdi-plus" color="#1C10DA" class="text-white ml-4" height="40px" to="/cliente/create">
              Adicionar cliente
            </v-btn>
          </div>
        </div>
        <v-table>
          <thead>
            <tr>
              <th class="text-left f-20">
                Nome
              </th>
              <th class="text-left f-20">
                Email
              </th>
              <th class="text-left f-20">
                Data de Nascimento
              </th>
              <th class="text-left f-20">
                Telefone
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody v-for="item, index in clientes">
            <tr class="border_bottom">
              <td>{{ item.nome }}</td>
              <td>{{ item.email }}</td>
              <td>{{ formatDate(item.dtNascimento) }}</td>
              <td>{{ item.telefone }}</td>
              <td>
                <div class="d-flex justify-end">
                  <v-btn flat stacked prepend-icon="mdi-eye-outline" title="notification" value="notification"></v-btn>
                  <v-btn flat stacked title="notification" value="notification" :to="{name: 'user-edit', params: {id: item.idUser}}">
                    <v-icon color="#EFA00B">
                      mdi-text-box-edit-outline
                    </v-icon>
                  </v-btn>
                  <v-btn flat stacked title="notification" value="notification" @click="deleteCliente(item.idUser)">
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
import axios from 'axios';
import moment from 'moment';
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      clientes: []
    }
  },
  created() {
    this.getClientes();
  },
  methods: {
    getClientes() {
      axios.get('http://localhost:8080/client/find-all').then(response => {
        this.clientes = response.data;
      });
    },
    deleteCliente(id) {
      var _this = this;
      axios.delete('http://localhost:8080/client/delete?idUser=' + id).then(function (response) {
        alert(response.data);
        _this.getClientes();
      });
    },
    formatDate(data) {
      return moment(data).format('DD/MM/YYYY');
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
