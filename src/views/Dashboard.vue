<template>
	<div class="h-100 d-flex">
		<Sidebar />
		<div class="w-100 body">
			<div class="d-flex justify-space-between px-6 pt-4" style="height: 90px;">
        <div>
          <h2>Olá, usuário.</h2>
          <div class="subtitle">Dia agitado hoje, hein?</div>
        </div>
				<v-toolbar color="white" class="pa-2">
					<v-btn stacked prepend-icon="mdi-bell" title="notification" value="notification"></v-btn>
					<v-btn stacked prepend-icon="mdi-account-circle" title="profile" value="profile" ></v-btn>
				</v-toolbar>
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
