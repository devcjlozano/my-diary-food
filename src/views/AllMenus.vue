<template>
  <div class="all-menus">
    <div class="all-menus__title">
      <h1> Listado de todos tus menús </h1>
    </div>
    <div
      v-if="!showTableMenu && !showVisorMenus"
      class="all-menus__list">
       <ListMenus
         @select-menu="selectMenu"/>
    </div>
    <div
      v-if="showTableMenu && !showVisorMenus"
      class="all-menus__table-menu">
      <v-btn
        @click="backList"
        color="primary"
        text>
        Volver al listado de mis menus
      </v-btn>
      <TableShowMenu
        :menu="menuSelected"/>
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
    goToSection (section) {
      document.querySelector(`.${section}`).scrollIntoView({
        block: 'start',
        behavior: 'auto'
      })
    },
    backList () {
      this.showTableMenu = false
      this.goToSection('all-menus__title')
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
   margin-top: 20px;
   margin-bottom: 20px;
 }
 @media (min-width: 700px) {
   .all-menus {
     padding: 0 40px;
   }
 }
</style>
