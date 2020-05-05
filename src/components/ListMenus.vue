<template>
  <div class="list-menus">
    <div
      class="list-menus__main"
      v-if="listMenus.length > 0 || searchActive">
      <div>
        <MenuSearcher
          @search-menu="searchMenu"/>
      </div>
      <transition
        appear
        name="fade"
        mode="out-in">
        <div
          v-if="listMenus.length > 0"
          :key="componentKey"
          class="list-menus__main__container-cards">
          <div class="list-menus__main__button-viewer">

            <span class="list-menus__main__button-viewer__info">
              * Podrás marcar un menú como actual, haciendo click
              en la chincheta de la parte superior de cada tarjeta
            </span>
            <v-btn
              color="primary"
              dark
              outlined
              @click="showMenusViewer">
                Visor de menús
            </v-btn>
          </div>
          <div
            class="list-menu__main__container__cards__card"
            v-for="menu in listMenusFiltered"
            :key="menu.id">
            <CardMenu
              @select-menu="selectMenu"
              @delete-menu="deleteMenuSelected"
              :menu="menu"/>
          </div>
        </div>
        <div
          class="list-menu__main__container__cards__not-results"
          v-else>
          No se encontraron resultados
        </div>
      </transition>
      <div class="list-menus__main__paginator">
        <v-pagination
          v-model="numActualPage"
          :length="numPages"/>
      </div>
    </div>
    <div
       v-if="listMenus.length === 0 && !loadingMenus && !searchActive "
       class="list-menus__info-panel">
      <InfoPanel
       :main-text="textInfoPanel">
         <router-link
            class="info-panel__link"
            to='/menucreator'> Crear menu </router-link>
      </InfoPanel>
    </div>
  </div>
</template>

<script>
import CardMenu from '@/components/CardMenu'
import InfoPanel from '@/components/InfoPanel'
import MenuSearcher from '@/components/MenuSearcher'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'ListMenus',
  components: {
    CardMenu,
    InfoPanel,
    MenuSearcher
  },
  props: {
    loadingMenus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      numActualPage: 1,
      numCardByPage: 5,
      componentKey: 0,
      searchActive: false,
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
    },
    showMenusViewer () {
      this.$emit('show-menus-viewer')
    },
    searchMenu (textToSeach, dates) {
      let auxDates = dates
      if (auxDates.length < 2) {
        auxDates = []
        const startDate = '1970-01-01'
        const endDate = moment(Date.now()).format('YYYY-MM-DD')
        auxDates.push(startDate, endDate)
      }
      this.searchActive = true
      this.$emit('search-menu', textToSeach, auxDates)
    },
    deleteMenuSelected (menuId) {
      this.$emit('delete-menu', menuId)
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
 .list-menus__main__container-cards {
    width: 100%;
    max-width: 1000px;
 }
 .list-menu__main__container__cards__card {
   margin-bottom: 20px;
 }
 .list-menu__main__container__cards__not-results {
  margin-bottom: 10px;
 }
 .list-menus__main__button-viewer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 10px;
 }
 .list-menus__main__button-viewer__info {
   text-align: left;
   font-size: 0.8em;
   margin-right: 30px;
 }
 .list-menus__info-panel {
   display: flex;
   justify-content: center;
 }
 .info-panel__link {
   color: white;
 }
 .fade-enter-active,
 .fade-leave-active {
  transition: opacity .3s ease
 }
 .fade-enter,
 .fade-leave-to {
   opacity: 0
 }
 div /deep/ .v-text-field__details {
   display: none;
 }
 div /deep/ .v-text-field--outlined > .v-input__control > .v-input__slot{
   margin: 0;
   background-color: white;
 }
</style>
