<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="6">
          <label for="cliente">Cliente</label>
          <v-select v-model="form.cliente" :items="clientes" :rules="clienteRules" placeholder="Cliente" class="mt-1" required></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <label for="profissional">Profissional</label>
          <v-select v-model="form.profissional" :items="profissionais" :rules="profissionalRules" placeholder="Profissional" class="mt-1" required></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <label for="servicos">Serviços</label>
          <v-select v-model="form.servicos" :items="servicos" multiple :rules="servicosRules" placeholder="Profissional" class="mt-1" required></v-select>
        </v-col>
        <v-col cols="12" md="5">
          <label for="valor">Valor</label>
          <v-text-field v-model="form.valor" :rules="valorRules" placeholder="Valor" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <label for="data">Data</label>
          <Datepicker class="pt-3" locale="pt" auto-apply v-model="form.data"></Datepicker>
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

export default {
  props: ['agenda'],
  data: () => ({
    components: {
      Datepicker
    },
    valid: false,
    form: {
      cliente: '',
      valor: '',
      data: '',
      profissional: '',
      servicos: []
    },
    clienteRules: [
      v => !!v || 'O campo de cliente é obrigatório',
    ],
    valorRules: [
      v => !!v || 'O campo de valor é obrigatório',
      v => v.indexOf(',') == -1 || 'Os centavos devem ser separados por ponto',
      v => isNaN(v) == false || 'O valor deve ser um número'
    ],
    profissionalRules: [
      v => !!v || 'O campo de profissional é obrigatório',
    ],
    servicosRules: [
      v => v.length!=0 || 'O campo de serviços é obrigatório',
    ],
    clientes: ['Jorge', 'João', 'Marcelo'],
    profissionais: ['Fátima', 'Rodrigo', 'Sônia', 'Bruno'],
    servicos: ['Cabelo', 'Barba', 'Sombrancelha', 'Limpeza Facial']
  }),
  created () {
    if (this.agenda) {
      this.form = this.agenda;
    }
  },
  methods: {
    async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) {
          alert("Formulário válido")
        }
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
