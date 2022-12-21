<template>
  <v-form v-model="valid">
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
        <v-col cols="12" md="5">
          <label for="nome">CPF</label>
          <v-text-field v-model="form.cpf" :rules="cpfRules" placeholder="CPF" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <label for="email">Telefone</label>
          <v-text-field v-model="form.telefone" :rules="telefoneRules" placeholder="Telefone" class="mt-1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <label for="email">Data de Nascimento</label>
          <Datepicker locale="pt" auto-apply :enable-time-picker="false" class="pt-3" v-model="form.data_nascimento" :flow="flow"></Datepicker>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <label for="nome">Cargo</label>
          <v-text-field v-model="form.cargo" :rules="cargoRules" placeholder="Cargo" class="mt-1" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <label for="email">Serviços</label>
          <v-text-field v-model="form.atividades" :rules="atividadesRules" placeholder="Serviços" class="mt-1" required></v-text-field>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <v-btn prepend-icon="mdi-content-save" color="#1C10DA" class="text-white ml-4" height="40px" @click="save">
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
  data: () => ({
    components: {
      Datepicker
    },
    valid: false,
    form: {
      nome: '',
      email: '',
      data_nascimento: '',
      cpf: '',
      telefone: '',
      cargo: '',
      atividades: [],
    },
    nameRules: [
      v => !!v || 'O campo de nome é obrigatório',
    ],
    emailRules: [
      v => !!v || 'O campo de E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'E-mail inválido',
    ],
    cpfRules: [],
    telefoneRules: [],
    cargoRules: [],
    atividades: [],
    atividadesRules: [],
    flow: ['month', 'year', 'calendar'],
  }),
  methods: {
    save() {
      console.log(this.form);
    }
  },
}
</script>
