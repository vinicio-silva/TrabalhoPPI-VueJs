<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="6">
          <label for="nome">Nome</label>
          <v-text-field v-model="form.nome" :rules="nameRules" placeholder="Nome" class="mt-1" required></v-text-field>
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
          <label for="data_nascimento">Data de Nascimento</label>
          <Datepicker class="pt-3" locale="pt" auto-apply :enable-time-picker="false" v-model="form.data_nascimento" :flow="flow"></Datepicker>
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
  props: ['user'],
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
    },
    nameRules: [
      v => !!v || 'O campo de nome é obrigatório',
    ],
    emailRules: [
      v => !!v || 'O campo de E-mail é obrigatório',
      v => /.+\@.+/.test(v) || 'E-mail inválido',
    ],
    senhaRules: [
      v => !!v || 'O campo de senha é obrigatório',
      v => v.length >7 || 'A senha deve ter comprimento entre 8 e 35 caracteres',
      v => /.*[1234567890].*/.test(v) && /.*[abcdefghijklmnoppppqrstuvwxyz].*/.test(v) || 'A senha deve conter no mínimo um dígito e uma letra',
    ],
    cpfRules: [
      v => !!v || 'O campo de cpf é obrigatório',
      v => /.*\D.*/.test(v) == false || 'CPF deve ter apenas dígitos',
      v => v.length == 11 || 'CPF inválido',
    ],
    telefoneRules: [
      v => !!v || 'O campo de nome é obrigatório',
      v => /.*\D.*/.test(v) == false || 'Telefone deve ter apenas dígitos',
      v => v.length == 11 || 'Informe o número completo com DDD',
    ],
    flow: ['month', 'year', 'calendar'],
  }),
  created () {
    if (this.user) {
      this.form = this.user;
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
