<template>
  <v-navigation-drawer
    v-model="drawVisible"
    fixed>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Herramientas
        </v-list-item-title>
        <v-list-item-subtitle>
          My diary food
        </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list
      dense
      nav>
      <v-list-item
        :to="{ name: 'home'}"
        link>
        <v-list-item-content>
          <v-list-item-title>
            Menu actual
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
     <v-list-item
       :to="{ name: 'allmenus'}"
        link>
       <v-list-item-content>
         <v-list-item-title>
           Todos mis menús
         </v-list-item-title>
       </v-list-item-content>
     </v-list-item>
     <v-list-item
       :to="{ name: 'menucreator'}"
        link>
       <v-list-item-content>
         <v-list-item-title>
           Crear Menu
         </v-list-item-title>
       </v-list-item-content>
     </v-list-item>
     <v-list-item
       :to="{ name: 'shareMenus'}"
        link>
       <v-list-item-content>
         <v-list-item-title>
           Menús compartidos
         </v-list-item-title>
       </v-list-item-content>
     </v-list-item>
   </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'NavigationDrawer',
  props: {
    navigationDrawerVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      drawVisible: false
    }
  },
  watch: {
    navigationDrawerVisible (value) {
      this.drawVisible = value
    },
    drawVisible (value) {
      this.$emit('drawer-status', value)
    }
  }
}
</script>
