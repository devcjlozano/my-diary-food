<template>
  <div class="all-menus">
    <div class="all-menus__title">
      <h1> Listado de todos tus menús </h1>
    </div>
    <div class="all-menus__list">
      <ListMenus/>
    </div>
    <div class="all-menus__table-menu">
    </div>
    <div class="all-menus__visor-list-menus">
      <VisorMenus/>
    </div>
  </div>
</template>
<script>
import ListMenus from '@/components/ListMenus'
import VisorMenus from '@/components/VisorMenus'
import { mapGetters } from 'vuex'

export default {
  name: 'AllMenus',
  components: {
    VisorMenus,
    ListMenus
  },
  data () {
    return {
      menusIsLoad: false,
      showTableMenu: false,
      showVisorMenus: true
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
 }
 @media (min-width: 700px) {
   .all-menus {
     padding: 0 40px;
   }
 }
</style>
