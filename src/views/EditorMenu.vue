<template>
  <div class="editor-menu">
    <div class="editor-menu__title">
      <h1> Editar Menu </h1>
      <div class="editor-menu__description">
        <span>
          Puedes realizar cualquier cambio que quieras de tu menú
          y guardarlos con el botón de la parte inferior derecha.
          ¡Así de fácil!
        </span>
      </div>
    </div>
    <div
      v-if="Object.keys(menuToEdit).length > 0 && menuDistributionToLoaded && !saveSuccess"
      class="editor-menu__table">
      <TableEditorMenu
        :menu="menuToEdit"
        :is-edit="true"
        @save-menu="saveMenu"/>
    </div>
    <div
      v-if="saveSuccess"
      class="editor-menu__success">
      <InfoPanel
        :mainText="textSuccess">
        <slot>
          <div class="editor-menu__success__buttons">
            <v-btn
              color="secundary"
              text
              @click="goToMenus">
                Ir a todos tus menús
            </v-btn> o
            <div class="editor-menu__success__button-back-edit">
              <v-btn
                color="secundary"
                dark
                @click="backEdit">
                  Volver a editar
              </v-btn>
            </div>
          </div>
        </slot>
      </InfoPanel>
    </div>
  </div>
</template>

<script>
import api from '@/api/menu'
import TableEditorMenu from '@/components/TableEditorMenu'
import InfoPanel from '@/components/InfoPanel'

export default {
  name: 'EditorMenu',
  components: {
    TableEditorMenu,
    InfoPanel
  },
  props: {
    menuReceived: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      menuToEdit: {},
      saveSuccess: false,
      menuDistributionToLoaded: false,
      textSuccess: `<h3>Has editado el menú correctamente</h3> 
       <p> ¿Qué quieres hacer ahora ?</p>`
    }
  },
  mounted () {
    if (this.menuReceived === undefined) {
      api.getMenu(this.menuIdParam)
        .then(data => {
          this.menuToEdit = data.data.menu
          this.menuToEdit.menuDistribution = JSON.parse(this.menuToEdit.menuDistribution)
          this.menuDistributionToLoaded = true
        })
    } else {
      this.menuToEdit = { ...this.menuReceived }
      this.menuToEdit.menuDistribution = JSON.parse(this.menuToEdit.menuDistribution)
      this.menuDistributionToLoaded = true
    }
  },
  computed: {
    menuIdParam () {
      return this.$route.params.menuId
    }
  },
  methods: {
    saveMenu () {
      this.$store.dispatch('menu/updateMenu', this.menuToEdit)
        .then(() => {
          this.saveSuccess = true
        }).catch(e => {
          this.$store.dispatch('auth/logout')
          this.$router.push({ name: 'login' })
        })
    },
    backEdit () {
      this.saveSuccess = false
    },
    goToMenus () {
      this.$router.push({ name: 'allmenus' })
    }
  }
}
</script>
<style scoped>
 .editor-menu {
   padding: 0 20px;
   text-align: center;
 }
 .editor-menu__title {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 80px 0 0
 }
 .editor-menu__description {
   max-width: 800px;
 }
 .editor-menu__success {
   display: flex;
   justify-content: center;
 }
 .editor-menu__success__buttons {
   display: flex;
   justify-content: center;
   align-items: baseline;
 }
 .editor-menu__success__button-back-edit {
   margin-left: 18px;
 }
 @media (min-width: 700px) {
   .editor-menu {
     padding: 0 90px;
    }
 }
 @media (min-width: 900px) {
   .editor-menu__title {
     margin: 45px 0 0
    }
 }
</style>
