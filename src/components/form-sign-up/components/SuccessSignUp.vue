<template>
  <div
    class="form-signup__success">
    <div class="form-signup__success__title">
      <h1>My diary Food</h1>
    </div>
    <div class="form-signup__success__subtitle">
      <p class="form-signup__success__subtitle--parrafo">
        <v-icon> mdi-check-circle </v-icon> ¡Tu cuenta ha sido creada correctamente!
      </p>
      <p class="form-signup__success__subtitle--parrafo">
        Muchas gracias por registrarte
      </p>
      <p class="form-signup__success__subtitle--parrafo">
        Puedes ir a la página principal para acceder
        con los datos de la cuenta que acabas de crear haciendo click
        en el botón de abajo.
      </p>
    </div>
   </div>
</template>

<script>
export default {
  name: 'SuccessSignUp'
}
</script>
<style scoped>
.form-signup__success {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .form-signup__success__title {
   margin-bottom: 20px;
 }
 .form-signup__success__subtitle {
   margin-bottom: 35px;
 }
 .form-signup__success__subtitle--parrafo {
   text-align: center;
 }
</style>
