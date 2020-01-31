<template>
  <div class="list-menus">
    <div class="list-menus__filters">
      <div>
        <v-text-field
          maxlength="60"
          outlined
          placeholder="Nombre">
        </v-text-field>
      </div>
    </div>
    <div class="list-menus__container-cards">
      <div
        class="list-menu__container__cards__card"
        v-for="menu in listMenus"
        :key="menu.id">
          <CardMenu
            @select-menu="selectMenu"
            :menu="menu"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardMenu from '@/components/CardMenu'
import { mapGetters } from 'vuex'

export default {
  name: 'ListMenus',
  components: {
    CardMenu
  },
  data () {
    return {}
  },
  methods: {
    selectMenu (menuSelected) {
      this.$emit('select-menu', menuSelected)
    }
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
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
 }
 .list-menus__filters {
   display: flex;
 }
 .list-menus__container-cards {
    width: 100%;
    max-width: 1000px;
 }
 .list-menu__container__cards__card {
   margin-bottom: 10px;
 }
</style>
