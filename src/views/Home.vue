<template>
  <div class="home">
    <div class="home__title">
      <h1> Menú actual </h1>
      <div class="home_title__description">
        <span>
          Este es el menú que tienes marcado como actual,
           podrás editarlo si haces click en el botón que hay
           encima de la tabla a la derecha
        </span>
      </div>
    </div>
    <div>
      <DialogAccept
        :show-dialog-accept="showDialogAccept"
        @accept="acceptDialog"
        @cancel="cancelDialog">
        <template slot="title">
          Compartir menú
        </template>
        <template slot="description">
          <p v-if="!currentMenu.shared"> Vas a compartir este menú, si aceptas darás la oportunidad
            a todos los usuarios de verlo y que lo puedan copiar en su
            "diario de dietas". ¿Quiéres compartirlo? </p>
          <p v-else>
             Dejarás de compartir este menú, solo tu podrás verlo.
             ¿Quieres dejar de compartirlo?
          </p>
        </template>
      </DialogAccept>
    </div>
    <transition
      appear
      name="fade"
      mode="out-in">
      <div
        v-if="Object.keys(currentMenu).length !== 0"
        class="home__table-menu">
        <TableShowMenu
          class="hidden-xs-only"
          :menu="currentMenu"
          @go-to-menu-edit="goToMenuEdit"
          @check-menu-favorite="checkMenuFavorite"
          @share-menu="shareMenu"/>
        <TableShowMenuMobile
          class="hidden-sm-and-up"
          :menu="currentMenu"
          @go-to-menu-edit="goToMenuEdit"
          @check-menu-favorite="checkMenuFavorite"
          @share-menu="shareMenu"/>
      </div>
    </transition>
    <div
      class="home__menu-empty"
      v-if="Object.keys(currentMenu).length === 0 && menusIsLoad">
      <InfoPanel
       :main-text="textInfoPanel">
         <router-link
            class="info-panel__link"
            to='/menucreator'> Crear menu </router-link>
      </InfoPanel>
    </div>
    <div v-if="!menusIsLoad">
      <v-sheet
        color="lighten-4'"
        class="px-3 pt-3 pb-12">
        <v-skeleton-loader
          boilerplate
          class="skeleton__heading"
          type="heading"/>
        <v-skeleton-loader
          boilerplate
          class="mx-auto"
          type="table-tbody"/>
      </v-sheet>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventBus from '../eventbus/event-bus'
import TableShowMenu from '@/components/TableShowMenu'
import TableShowMenuMobile from '@/components/TableShowMenuMobile'
import InfoPanel from '@/components/InfoPanel'
import DialogAccept from '@/components/DialogAccept'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    TableShowMenu,
    InfoPanel,
    DialogAccept,
    TableShowMenuMobile
  },
  data () {
    return {
      menusIsLoad: false,
      componentKey: 0,
      textInfoPanel: '',
      showDialogAccept: false
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    }),
    ...mapGetters('menu', {
      currentMenu: 'currentMenu'
    })
  },
  mounted () {
    this.$store.dispatch('menu/getCurrentMenu')
      .then(() => {
        this.textInfoPanel = `<p>Parece que no tienes ningún menú creado</p>
        <p> Puedes crear un menú haciendo click en el siguiente enlace</p>`
        this.menusIsLoad = true
      }).catch(() => {
        EventBus.$emit('logout')
      })
  },
  methods: {
    goToMenuEdit (menu) {
      this.$router.push({
        name: 'editormenu',
        params: {
          menuId: menu._id,
          menuReceived: menu
        }
      })
    },
    checkMenuFavorite () {
      this.$store.dispatch('menu/checkMenuFavorite', this.currentMenu)
    },
    shareMenu () {
      this.showDialogAccept = true
    },
    acceptDialog () {
      this.$store.dispatch('menu/shareMenu', this.currentMenu)
        .then(() => {
          this.showDialogAccept = false
          this.currentMenu.shared = !this.currentMenu.shared
        })
    },
    cancelDialog () {
      this.showDialogAccept = false
    }
  }
}
</script>
<style scoped>
 .home {
   padding: 0 20px;
   text-align: center;
 }
 .home__title {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 80px;
   margin-bottom: 40px;
 }
 .home_title__description {
   max-width: 800px;
 }
 .home__table-menu {
   overflow: auto
 }
 .home__menu-empty {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .info-panel__link {
   color: white
 }
 .fade-enter-active,
 .fade-leave-active {
  transition: opacity .3s ease
 }
 .fade-enter,
 .fade-leave-to {
   opacity: 0
 }
 .skeleton__heading {
   display: flex;
   justify-content: center;
 }
 @media (min-width: 700px) {
   .home {
     padding: 0 40px;
  }
 }
 @media (min-width: 900px) {
   .home__title {
     margin-top: 40px;
  }
 }
</style>>
