<template>
  <v-form  ref="form" v-model="valid">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12">
          <label for="cargo">Cargo</label>
          <v-text-field v-model="form.cargo" :rules="cargoRules" placeholder="Cargo" class="mt-1" required></v-text-field>
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
  props: ['cargos'],
  data: () => ({
    components: {
      Datepicker
    },
    valid: false,
    form: {
      cargo: '',
    },
    cargoRules: [
      v => !!v || 'O campo de cargo é obrigatório',
    ],
  }),
  created () {
    if (this.cargos) {
      this.form = this.cargos;
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
