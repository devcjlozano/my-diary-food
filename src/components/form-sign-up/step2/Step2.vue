<template>
  <div>
    <div class="form-signup__mail">
      <span> Correo electrónico </span>
      <v-text-field
        maxlength="100"
        color="#110133"
        v-model="formData.email"
        outlined
        placeholder="Correo electrónico">
      </v-text-field>
    </div>
    <div
      class="form-signup__password">
      <span> Contraseña </span>
      <v-text-field
        maxlength="100"
        color="#110133"
        type="password"
        v-model="formData.password"
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
</style>
