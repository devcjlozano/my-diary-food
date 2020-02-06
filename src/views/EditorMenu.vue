<template>
  <div class="editor_menu">
    <div class="editor_menu__title">
      <h1> Editar Menu </h1>
    </div>
    <div
      v-if="Object.keys(menuToEdit).length > 0 && menuDistributionToLoaded"
      class="editor_menu__table">
      <TableEditorMenu
        :menu="menuToEdit"
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
      type: String,
      default: ''
    }
  },
  data () {
    return {
      menuToEdit: {},
      menuDistributionToLoaded: false
    }
  },
  mounted () {
    if (this.menuReceived === '') {
      api.getMenu(this.menuIdParam)
        .then(data => {
          this.menuToEdit = data.data.menu
          this.menuToEdit.menuDistribution = JSON.parse(this.menuToEdit.menuDistribution)
          this.menuDistributionToLoaded = true
        })
    } else {
      this.menuToEdit = this.menuReceived
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
 .editor_menu {
   padding: 0 20px;
   text-align: center;
 }
 .editor_menu__title {
   margin: 30px 0 0
 }
</style>
