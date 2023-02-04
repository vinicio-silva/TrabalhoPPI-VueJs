<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="6">
          <label for="nome">Nome</label>
          <v-text-field v-model="form.nome" :rules="nameRules" placeholder="Nome" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <label for="email">Email</label>
          <v-text-field v-model="form.email" :rules="emailRules" placeholder="Email" class="mt-1" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <label for="senha">Senha</label>
          <v-text-field type="password" v-model="form.senha" :rules="senhaRules" placeholder="Senha" class="mt-1" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <label for="cpf">CPF</label>
          <v-text-field v-model="form.cpf" :rules="cpfRules" placeholder="CPF" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <label for="telefone">Telefone</label>
          <v-text-field v-model="form.telefone" :rules="telefoneRules" placeholder="Telefone" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <label for="dtNascimento">Data de Nascimento</label>
          <Datepicker class="pt-3" locale="pt" auto-apply :enable-time-picker="false" v-model="form.dtNascimento" :flow="flow"></Datepicker>
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
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
export default {
  props: ['create', 'id'],
  data: () => ({
    components: {
      Datepicker
    },
    valid: false,
    form: {
      nome: '',
      email: '',
      senha: '',
      dtNascimento: '',
      cpf: '',
      telefone: '',
    },
    nameRules: [
      v => !!v || 'O campo de nome é obrigatório',
    ],
    emailRules: [
      v => !!v || 'O campo de E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'E-mail inválido',
    ],
    senhaRules: [
      v => !!v || 'O campo de senha é obrigatório',
    ],
    cpfRules: [
      v => !!v || 'O campo de cpf é obrigatório',
    ],
    telefoneRules: [
      v => !!v || 'O campo de nome é obrigatório',
    ],
    flow: ['month', 'year', 'calendar'],
  }),
  created() {
		if (!this.create) {
      axios.get('http://localhost:8080/client/find-by-id?idUser=' + this.id).then(response => {
				this.form = response.data;
			});
		}
	},
	methods: {
		async validate() {
			const { valid } = await this.$refs.form.validate()

			if (valid) {
				if (this.create) {
					this.saveCliente();
				} else {
          this.updateCliente();
				}
			}
		},
    saveCliente() {
      axios.post('http://localhost:8080/client/save', this.form)
      .then(function (response) {
        window.location.href="/user";
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateCliente() {
      var form = {
        idUser: this.id,
        nome: this.form.nome,
        email: this.form.email,
        senha: this.form.senha,
        dtNascimento: this.form.dtNascimento,
        cpf: this.form.cpf,
        telefone: this.form.telefone,
      }
      axios.put('http://localhost:8080/client/update', form)
      .then(function (response) {
        window.location.href="/cliente";
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
