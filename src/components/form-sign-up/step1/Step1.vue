<template>
  <div>
    <div class="form-signup__name">
      <span> Nombre </span>
      <v-text-field
        maxlength="60"
        color="#110133"
        v-model="formData.name"
        outlined
        placeholder="Nombre">
      </v-text-field>
    </div>
    <div class="form-signup__surnames">
      <span> Apellidos </span>
        <v-text-field
          maxlength="60"
          color="#110133"
          v-model="formData.surNames"
          outlined
          placeholder="Apellidos">
        </v-text-field>
    </div>
 </div>
</template>
<script>
export default {
  Name: 'Step1',
  props: {
    formData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped>
 .form-signup__name,
 .form-signup__surnames {
   display: flex;
   flex-direction: column;
   color: #110133
 }
</style>
