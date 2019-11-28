<template>
  <div>
    <div class="form-signup__mail">
      <span> Correo electrónico </span>
      <v-text-field
        class="text-email"
        v-model="validation.form.email.$model"
        :error-messages="mailError"
        maxlength="100"
        color="#110133"
        outlined
        placeholder="Correo electrónico">
      </v-text-field>
    </div>
    <div
      class="form-signup__password">
      <span> Contraseña </span>
      <v-text-field
        v-model="validation.form.password.$model"
        maxlength="100"
        color="#110133"
        type="password"
        outlined
        placeholder="Contraseña">
      </v-text-field>
    </div>
  </div>
</template>
<script>
export default {
  Name: 'Step2',
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    validation: {
      type: Object,
      required: true
    }
  },
  computed: {
    mailError () {
      const errors = []
      if (!this.validation.form.email.$dirty) return errors
      !this.validation.form.email.email &&
        errors.push('Por favor, introduce un correo válido')
      return errors
    }
  }
}
</script>
<style scoped>
.form-signup__mail,
.form-signup__password {
   display: flex;
   flex-direction: column;
   color: #110133
 }
 div /deep/ .text-email .v-text-field__details {
     padding: 0;
 }
</style>
