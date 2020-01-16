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
        :menu="listMenus[page - 1]"
        :key="componentKey"/>
      </transition>
      <div class="list-menus__paginator">
        <v-pagination
          v-model="page"
          :length="listMenus.length"
          />
      </div>
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
    }
  }
}
</script>
<style scoped>
 .list-menus {
   overflow: auto
 }
 .list-menus__paginator {
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
