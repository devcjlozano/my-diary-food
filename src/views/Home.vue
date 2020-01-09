<template>
  <div class="home">
    <ListadoMenus />
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoMenus from '@/components/ListadoMenus.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    ListadoMenus
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
