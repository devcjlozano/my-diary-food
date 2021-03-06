<template>
  <div class="all-menus">
    <div class="all-menus__title">
      <h1> Listado de todos tus menús </h1>
      <div class="all-menus__description">
        <span class="all-menus__description"> Aquí podras ver un listado de todos tus menús. Puedes
        ver el que quieras accediendo a la opción de "ver menú" de
        cada tarjeta. También tienes disponible un visor de menús, verás un
        botón en la parte superior derecha de las tarjetas para poder abrirlo,
        desde el visor podrás ir pasando a modo diapositiva cada tabla de tus menús
        </span>
      </div>
    </div>
    <div>
      <SnackBar
        :snack-bar-visible="snackBarVisible"
        :message="getMessageSnack"
        @close-snack-bar="() => snackBarVisible = false"/>
    </div>
    <div>
      <DialogAccept
        :show-dialog-accept="showDialogAccept"
        @accept="acceptDialog"
        @cancel="cancelDialog">
        <template slot="title">
          <span v-if="isDeleteMenu">
             Eliminar menu
          </span>
          <span v-if="isCheckCurrentMenu">
             Marcar menú como actual
          </span>
          <span v-if="!isCheckCurrentMenu && !isDeleteMenu">
             Compartir menú
          </span>
        </template>
        <template slot="description">
          <div v-if="isDeleteMenu">
            <p>
              Vas a eliminar este menú definitivamente.
              ¿Quiéres continuar?
            </p>
          </div>
          <div v-if="isCheckCurrentMenu">
            <p>
              Vas a marcar este menú como tu nuevo menú actual.
              ¿Quiéres continuar?
            </p>
          </div>
          <div v-if="!isCheckCurrentMenu && !isDeleteMenu">
            <p v-if="!menuSelected.shared"> Vas a compartir este menú, si aceptas darás la oportunidad
              a todos los usuarios de verlo y que lo puedan copiar en su
              "diario de dietas". ¿Quiéres compartirlo? </p>
            <p v-else>
              Dejarás de compartir este menú, solo tu podrás verlo.
              ¿Quieres dejar de compartirlo?
            </p>
          </div>
        </template>
      </DialogAccept>
    </div>
    <div
      v-if="!showTableMenu && !showVisorMenus"
      class="all-menus__list">
       <ListMenus
         :loading-menus="loadingMenus"
         @select-menu="selectMenu"
         @show-menus-viewer="showMenusViewer"
         @search-menu="searchMenu"
         @check-current-menu="checkCurrentMenu"
         @delete-menu="deleteMenuSelected"/>
    </div>
    <div
      class="all-menus__back-list"
      v-if="showTableMenu || showVisorMenus">
      <v-btn
        @click="backList"
        color="primary"
        text>
        Volver al listado de mis menus
      </v-btn>
    </div>
    <div
      v-if="showTableMenu && !showVisorMenus"
      class="all-menus__table-menu">
      <TableShowMenu
        class="hidden-xs-only"
        :menu="menuSelected"
        @share-menu="shareMenu"
        @go-to-menu-edit="goToMenuEdit"
        @check-menu-favorite="checkMenuFavorite"
        @check-current-menu="checkCurrentMenu"
        @delete-menu="deleteMenuSelected"/>
      <TableShowMenuMobile
        class="hidden-sm-and-up"
        :menu="menuSelected"
        @share-menu="shareMenu"
        @go-to-menu-edit="goToMenuEdit"
        @check-menu-favorite="checkMenuFavorite"
        @check-current-menu="checkCurrentMenu"
        @delete-menu="deleteMenuSelected"/>
    </div>
    <div class="all-menus__visor-list-menus">
      <VisorMenus
        v-if="showVisorMenus"
        @go-to-menu-edit="goToMenuEdit"
        @share-menu="shareMenu"
        @check-menu-favorite="checkMenuFavorite"
        @check-current-menu="checkCurrentMenu"
        @delete-menu="deleteMenuSelected"/>
    </div>
    <LoadDialog
      :load-dialog="loadingSearch"/>
  </div>
</template>
<script>
import EventBus from '../eventbus/event-bus'
import ListMenus from '@/components/ListMenus'
import VisorMenus from '@/components/VisorMenus'
import TableShowMenu from '@/components/TableShowMenu'
import TableShowMenuMobile from '@/components/TableShowMenuMobile'
import LoadDialog from '@/components/LoadDialog'
import DialogAccept from '@/components/DialogAccept'
import SnackBar from '@/components/SnackBar'
import { deleteMenu } from '@/api/menu'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'AllMenus',
  components: {
    VisorMenus,
    ListMenus,
    TableShowMenu,
    LoadDialog,
    DialogAccept,
    TableShowMenuMobile,
    SnackBar
  },
  data () {
    return {
      menuSelected: {},
      loadingMenus: true,
      loadingSearch: false,
      showTableMenu: false,
      showVisorMenus: false,
      showDialogAccept: false,
      isDeleteMenu: false,
      isCheckCurrentMenu: false,
      snackBarVisible: false,
      menuIdToUpdate: 0
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    }),
    getMessageSnack () {
      if (this.isDeleteMenu) {
        return 'has eliminado correctamente el menú'
      }
      if (this.isCheckCurrentMenu) {
        return 'has marcado este menú como actual correctamente'
      }
      return 'has compartido este menú con los demás usuarios correctamente'
    },
    detectMobile () {
      return window.screen.availWidth <= 500
    }
  },
  mounted () {
    this.$store.dispatch('menu/getMenus', this.user.email)
      .then(() => {
        this.loadingMenus = false
      }).catch(() => {
        EventBus.$emit('logout')
      })
  },
  methods: {
    selectMenu (menuSelected) {
      this.menuSelected = menuSelected
      this.goToSection('all-menus__title')
      this.showTableMenu = true
    },
    showMenusViewer () {
      this.showTableMenu = false
      this.goToSection('all-menus__title')
      this.showVisorMenus = true
    },
    goToSection (section) {
      document.querySelector(`.${section}`).scrollIntoView({
        block: 'start',
        behavior: 'auto'
      })
    },
    backList () {
      this.showTableMenu = false
      this.showVisorMenus = false
      this.goToSection('all-menus__title')
    },
    goToMenuEdit (menu) {
      this.$router.push({
        name: 'editormenu',
        params: {
          menuId: menu._id,
          menuReceived: menu
        }
      })
    },
    searchMenu (textToSearch, dates) {
      this.loadingSearch = true
      this.$store.dispatch('menu/searchMenu', {
        textToSearch,
        startDate: moment(dates[0]).toISOString(),
        endDate: moment(dates[1]).toISOString()
      })
        .then(() => {
          this.loadingSearch = false
        }).catch(() => {
          EventBus.$emit('logout')
        })
    },
    checkMenuFavorite (menu) {
      this.$store.dispatch('menu/checkMenuFavorite', menu)
    },
    checkCurrentMenu (menuId) {
      this.isDeleteMenu = false
      this.isCheckCurrentMenu = true
      this.showDialogAccept = true
      this.menuIdToUpdate = menuId
    },
    shareMenu (menu) {
      this.isDeleteMenu = false
      this.isCheckCurrentMenu = false
      this.showDialogAccept = true
      this.menuSelected = menu
    },
    deleteMenuSelected (menuId) {
      this.isDeleteMenu = true
      this.isCheckCurrentMenu = false
      this.showDialogAccept = true
      this.menuIdToUpdate = menuId
    },
    acceptDialog () {
      if (this.isDeleteMenu) {
        this.showTableMenu = false
        this.showVisorMenus = false
        deleteMenu(this.menuIdToUpdate)
          .then(() => {
            this.$store.dispatch('menu/deleteMenu', this.menuIdToUpdate)
            this.snackBarVisible = true
          })
          .catch(() => {
            EventBus.$emit('logout')
          })
      } else if (this.isCheckCurrentMenu) {
        this.$store.dispatch('menu/checkCurrentMenu', this.menuIdToUpdate)
          .then(() => {
            this.menuSelected.isCurrent = !this.menuSelected.isCurrent
            this.snackBarVisible = true
          })
      } else {
        this.$store.dispatch('menu/shareMenu', this.menuSelected)
          .then(() => {
            this.menuSelected.shared = !this.menuSelected.shared
            this.snackBarVisible = true
          })
      }
      this.showDialogAccept = false
    },
    cancelDialog () {
      this.showDialogAccept = false
    }
  }
}
</script>
<style scoped>
 .all-menus {
   padding: 0 20px;
   text-align: center;
 }
 .all-menus__title {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 80px;
   margin-bottom: 20px;
 }
 .all-menus__description {
   max-width: 800px;
 }
 .all-menus__back-list {
   margin-bottom: 20px
 }
 @media (min-width: 700px) {
   .all-menus {
     padding: 0 40px;
   }
 }
 @media (min-width: 900px) {
   .all-menus__title {
     margin-top: 40px;
   }
 }
</style>
