<template>
	<div class="h-100 d-flex">
		<Sidebar />
		<div class="w-100">
			<div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Produtos & Serviços</h2>
          <div class="subtitle">Gerencie todos os produtos e serviços oferecidos por você.</div>
        </div>
				<v-toolbar color="white" class="pa-2">
					<v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
					<v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile"></v-btn>
				</v-toolbar>
			</div>
			<div class="pa-6">
        <div class="d-flex justify-space-between pr-8">
          <div class="d-flex" style="min-width: 300px;">
            <v-text-field class="mx-2" placeholder="Buscar item" prepend-inner-icon="mdi-magnify" filled dense></v-text-field>
          </div>
          <div>
            <v-btn prepend-icon="mdi-plus" color="#1C10DA" class="text-white ml-4" height="40px" to="/equipe/create">
              Adicionar item
            </v-btn>
          </div>
        </div>
				<v-table>
					<thead>
						<tr>
							<th class="text-left">
								Descrição
							</th>
							<th class="text-left">
								Tipo
							</th>
              <th class="text-left">
								Valor
							</th>
              <th class="text-left">
								Estoque
							</th>
              <th class="text-left">
								Duração (min)
							</th>
              <th>
							</th>
						</tr>
					</thead>
					<tbody v-for="item in services" :key="item.id">
						<tr class="border_bottom">
							<td>{{ item.descricao }}</td>
							<td>{{ item.tipo }}</td>
              <td>{{ item.valor }}</td>
              <td>{{ item.estoque }}</td>
              <td>{{ item.duracao }}</td>
              <td>
                <div class="d-flex justify-end">
                  <v-btn flat stacked prepend-icon="mdi-eye-outline" title="notification" value="notification"></v-btn>
                  <v-btn flat stacked title="notification" value="notification">
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
			services: {
        '1' : { "descricao": "CORTE", "tipo": "Serviço", "estoque": "---", "valor":"R$ 40.00", "duracao":"30" },
        '2' : { "descricao": "BARBA", "tipo": "Serviço", "estoque": "---", "valor":"R$ 20.00", "duracao":"20"},
        '3' : { "descricao": "HAIR SPRAY", "tipo": "Produto", "estoque": "8", "valor":"R$ 35.00", "duracao":"---"},
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
