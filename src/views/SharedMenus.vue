<template>
  <div class="shared-menus">
    <div class="shared-menus__title">
      <h1> Menús compartidos </h1>
      <div class="shared-menus__title__description">
        <span>
          Aquí podras ver un listado de todos los menús que los
          usuarios habéis compartido. Podrás ver el menú y copiarlo en
          tu diario simplemente haciendo "click" en el botón "Ver menú" y
          después seleccionando la opción, "copiar menú"
        </span>
      </div>
    </div>
    <div
      v-if="!showTableMenu"
      class="shared-menus__listado">
      <ListSharedMenus
        @select-menu="selectMenu"/>
    </div>
    <div v-if="showTableMenu">
      <v-btn
        @click="backList"
        color="primary"
        text>
        Volver al listado de menus compartidos
      </v-btn>
    </div>
    <div v-if="showTableMenu">
      <TableShowMenu
        :is-menu-shared="true"
        :menu="menuSelected"/>
    </div>
  </div>
</template>

<script>
import ListSharedMenus from '@/components/ListSharedMenus'
import TableShowMenu from '@/components/TableShowMenu'

export default {
  name: 'SharedMenus',
  components: {
    ListSharedMenus,
    TableShowMenu
  },
  mounted () {
    this.$store.dispatch('menu/getSharedMenus')
      .then(() => {})
      .catch(() => {
        this.$store.dispatch('auth/logout')
        this.$router.push({ name: 'login' })
      })
  },
  data () {
    return {
      menuSelected: {},
      showTableMenu: false
    }
  },
  methods: {
    selectMenu (menu) {
      this.menuSelected = menu
      this.showTableMenu = true
    },
    goToSection (section) {
      document.querySelector(`.${section}`).scrollIntoView({
        block: 'start',
        behavior: 'auto'
      })
    },
    backList () {
      this.showTableMenu = false
      this.goToSection('shared-menus__title')
    }
  }
}
</script>
<style scoped>
  .shared-menus {
    padding: 0 20px;
    text-align: center;
  }
  .shared-menus__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .shared-menus__title__description {
     max-width: 800px;
  }
  @media (min-width: 700px) {
   .shared-menus {
     padding: 0 40px;
  }
 }
  @media (min-width: 900px) {
   .shared-menus__title {
     margin-top: 40px;
  }
 }
</style>
