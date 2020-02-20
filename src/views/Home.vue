<template>
  <div class="home">
    <div class="home__title">
      <h1> Menú actual </h1>
      <div class="home_title__description">
        <span>
          Este es el menú que tienes marcado como actual,
           podrás editarlo si haces click en el botón que hay
           encima de la tabla a la derecha
        </span>
      </div>
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
      class="home__menu-empty"
      v-if="Object.keys(currentMenu).length === 0 && menusIsLoad">
      <InfoPanel
       :main-text="textInfoPanel">
          <router-link
             class="info-panel__link"
             to='/menucreator'> Crear menu </router-link>
      </InfoPanel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TableShowMenu from '@/components/TableShowMenu'
import InfoPanel from '@/components/InfoPanel'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    TableShowMenu,
    InfoPanel
  },
  data () {
    return {
      menusIsLoad: false,
      componentKey: 0,
      textInfoPanel: ''
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
        this.textInfoPanel = `<p>Parece que no tienes ningún menú creado</p>
        <p> Puedes crear un menú haciendo click en el siguiente enlace</p>`
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
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 80px;
   margin-bottom: 40px;
 }
 .home_title__description {
   max-width: 800px;
 }
 .home__table-menu {
   overflow: auto
 }
 .home__menu-empty {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .info-panel__link {
   color: white
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
 @media (min-width: 900px) {
   .home__title {
     margin-top: 40px;
  }
 }
</style>>
