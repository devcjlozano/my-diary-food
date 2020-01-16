<template>
  <div class="home">
    <div class="home__title">
      <h1> Menú actual </h1>
    </div>
    <transition
      appear
      name="fade"
      mode="out-in">
      <div
        v-if="Object.keys(currentMenu).length !== 0"
        :key="componentKey"
        class="home__table-menu">
        <TableShowMenu :menu="currentMenu"/>
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
    /* this.$store.dispatch('menu/getMenus', this.user.email)
      .then(() => {
        if (this.listMenus.length > 0) {
          const indexCurrentMenu = this.listMenus.findIndex(menu => menu.isCurrent)
          this.currentMenu = indexCurrentMenu === -1 ? this.listMenus[0] : this.listMenus[indexCurrentMenu]
        }
        this.menusIsLoad = true
      }).catch(() => {
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'login' })
      }) */
  },
  methods: {
    nextMenu () {
      this.currentMenu = this.listMenus[1]
      this.componentKey += 1
    },
    backMenu () {
      this.currentMenu = this.listMenus[0]
      this.componentKey += 1
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
   margin-top: 20px
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
