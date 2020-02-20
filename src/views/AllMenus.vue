<template>
  <div class="all-menus">
    <div class="all-menus__title">
      <h1> Listado de todos tus menús </h1>
      <div class="all-menus__description">
        <span class="all-menus__description"> Aquí podras ver un listado de todos tus menús. Puedes
        ver el que quieras accediendo a la opción de "ver menú" de
        cada tarjeta. También tienes disponible un visor de menús, verás un
        botón en la parte superior derecha de las tarjetas para poder abrirlo,
        desde el visor podrás ir pasando a modo diapositiva cada tabla de tus menús
        </span>
      </div>
    </div>
    <div
      v-if="!showTableMenu && !showVisorMenus"
      class="all-menus__list">
       <ListMenus
         @select-menu="selectMenu"
         @show-menus-viewer="showMenusViewer"/>
    </div>
    <div v-if="showTableMenu || showVisorMenus">
      <v-btn
        @click="backList"
        color="primary"
        text>
        Volver al listado de mis menus
      </v-btn>
    </div>
    <div
      v-if="showTableMenu && !showVisorMenus"
      class="all-menus__table-menu">
      <TableShowMenu
        :menu="menuSelected"
        @go-to-menu-edit="goToMenuEdit"/>
    </div>
    <div class="all-menus__visor-list-menus">
      <VisorMenus v-if="showVisorMenus"/>
    </div>
  </div>
</template>
<script>
import ListMenus from '@/components/ListMenus'
import VisorMenus from '@/components/VisorMenus'
import TableShowMenu from '@/components/TableShowMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'AllMenus',
  components: {
    VisorMenus,
    ListMenus,
    TableShowMenu
  },
  data () {
    return {
      menuSelected: {},
      menusIsLoad: false,
      showTableMenu: false,
      showVisorMenus: false
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  mounted () {
    this.$store.dispatch('menu/getMenus', this.user.email)
      .then(() => {
        this.menusIsLoad = true
      }).catch(() => {
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'login' })
      })
  },
  methods: {
    selectMenu (menuSelected) {
      this.menuSelected = menuSelected
      this.goToSection('all-menus__title')
      this.showTableMenu = true
    },
    showMenusViewer () {
      this.showTableMenu = false
      this.goToSection('all-menus__title')
      this.showVisorMenus = true
    },
    goToSection (section) {
      document.querySelector(`.${section}`).scrollIntoView({
        block: 'start',
        behavior: 'auto'
      })
    },
    backList () {
      this.showTableMenu = false
      this.showVisorMenus = false
      this.goToSection('all-menus__title')
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
 .all-menus {
   padding: 0 20px;
   text-align: center;
 }
 .all-menus__title {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 80px;
   margin-bottom: 20px;
 }
 .all-menus__description {
   max-width: 800px;
 }
 @media (min-width: 700px) {
   .all-menus {
     padding: 0 40px;
   }
 }
 @media (min-width: 900px) {
   .all-menus__title {
     margin-top: 40px;
   }
 }
</style>
