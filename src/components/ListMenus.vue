<template>
  <div class="list-menus">
    <div
      class="list-menus__main"
      v-if="listMenus.length > 0">
      <div class="list-menus__main__filters">
        <div>
          <v-text-field
            maxlength="60"
            outlined
            placeholder="Nombre">
          </v-text-field>
        </div>
      </div>
      <transition
        appear
        name="fade"
        mode="out-in">
        <div
          :key="componentKey"
          class="list-menus__main__container-cards">
          <div
            class="list-menu__main__container__cards__card"
            v-for="menu in listMenusFiltered"
            :key="menu.id">
            <CardMenu
              @select-menu="selectMenu"
              :menu="menu"/>
          </div>
        </div>
      </transition>
      <div class="list-menus__main__paginator">
        <v-pagination
          v-model="numActualPage"
          :length="numPages"/>
      </div>
    </div>
    <div
       v-else
       class="list-menus__info-panel">
      <InfoPanel
       :main-text="textInfoPanel"
       :show-link-router="true"/>
    </div>
  </div>
</template>

<script>
import CardMenu from '@/components/CardMenu'
import InfoPanel from '@/components/InfoPanel'
import { mapGetters } from 'vuex'

export default {
  name: 'ListMenus',
  components: {
    CardMenu,
    InfoPanel
  },
  data () {
    return {
      numActualPage: 1,
      numCardByPage: 5,
      componentKey: 0,
      textInfoPanel: `<p>Parece que no tienes ningún menú creado</p>
        <p> Puedes crear un menú haciendo click en el siguiente enlace</p>`
    }
  },
  methods: {
    selectMenu (menuSelected) {
      this.$emit('select-menu', menuSelected)
    },
    forceRenderComponentCards () {
      this.componentKey += 1
    }
  },
  computed: {
    ...mapGetters('menu', {
      listMenus: 'listMenus'
    }),
    numPages () {
      return Math.ceil(this.listMenus.length / this.numCardByPage)
    },
    listMenusFiltered () {
      const startIndexListMenus = this.numActualPage * 5 - this.numCardByPage
      const endIndexListMenus = startIndexListMenus + 5 >= this.listMenus.length
        ? this.listMenus.length : startIndexListMenus + this.numCardByPage
      return this.listMenus.slice(startIndexListMenus, endIndexListMenus)
    }
  },
  watch: {
    numActualPage () {
      this.forceRenderComponentCards()
    }
  }
}
</script>
<style scoped>
 .list-menus__main {
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
 }
 .list-menus__main__filters {
   display: flex;
 }
 .list-menus__main__container-cards {
    width: 100%;
    max-width: 1000px;
 }
 .list-menu__main__container__cards__card {
   margin-bottom: 20px;
 }
 .list-menus__info-panel {
   display: flex;
   justify-content: center;
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
