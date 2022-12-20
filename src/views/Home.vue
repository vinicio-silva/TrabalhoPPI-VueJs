<template>
	<v-toolbar outlined elevation="2" color="white" class="pa-2">
    <v-row class="justify-between">
      <v-col>
        <v-btn variant="plain" class="pt-4 text-h4 font-weight-bold brand-color" to="/">
        Agendify
      </v-btn>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn stacked to="/login">
          Login
        </v-btn>
        <v-btn stacked variant="flat" class="px-4 mx-3 button-color">
          Cadastrar
        </v-btn>
      </v-col>
    </v-row>
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

.brand-color {
  color: #1C10DA;
}
</style>
