<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12">
          <label for="nome">Nome</label>
          <v-text-field v-model="form.nome" :rules="nameRules" placeholder="Nome" class="mt-1" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <label for="cargo">Cargo</label>
          <v-select v-model="form.cargo" :items="cargos" item-title="cargo" return-object :rules="cargoRules" placeholder="Cargo" class="mt-1" required></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <label for="servico">Serviços</label>
          <v-select v-model="form.servicos" multiple :items="servicos" item-title="descricao" item-value="idServicos" :rules="servicosRules" placeholder="Serviços" class="mt-1" required></v-select>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <v-btn prepend-icon="mdi-content-save" color="#1C10DA" class="text-white ml-4" height="40px" @click="validate">
          Salvar
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
export default {
  props: ['create', 'id'],
  data: () => ({
    valid: false,
    form: {
      nome: '',
      cargo: [],
      servicos: [],
    },
    cargos: [],
    servicos: [],
    nameRules: [
      v => !!v || 'O campo de nome é obrigatório',
    ],
    cargoRules: [
      v => v.length > 0 || 'O campo de cargo é obrigatório',
    ],
    servicosRules: [
      v => v.length > 0 || 'O campo de serviços é obrigatório',
    ],
  }),
  created() {
    this.getCargos();
    this.getServicos();
		if (!this.create) {
      axios.get('http://localhost:8080/profissional/find-by-id?idProfissional=' + this.id).then(response => {
				this.form = response.data;
			});
		}
	},
	methods: {
    getCargos() {
      axios.get('http://localhost:8080/cargo/find-all').then(response => {
        this.cargos = response.data;
      });
    },
    getServicos() {
      axios.get('http://localhost:8080/servicos/find-all').then(response => {
        this.servicos = response.data;
      });
    },
		async validate() {
			const { valid } = await this.$refs.form.validate()

			if (valid) {
				if (this.create) {
					this.saveProfissional();
				} else {
          this.updateProfissional();
				}
			}
		},
    saveProfissional() {
      axios.post('http://localhost:8080/profissional/save', this.form)
      .then(function (response) {
        window.location.href="/equipe";
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateProfissional() {
      var form = {
        idProfissional: this.id,
        nome: this.form.nome,
        cargo: this.form.cargo,
        servicos: this.form.servicos,
      }
      axios.put('http://localhost:8080/profissional/update', form)
      .then(function (response) {
        window.location.href="/equipe";
      })
      .catch(function (error) {
        console.log(error);
      });
    },
	},
}
</script>

<style lang="scss">
.dp-custom-input {
  box-shadow: 0 0 6px #1976d2;
  color: #1976d2;

  &:hover {
    border-color: #1976d2;
  }
}
</style>
