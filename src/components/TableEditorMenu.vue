<template>
  <div class="table-editor">
    <div class="table-editor__table">
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center"></th>
              <th class="text-center">Lunes</th>
              <th class="text-center">Martes</th>
              <th class="text-center">Miércoles</th>
              <th class="text-center">Jueves</th>
              <th class="text-center">Viernes</th>
              <th class="text-center">Sábado</th>
              <th class="text-center">Domingo</th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              v-for="foodDistribution in menu"
              :key="foodDistribution.nameFoodDistribution">
              <td
                class="td-food"
                style="width:2%">{{ foodDistribution.nameFoodDistribution }}</td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.lunes.food"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.martes.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.miercoles.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.jueves.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.viernes.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.sabado.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.domingo.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="table-editor__footer">
      <span class="mtable-editor__footer__text-information">
         *Recuerda rellenar todas las comidas de la semana
      </span>
      <v-btn
        @click="saveMenu"
        class="custom-transform-class text-none btn-own"
        color="primary">
          Guardar menú
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableEditorMenu',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    saveMenu () {
      this.$emit('save-menu')
    },
    esSnack (nameFoodDistribution) {
      if (nameFoodDistribution === 'Snack' || nameFoodDistribution === 'Merienda') { return true }
      return false
    }
  }
}
</script>

<style scoped>
.table-editor__table {
  overflow: visible;
  overflow-x: visible;
  overflow-y: hidden;
  white-space: nowrap;
  font-size: 0.8em;
}
 div /deep/ .v-data-table {
   margin: auto;
   min-width: 1000px;
   max-width: 1600px;
 }
 div /deep/ .v-data-table th{
   background-color: #00918E;
 }
 .theme--light.v-data-table thead tr th {
   color: white;
 }
 div /deep/ .v-input__slot {
   margin-top: 8px;
 }
 div /deep/ .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {
   margin-top: 0;
 }
 div /deep/ .v-textarea .v-input__control {
   font-size: 0.8em;
 }
 div /deep/ .v-textarea .v-label {
   top: 7px !important;
   font-size: 0.9em;
 }
 div /deep/ .v-text-field__details {
   display: none
 }
.td-food {
   width: 2%;
 }
 .td-input {
   border-bottom: none !important;
 }
 .td-input {
   padding: 0 5px;
 }
 .table-editor__footer {
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;
   max-width: 1600px;
   margin: 10px auto;
   padding-right: 4px;
 }
 .table-editor__footer__text-information {
   margin-right: 10px;
   font-style: italic;
 }
</style>
