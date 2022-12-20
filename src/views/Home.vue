<template>
	<v-toolbar outlined elevation="2" color="white" class="pa-2">
		<v-toolbar-title>Agendify</v-toolbar-title>
		<v-btn stacked to="/login">
			Login
		</v-btn>
		<v-btn stacked variant="flat" class="px-4 mx-3 button-color">
			Cadastrar
		</v-btn>
	</v-toolbar>
</template>
<script>
export default {

}
</script>
<style scoped>
.button-color {
	background: #6C63FF;
	color: #FFFFFF;
}
</style>
