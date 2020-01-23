<template>
  <div class="list-menus">
    <div class="list-menus__containers-cards">
      <CardMenu
        v-for="menu in listMenus"
        :key="menu.id"
        :menu="menu"
      />
    </div>
  </div>
</template>

<script>
import CardMenu from '@/components/cardMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'ListMenus',
  components: {
    CardMenu
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters('menu', {
      listMenus: 'listMenus'
    })
  }
}
</script>
<style scoped>
 .list-menus {
   display: flex;
   justify-content: center;
 }
 .list-menus__containers-cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    max-width: 1600px;
 }
 @media (min-width: 600px) {
   .list-menus__containers-cards {
     grid-template-columns: 1fr 1fr;
   }
 }
 @media (min-width: 900px) {
   .list-menus__containers-cards {
     grid-template-columns: 1fr 1fr 1fr;
   }
 }
</style>
