<template>
  <div>
    <v-toolbar
      dark
      fixed
      class="my-toolbar hidden-sm-and-down"
      height="75px"
      color="primary">
      <div class="toolbar-content">
        <div class="toolbar-content__titulo headline text-uppercase">
          <router-link
            to="/"
            class="enlace-router">
            <span> MyDiaryFood</span>
          </router-link>
        </div>
        <v-toolbar-items>
          <v-btn
            to='/home'
            text> Menú actual </v-btn>
          <v-btn
            to='/allmenus'
             text> Todos mis menús
          </v-btn>
          <v-btn
            to='/menucreator'
            text> Crear Menú
          </v-btn>
          <v-btn
            to='sharedMenus'
            text> Menús compartidos </v-btn>
        </v-toolbar-items>
        <div>
          <span class="toolbar-content__user--name">{{ user.name }} </span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-avatar
                 class="toolbar-content__user__avatar"
                 v-on="on"
                 size="36"
                 color="secundary">
                <v-icon
                  dark>mdi-account</v-icon>
              </v-avatar>

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
    </v-toolbar>
  </div>
</template>

<script>

export default {
  name: 'NavLoggedDesktop',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$store.dispatch('menu/emptyInfoMenus')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style scoped>
.toolbar-content {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.toolbar-content__titulo {
  margin-bottom: 10px;
  font-size: 0.8em;
}
.toolbar-content__user--name {
  margin-right: 5px;
}
.toolbar-content__user__avatar {
  cursor: pointer;
}
.enlace-router {
  text-decoration: none;
  color: inherit;
  font-size: 0.8em;
}
@media (min-width: 605px) {
  .toolbar-content__titulo {
    margin-bottom: 0;
  }
}
</style>
