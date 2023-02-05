<template>
	<div class="h-100 d-flex">
		<Sidebar />
		<div class="w-100">
			<div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Serviços</h2>
          <div class="subtitle">Gerencie todos os serviços oferecidos por você</div>
        </div>
				<v-toolbar color="white" class="pa-2">
					<v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
					<v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile" ></v-btn>
				</v-toolbar>
			</div>
			<div class="pa-6">
        <div class="d-flex justify-space-between pr-8">
          <div class="d-flex" style="min-width: 300px;">
            <v-text-field class="mx-2" placeholder="Buscar item" prepend-inner-icon="mdi-magnify" filled dense></v-text-field>
          </div>
          <div>
            <v-btn prepend-icon="mdi-plus" color="#1C10DA" class="text-white ml-4" height="40px" to="/servicos/create">
              Adicionar item
            </v-btn>
          </div>
        </div>
				<v-table>
					<thead>
						<tr>
							<th class="text-left f-20">
								Descrição
							</th>
              <th class="text-left f-20">
								Valor
							</th>
              <th class="text-left f-20">
								Duração (min)
							</th>
              <th>
							</th>
						</tr>
					</thead>
					<tbody v-for="item in servicos" :key="item.id">
						<tr class="border_bottom">
							<td>{{ item.descricao }}</td>
              <td>{{ item.valor }}</td>
              <td>{{ item.duracao }}</td>
              <td>
                <div class="d-flex justify-end">
                  <v-btn flat stacked prepend-icon="mdi-eye-outline" title="notification" value="notification"></v-btn>
                  <v-btn flat stacked title="notification" value="notification" :to="{name: 'servico-edit', params: {id: item.idServicos}}">
                    <v-icon color="#EFA00B">
                      mdi-text-box-edit-outline
                    </v-icon>
                  </v-btn>
                  <v-btn flat stacked title="notification" value="notification" @click="deleteServico(item.idServicos)">
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
export default {
	components: {
		Sidebar
	},
	data() {
		return {
			servicos: [],
		}
	},
  created() {
    this.getServicos();
  },
  methods: {
    getServicos() {
      axios.get('http://localhost:8080/servicos/find-all').then(response => {
        this.servicos = response.data;
      });
    },
    deleteServico(id) {
      var _this = this;
      axios.delete('http://localhost:8080/servicos/delete?idServico=' + id).then(function (response) {
        alert(response.data);
        _this.getServicos();
      });
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
