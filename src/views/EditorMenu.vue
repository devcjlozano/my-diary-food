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
      v-if="Object.keys(menuToEdit).length > 0 && menuDistributionToLoaded"
      class="editor-menu__table">
      <TableEditorMenu
        :menu="menuToEdit"
        :is-edit="true"
        @save-menu="saveMenu"/>
    </div>
  </div>
</template>

<script>
import api from '@/api/menu'
import TableEditorMenu from '@/components/TableEditorMenu'

export default {
  name: 'EditorMenu',
  components: {
    TableEditorMenu
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
      menuDistributionToLoaded: false
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
    saveMenu () {}
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
