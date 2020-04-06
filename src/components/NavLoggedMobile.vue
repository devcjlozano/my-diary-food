<template>
  <v-toolbar
      dark
      flat
      color="primary"
      height="75px"
      class="toolbar hidden-md-and-up">
      <v-btn
        text
        icon
        @click="mostrarMenuDeslizante()">
        <v-icon>mdi-view-headline</v-icon>
      </v-btn>
      <div class="toolbar__contenedor">
        <div class="toolbar__contenedor__item">
          <v-toolbar-title class="headline text-uppercase">
            <router-link
              to="/"
              class="enlace-router">
              <span> MyDiaryFood</span>
            </router-link>
          </v-toolbar-title>
        </div>
        <div class="toolbar__contenedor__item">
          <div class="toolbar-content__user">
          <span class="toolbar-content__user--name">{{ user.name }} </span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                fab small dark>
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="() => {} ">
                <v-list-item-title> Mi perfil </v-list-item-title>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-title> Cerrar sesión </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        </div>
      </div>
    </v-toolbar>
</template>
<script>

export default {
  name: 'NavLoggedMobile',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    mostrarMenuDeslizante () {
      this.$emit('show-navigation-drawer')
    },
    logout () {
      this.$store.dispatch('auth/logout')
      this.$store.dispatch('menu/emptyInfoMenus')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.enlace-router {
  text-decoration: none;
  color: inherit
}
.toolbar__contenedor {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
.toolbar__contenedor__item {
  display: flex;
  align-items: center;
}
.toolbar-content__user--name {
  margin-right: 5px;
}
</style>
