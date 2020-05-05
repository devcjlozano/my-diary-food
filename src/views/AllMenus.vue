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
        message= "Has eliminado el menú correctamente"
        @close-snack-bar="() => snackBarVisible = false"/>
    </div>
    <div>
      <DialogAccept
        :show-dialog-accept="showDialogAccept"
        @accept="acceptDialog"
        @cancel="cancelDialog">
        <template slot="title">
          <span v-text="isDeleteMenu ? 'Eliminar menú' : 'Compartir Menú'"/>
        </template>
        <template slot="description">
          <div v-if="isDeleteMenu">
            <p>
              Vas a eliminar este menú definitivamente.
              ¿Quiéres continuar?
            </p>
          </div>
          <div v-else>
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
        :menu="menuSelected"
        @share-menu="shareMenu"
        @go-to-menu-edit="goToMenuEdit"
        @check-menu-favorite="checkMenuFavorite"
        @delete-menu="deleteMenuSelected"/>
    </div>
    <div class="all-menus__visor-list-menus">
      <VisorMenus
        v-if="showVisorMenus"
        @go-to-menu-edit="goToMenuEdit"
        @share-menu="shareMenu"/>
    </div>
    <LoadDialog
      :load-dialog="loadingSearch"/>
  </div>
</template>
<script>
import ListMenus from '@/components/ListMenus'
import VisorMenus from '@/components/VisorMenus'
import TableShowMenu from '@/components/TableShowMenu'
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
      snackBarVisible: false,
      menuIdToDelete: 0
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  mounted () {
    this.$store.dispatch('menu/getMenus', this.user.email)
      .then(() => {
        this.loadingMenus = false
      }).catch(() => {
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'login' })
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
          this.$store.dispatch('auth/logout')
          this.$router.push({ name: 'login' })
        })
    },
    checkMenuFavorite (menu) {
      this.$store.dispatch('menu/checkMenuFavorite', menu)
    },
    shareMenu (menu) {
      this.isDeleteMenu = false
      this.showDialogAccept = true
      this.menuSelected = menu
    },
    deleteMenuSelected (menuId) {
      this.isDeleteMenu = true
      this.showDialogAccept = true
      this.menuIdToDelete = menuId
    },
    acceptDialog () {
      if (this.isDeleteMenu) {
        if (this.showTableMenu) {
          this.showTableMenu = false
        }
        deleteMenu(this.menuIdToDelete)
          .then(() => {
            this.$store.dispatch('menu/deleteMenu', this.menuIdToDelete)
            this.snackBarVisible = true
          })
          .catch(() => {
            this.$store.dispatch('auth/logout')
            this.$route.push({ name: 'login' })
          })
      } else {
        this.$store.dispatch('menu/shareMenu', this.menuSelected)
          .then(() => {
            this.menuSelected.shared = !this.menuSelected.shared
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
