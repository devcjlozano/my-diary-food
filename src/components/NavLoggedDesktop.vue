<template>
  <div>
    <v-toolbar
      dark
      fixed
      class="my-toolbar hidden-sm-and-down"
      height="75px"
      color="primary">
      <div class="toolbar-content">
        <div class="toolbar-content__titulo">
            <span> My diary Food </span>
        </div>
        <v-toolbar-items>
          <v-btn
            to='/home'
            text> Menú actual </v-btn>
          <v-btn text> Todos mis menús </v-btn>
          <v-btn text> Menús compartidos </v-btn>
        </v-toolbar-items>
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
                <v-list-item-title> Logout </v-list-item-title>
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
}
.toolbar-content__user--name {
  margin-right: 5px;
}
@media (min-width: 605px) {
  .toolbar-content__titulo {
    margin-bottom: 0;
  }
}
</style>
