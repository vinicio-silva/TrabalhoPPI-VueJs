<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="4">
          <label for="descricao">Descrição</label>
          <v-text-field v-model="form.descricao" :rules="descricaoRules" placeholder="Descrição" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <label for="valor">Valor</label>
          <v-text-field v-model="form.valor" :rules="valorRules" placeholder="Valor" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <label for="duracao">Duração</label>
          <v-text-field v-model="form.duracao" :rules="duracaoRules" placeholder="Duração" class="mt-1" required></v-text-field>
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
import axios from 'axios';
export default {
  props: ['create', 'id'],
  data: () => ({
    valid: false,
    form: {
      descricao: '',
      valor: '',
      duracao: '',
    },
    descricaoRules: [
      v => !!v || 'O campo de descricao é obrigatório',
    ],
    valorRules: [
      v => !!v || 'O campo de valor é obrigatório',
      v => v.indexOf(',') == -1 || 'Os centavos devem ser separados por ponto',
      v => isNaN(v) == false || 'O valor deve ser um número'
    ],
    duracaoRules: [
      v => !!v || 'O campo de duração é obrigatório',
      v => isNaN(v) == false || 'A duração deve ser um número',
    ],
  }),
  created () {
    if (!this.create) {
			axios.get('http://localhost:8080/servicos/find-by-id?idServicos=' + this.id).then(response => {
				this.form = response.data;
			});
		}
  },
  methods: {
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) {
        if (this.create) {
        this.saveServico();
        } else {
          this.updateServico();
        }
      }
    },
    saveServico() {
      axios.post('http://localhost:8080/servicos/save', this.form)
      .then(function (response) {
        window.location.href="/servicos";
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    updateServico() {
      var form = {
        idServicos: this.id,
        descricao: this.form.descricao,
        valor: this.form.valor,
        duracao: this.form.duracao,
      }
      axios.put('http://localhost:8080/servicos/update', form)
      .then(function (response) {
        window.location.href="/servicos";
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
