<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="6">
          <label for="cliente">Cliente</label>
          <v-select v-model="form.client" :items="clientes" :rules="clienteRules" item-title="nome" return-object label="Cliente" class="mt-1" required></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <label for="profissional">Profissional</label>
          <v-select v-model="form.profissional" :items="equipe" :rules="profissionalRules" item-title="nome" return-object label="Profissional" class="mt-1" required></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <label for="servicos">Serviços</label>
          <v-select v-model="form.servicos" :items="servicos" multiple :rules="servicosRules" item-title="descricao" return-object placeholder="Serviços" class="mt-1" required></v-select>
        </v-col>
        <v-col cols="12" md="5">
          <label for="valor">Valor</label>
          <v-text-field disabled v-model="form.valor" :rules="valorRules" placeholder="Valor" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <label for="data">Data</label>
          <Datepicker class="pt-3" locale="pt" format="dd/MM/yyyy HH:mm" auto-apply v-model="form.data"></Datepicker>
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
import moment from 'moment'
export default {
  props: ['create', 'id'],
  data: () => ({
    components: {
      Datepicker
    },
    valid: false,
    form: {
      client: '',
      valor: 0,
      data: '',
      profissional: '',
      servicos: []
    },
    clienteRules: [
      v => !!v || 'O campo de cliente é obrigatório',
    ],
    valorRules: [
      v => !!v || 'O campo de valor é obrigatório',
    ],
    profissionalRules: [
      v => !!v || 'O campo de profissional é obrigatório',
    ],
    servicosRules: [
      v => v.length!=0 || 'O campo de serviços é obrigatório',
    ],
    clientes: [],
    equipe: [],
    servicos: [],
    flow: ['year', 'month', 'calendar'],
  }),
  created() {
    this.getClientes();
    this.getEquipe();
		if (!this.create) {
      axios.get('http://localhost:8080/agendamentos/find-by-id?idAgendamento=' + this.id).then(response => {
				this.form = response.data;
			});
		}
	},
  watch: {
    'form.servicos': {
      handler: function (newVal, oldVal) {
        var soma = 0;
        this.form.servicos.forEach(servico => {
          soma = soma + servico.valor
        });
        this.form.valor = soma;
      }
    },
    'form.profissional': {
      handler: function (newVal, oldVal) {
        this.getServicoByProfissionalId(newVal.idProfissional);
        this.form.servicos = [];
      }
    },
  },
	methods: {
    getServicoByProfissionalId(idProfissional) {
      axios.get('http://localhost:8080/profissional/find-by-id?idProfissional=' + idProfissional).then(response => {
				this.servicos = response.data.servicos;
			});
    },
    getClientes() {
      axios.get('http://localhost:8080/client/find-all').then(response => {
        this.clientes = response.data;
      });
    },
    getEquipe() {
      axios.get('http://localhost:8080/profissional/find-all').then(response => {
        this.equipe = response.data;
      });
    },
		async validate() {
			const { valid } = await this.$refs.form.validate()

			if (valid) {
				if (this.create) {
					this.saveAgendamento();
				} else {
          this.updateAgendamento();
				}
			}
		},
    saveAgendamento() {
      var form = {
        client: this.form.client,
        valor: this.form.valor,
        data: moment(this.form.data).format('YYYY-MM-DD HH:mm:ss'),
        profissional: this.form.profissional,
        servicos: this.form.servicos
      }
      axios.post('http://localhost:8080/agendamentos/save', form)
      .then(function (response) {
        window.location.href="/agenda";
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateAgendamento() {
      var form = {
        idAgendamento: this.id,
        client: this.form.client,
        valor: this.form.valor,
        data: moment(this.form.data).format('YYYY-MM-DD HH:mm:ss'),
        profissional: this.form.profissional,
        servicos: this.form.servicos
      }
      axios.put('http://localhost:8080/agendamentos/update', form)
      .then(function (response) {
        window.location.href="/agenda";
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
