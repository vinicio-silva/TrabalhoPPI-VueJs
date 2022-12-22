<template>
	<div class="h-100 d-flex">
		<Sidebar />
		<div class="w-100">
			<div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2 class="title">Agendamentos</h2>
          <div class="subtitle">Veja os agendamentos da sua equipe.</div>
        </div>
				<v-toolbar color="white" class="pa-2">
					<v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
					<v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile"></v-btn>
				</v-toolbar>
			</div>
			<div class="pa-6">
				<v-table>
					<thead>
						<tr>
							<th class="text-left">
								Cliente
							</th>
							<th class="text-left">
								Serviço
							</th>
              <th class="text-left">
								Valor
							</th>
              <th class="text-left">
							  Data e hora
							</th>
              <th class="text-left">
								Profissional
							</th>
              <th>
							</th>
						</tr>
					</thead>
					<tbody v-for="item in agenda" :key="item.id">
						<tr class="border_bottom">
							<td>{{ item.cliente }}</td>
              <td>
                <div class="d-flex flex-row" >
                    <div class="pr-2" v-for="servico in item.servicos">{{ servico }};</div>
                </div>
              </td>
              <td>{{ item.valor }}</td>
              <td>{{ item.datahora }}</td>
              <td>{{ item.profissional }}</td>
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
			agenda: {
        '1' : { "cliente": "Vinicio Bernardes", "servicos": ["Cabelo", "Barba"], "valor": "R$ 60", "datahora": "21/12/2022 19:30", "profissional": "Dimitri Marco" },
        '2' : { "cliente": "Felipe Cintra",  "servicos": ["Cabelo", "Barba", "Sombrancelha"], "valor": "R$ 85", "datahora": "21/12/2022 19:30", "profissional": "Michael Rusbe" },
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
