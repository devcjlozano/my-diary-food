<template>
  <v-dialog
    v-model="dialog"
    persistent
    width="300">
    <v-card
      class="loadDialog__card"
      dark>
      <v-card-text>
        Cargando, un momento por favor...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'LoadDialog',
  props: {
    loadDialog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialog: {
      get () {
        return this.loadDialog
      }
    }
  }
}
</script>
<style scoped>
 .loadDialog__card {
   padding: 20px;
   background-color: #1010108c;
 }
</style>
