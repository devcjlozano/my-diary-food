<template>
  <div class="list-menus">
    <div
      v-if="listMenus.length > 0"
      class="list-menus__table">
      <transition
        appear
        name="fade"
        mode="out-in">
      <TableShowMenu
        :menu="listMenus[indexMenu]"
        :key="componentKey"/>
      </transition>
      <v-btn
        @click="nextMenu">
          Siguiente menú
      </v-btn>
      <v-btn
        @click="backMenu">
          Anterior menú
      </v-btn>
    </div>
  </div>
</template>
<script>
import TableShowMenu from '@/components/TableShowMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'ListMenus',
  components: {
    TableShowMenu
  },
  data () {
    return {
      indexMenu: 0,
      componentKey: 0
    }
  },
  computed: {
    ...mapGetters('menu', {
      listMenus: 'listMenus'
    })
  },
  methods: {
    nextMenu () {
      this.componentKey += 1
      this.indexMenu = 1
    },
    backMenu () {
      this.indexMenu = 0
      this.componentKey += 1
    }
  }
}
</script>
<style scoped>
 .list-menus {
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
</style>
