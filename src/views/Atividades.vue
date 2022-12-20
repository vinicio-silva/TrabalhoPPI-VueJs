<template>
	<div class="h-100 d-flex">
		<Sidebar />
		<div class="w-100">
			<div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Equipe</h2>
          <div>Veja todas as informações sobre sua equipe</div>
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
								Nome
							</th>
							<th class="text-left">
								Cargo
							</th>
              <th class="text-left">
								Atividades
							</th>
              <th>
							</th>
						</tr>
					</thead>
					<tbody v-for="item in users" :key="item.id">
						<tr class="border_bottom">
							<td>{{ item.nome }}</td>
							<td>{{ item.cargo }}</td>
              <td>
                <div class="d-flex flex-row" >
                    <div class="pr-2" v-for="atividade in item.atividades">{{ atividade }};</div>
                </div>
              </td>
              <td>Botões</td>
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
			users: [
				{"id": 1, "nome": "Vinicio Bernardes", "cargo": "Cabelereiro", "atividades": ["Cabelo", "Barba"] },
				{"id": 2, "nome": "Felipe Cintra", "cargo": "Cabelereiro", "atividades": ["Cabelo", "Barba", "Sombrancelha"] },
			]
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
