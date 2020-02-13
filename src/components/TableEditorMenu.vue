<template>
  <div class="table-editor">
    <div class="table-editor__field-name">
      <div class="table-editor__field-name__input">
        <v-text-field
          v-model="menu.name"
          label="Escribe para editar el nombre del menú"
          counter="35"
          maxlength="35"
          :placeholder="getNameMenu()"
          append-icon="mdi-pencil">
        </v-text-field>
      </div>
    </div>
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
              v-for="foodDistribution in menu.menuDistribution"
              :key="foodDistribution.nameFoodDistribution">
              <td
                class="td-food"
                style="width:2%">{{ foodDistribution.nameFoodDistribution }}</td>
              <td class="td-input">
                <v-textarea
                  maxlength="125"
                  v-model="foodDistribution.daysFood.lunes.food"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
                  solo
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.martes.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.miercoles.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.jueves.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.viernes.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.sabado.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="foodDistribution.daysFood.domingo.food"
                  :label="foodDistribution.nameFoodDistribution.toLowerCase()"
                  :rows="esSnack(foodDistribution.nameFoodDistribution) ? '3' : '6'"
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
        <span v-text="isEdit ? 'Guardar cambios': 'Guardar menú'"/>
      </v-btn>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'TableEditorMenu',
  props: {
    menu: {
      type: Object,
      default: () => {}
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    saveMenu () {
      this.$emit('save-menu')
    },
    esSnack (nameFoodDistribution) {
      if (nameFoodDistribution === 'Snack' || nameFoodDistribution === 'Merienda') { return true }
      return false
    },
    getCurrentDate () {
      return moment(Date().now).format('DD/MM/YYYY')
    },
    getNameMenu () {
      return this.menu.name === '' ? `Menu ${this.getCurrentDate()}` : this.menu.name
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
.table-editor__field-name {
  display: flex;
  margin: auto;
  max-width: 1600px;
}
.table-editor__field-name__input {
  width: 300px;
  margin-bottom: 10px;
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
 div /deep/ .v-data-table .v-text-field__details {
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
 @media (min-width: 700px) {
  .table-editor__field-name__input {
     width: 500px;
  }
 }
</style>
