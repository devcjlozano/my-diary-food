<template>
  <div>
    <v-toolbar
      dark
      fixed
      height="75px"
      color="primary">
      <div class="toolbar-content">
        <div class="toolbar-content__titulo">
            <span> My diary Food </span>
        </div>
        <div class="toolbar-content__items">
          <div class="toolbar-content__items__input">
            Correo electrónico:
            <input
              class="input-text"
              type="text"/>
          </div>
          <div class="toolbar-content__items__input">
            Contraseña
            <input
              class="input-text"
              type="text"/>
          </div>
          <div class="toolbar-content__items__input">
            <v-btn
              class="custom-transform-class text-none btn-in"
              mt4
              color="#02a4a0"
              solo>
              Entrar
            </v-btn>
          </div>
        </div>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavNotIsLoggedDesktop'
}
</script>
<style scoped>
.v-toolbar {
  height: 200px;
}
.toolbar-content,
.toolbar-content__items,
.toolbar-content__items__input {
   display: flex;
}
.toolbar-content {
  margin: 0 auto;
  width: 800px;
  justify-content: space-between;
  align-items: center;
}
.toolbar-content__items__input {
  margin-left: 20px;
  flex-direction: column;
}
.input-text {
  background: white;
  height: 30px;
}
.btn-in {
   margin-top: 21px;
}
</style>
