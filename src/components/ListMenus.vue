<template>
  <div class="list-menus">
    <div
      class="list-menus__main"
      v-if="listMenus.length > 0">
      <div class="list-menus__main__filters">
        <div class="list-menus__main__filters__name">
          <v-text-field
            maxlength="60"
            outlined
            placeholder="Escribe para buscar por nombre">
          </v-text-field>
        </div>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              class="list-menus__main__filters__date"
              v-model="dateRangeText"
              outlined
              placeholder="Seleccionar fechas"
              v-on="on"
              readonly/>
          </template>
          <v-date-picker
            v-model="dates"
            range/>
        </v-menu>
        <v-btn
          dark
          color="secundary">
            Buscar
        </v-btn>
      </div>
      <transition
        appear
        name="fade"
        mode="out-in">
        <div
          :key="componentKey"
          class="list-menus__main__container-cards">
          <div class="list-menus__main__button-viewer">
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
      menu: '',
      dates: [],
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
    },
    dateRangeText () {
      return this.dates.join(' / ')
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
   flex-wrap: wrap;
   align-items: baseline;
   margin: 40px 0 40px;
   background-color: #efefef;
   padding: 15px;
 }
 .list-menus__main__filters__name,
 .list-menus__main__filters__date {
   margin-right: 15px;
 }
 .list-menus__main__filters__name {
   min-width: 300px;
 }
 .list-menus__main__filters__date {
   min-width: 200px;
 }
 .list-menus__main__container-cards {
    width: 100%;
    max-width: 1000px;
 }
 .list-menu__main__container__cards__card {
   margin-bottom: 20px;
 }
 .list-menus__main__button-viewer {
   display: flex;
   justify-content: flex-end;
   margin-bottom: 10px;
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
