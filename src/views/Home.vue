<template>
  <div class="home">
    <ListadoMenus />
    <div
      v-if="listMenus.length > 0"
      class="home__table-menu">
      <TableShowMenu :menu="listMenus[0]"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoMenus from '@/components/ListadoMenus.vue'
import TableShowMenu from '@/components/TableShowMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    ListadoMenus,
    TableShowMenu
  },
  data () {
    return {
      errorMenus: false
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    }),
    ...mapGetters('menu', {
      listMenus: 'listMenus'
    })
  },
  mounted () {
    this.$store.dispatch('menu/getMenus', this.user.email)
      .then(() => {
        console.log('Menus cargados correctamente')
      }).catch(() => {
        this.errorMenus = true
      })
  }
}
</script>
<style scoped>
 .home {
   padding: 0 20px;
   text-align: center;
 }
 .home__table-menu {
   overflow: auto
 }
 @media (min-width: 700px) {
   .home {
     padding: 0 40px;
  }

 }
</style>>
