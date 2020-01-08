<template>
  <div class="menu-created-success">
    <div class="menu-created-success__information">
      <p> <strong>¡Genial!, </strong> has guardado correctamente tu nuevo menú </p>
      <p> ¿Qué quieres hacer ahora ? </p>
      <div class="menu-created-success__information__buttons">
        <v-btn
          @click="goToMenuCreator"
          class="custom-transform-class text-none btn-own"
          color="#110133"
          text>
            Volver a crear un nuevo menú
        </v-btn>
        <span class="menu-created-success__information__buttons__text">
          o
        </span>
        <v-btn
          dark
          color="#110133"
          >
            Ir a sección Mis menús
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCreatedSuccess',
  methods: {
    goToMenuCreator (section) {
      this.$emit('go-to-menu-creator')
    }
  }
}
</script>

<style scoped>
 .menu-created-success {
    width: 100%;
    margin-top: 40px;
    max-width: 800px;
    background-color: #00aeaa;
    padding: 20px 30px 40px;
    border-radius: 10px;
 }
 .menu-created-success__information {
    color: #110133;
 }
 .menu-created-success__information__buttons {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 40px;
 }
 .menu-created-success__information__buttons__text {
   margin-right: 20px;
 }
</style>
