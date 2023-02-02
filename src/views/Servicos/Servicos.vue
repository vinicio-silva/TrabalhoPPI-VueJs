<template>
	<div class="h-100 d-flex">
		<Sidebar />
		<div class="w-100">
			<div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Serviços</h2>
          <div class="subtitle">Gerencie todos os serviços oferecidos por você.</div>
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
					<tbody v-for="item, index in servicos" :key="item.id">
						<tr class="border_bottom">
							<td>{{ item.descricao }}</td>
              <td>{{ item.valor }}</td>
              <td>{{ item.duracao }}</td>
              <td>
                <div class="d-flex justify-end">
                  <v-btn flat stacked prepend-icon="mdi-eye-outline" title="notification" value="notification"></v-btn>
                  <v-btn flat stacked title="notification" value="notification" :to="{name: 'servico-edit', params: {id: index}}">
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
			servicos: {
        '1' : { "descricao": "CORTE","valor":"R$ 40.00", "duracao":"30" },
        '2' : { "descricao": "BARBA","valor":"R$ 20.00", "duracao":"20"},
        '3' : { "descricao": "MASSAGEM", "valor":"R$ 35.00", "duracao":"---"},
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
