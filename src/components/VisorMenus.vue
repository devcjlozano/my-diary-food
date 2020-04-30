<template>
  <div class="visor-menus">
    <div
      v-if="listMenus.length > 0"
      class="visor-menus__table">
      <transition
        appear
        name="fade"
        mode="out-in">
      <TableShowMenu
        :menu="listMenus[page - 1]"
        :key="componentKey"
        @check-menu-favorite="checkMenuFavorite"
        @go-to-menu-edit="goToMenuEdit"
        @share-menu="shareMenu"/>
      </transition>
      <div class="visor-menus__paginator">
        <v-pagination
          v-model="page"
          :length="listMenus.length"/>
      </div>
    </div>
  </div>
</template>
<script>
import TableShowMenu from '@/components/TableShowMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'VisorMenus',
  components: {
    TableShowMenu
  },
  data () {
    return {
      page: 1,
      componentKey: 0
    }
  },
  computed: {
    ...mapGetters('menu', {
      listMenus: 'listMenus'
    })
  },
  watch: {
    page () {
      this.forceRenderComponentTable()
    }
  },
  methods: {
    forceRenderComponentTable () {
      this.componentKey += 1
    },
    goToMenuEdit (menu) {
      this.$emit('go-to-menu-edit', menu)
    },
    checkMenuFavorite (menu) {
      this.$emit('check-menu-favorite', menu)
    },
    shareMenu (menu) {
      this.$emit('share-menu', menu)
    }
  }
}
</script>
<style scoped>
 .visor-menus {
   overflow: auto
 }
 .visor-menus__paginator {
   margin: auto;
   display: flex;
   justify-content: center;
   max-width: 700px;
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
