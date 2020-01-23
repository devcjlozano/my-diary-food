<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Cuando lo creaste: {{ moment(menu.createdDate).format('DD/MM/YYYY')}}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar
          tile
          size="80">
        <v-icon class="card__icon" >mdi-silverware-spoon</v-icon></v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Ver menú</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'cardMenu',
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      moment: moment
    }
  }
}
</script>
<style scoped>
 .v-list-item__title,
 .v-list-item__subtitle {
   text-align: left;
   white-space: normal;
 }
 .v-list-item__title,
 .v-list-item__subtitle {
   text-align: left;
 }
 .v-card__actions {
   display: flex;
   justify-content: flex-end;
 }
 .card__icon {
   font-size: 2.8em
 }
</style>
