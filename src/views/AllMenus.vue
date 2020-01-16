<template>
  <div class="all-menus">
    <div class="all-menus__title">
      <h1> Listado de todos tus menús </h1>
    </div>
    <ListMenus/>
  </div>
</template>
<script>
import ListMenus from '@/components/ListMenus'
import { mapGetters } from 'vuex'

export default {
  name: 'AllMenus',
  components: {
    ListMenus
  },
  data () {
    return {
      menusIsLoad: false
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
