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
    max-width: 800px;
    background-color: #00aeaa;
    padding: 20px 30px 40px;
    border-radius: 10px;
 }
 .menu-created-success__information {
    color: #110133;
 }
 .menu-created-success__information__buttons {
   margin-top: 40px;
 }
</style>
