<template>
  <div>
    <v-toolbar
      dark
      fixed
      class="my-toolbar"
      height="75px"
      color="primary">
      <div class="toolbar-content">
        <div class="toolbar-content__titulo">
            <span> My diary Food </span>
        </div>
        <div class="toolbar-content__items">
          <div class="toolbar-content__items__input">
            <span class="toolbar-content__items__input--label"> Correo electrónico </span>
            <input
              class="input-text"
              type="text"/>
          </div>
          <div class="toolbar-content__items__input">
            <span class="toolbar-content__items__input--label"> Contraseña </span>
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
  flex-wrap: wrap;
}
.toolbar-content__titulo {
  margin-bottom: 10px;
}
.toolbar-content__items__input {
  margin-left: 20px;
  flex-direction: column;
}
.toolbar-content__items__input:first-child {
  margin-left: 0;
}
.toolbar-content__items__input--label {
  font-size: 0.9em;
}
.input-text {
  background: white;
  height: 30px;
}
.btn-in {
   margin-top: 18px;
}

@media (min-width: 605px) {
  .toolbar-content__titulo {
  margin-bottom: 0;
}
}
</style>
