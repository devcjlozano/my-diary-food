<template>
  <div class="list-shared-menus">
    <div
      class="list-shared-menus__card"
      v-for="menu in listSharedMenus"
      :key="menu.id">
      <CardMenu
       @select-menu="selectMenu"
       :menu="menu"
       :isMenuShared="true"/>
   </div>
 </div>
</template>

<script>
import CardMenu from '@/components/CardMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'ListSharedMenus',
  components: {
    CardMenu
  },
  computed: {
    ...mapGetters('menu', { listSharedMenus: 'listSharedMenus' })
  },
  methods: {
    selectMenu (menu) {
      this.$emit('select-menu', menu)
    }
  }
}
</script>

<style scoped>
  .list-shared-menus {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
  }
  .list-shared-menus__card {
     width: 100%;
     max-width: 1000px;
     margin-bottom: 20px;
  }
</style>
