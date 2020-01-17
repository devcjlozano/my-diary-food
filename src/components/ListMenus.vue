<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar
          tile
          size="80">
        <v-icon >mdi-silverware-spoon</v-icon></v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ListMenus',
  props: {
    listMenus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>
