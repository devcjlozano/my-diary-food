<template>
  <div class="home">
    <div class="home__title">
      <h1> Menú actual </h1>
      <p> Este es el menú que tienes marcado como actual,
           podrás editarlo si haces click en el botón que hay
           encima de la tabla a la derecha</p>
    </div>
    <transition
      appear
      name="fade"
      mode="out-in">
      <div
        v-if="Object.keys(currentMenu).length !== 0"
        class="home__table-menu">
        <TableShowMenu
         @go-to-menu-edit="goToMenuEdit"
         :menu="currentMenu"/>
      </div>
    </transition>
    <div
      v-if="Object.keys(currentMenu).length === 0 && menusIsLoad">
      <h3> No tienes ningún menu</h3>
      <router-link to='/menucreator'> Crear menu </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TableShowMenu from '@/components/TableShowMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    TableShowMenu
  },
  data () {
    return {
      menusIsLoad: false,
      componentKey: 0
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    }),
    ...mapGetters('menu', {
      listMenus: 'listMenus',
      currentMenu: 'currentMenu'
    })
  },
  mounted () {
    this.$store.dispatch('menu/getCurrentMenu')
      .then(() => {
        this.menusIsLoad = true
      }).catch(() => {
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'login' })
      })
  },
  methods: {
    nextMenu () {
      this.currentMenu = this.listMenus[1]
      this.componentKey += 1
    },
    backMenu () {
      this.currentMenu = this.listMenus[0]
      this.componentKey += 1
    },
    goToMenuEdit (menu) {
      this.$router.push({
        name: 'editormenu',
        params: {
          menuId: menu._id,
          menuReceived: menu
        }
      })
    }
  }
}
</script>
<style scoped>
 .home {
   padding: 0 20px;
   text-align: center;
 }
 .home__title {
   margin-top: 20px;
   margin-bottom: 40px;
 }
 .home__table-menu {
   overflow: auto
 }
 .fade-enter-active,
 .fade-leave-active {
  transition: opacity .3s ease
 }
 .fade-enter,
 .fade-leave-to {
   opacity: 0
 }
 @media (min-width: 700px) {
   .home {
     padding: 0 40px;
  }
 }
</style>>
