<template>
  <div class="menu_creator">
    <div class="menu_creator__container-table"
      text-center
      wrap
    >
      <div class="menu_creator__container-table__title">
        <h1> Nuevo Menú semanal </h1>
      </div>
      <div class="menu_creator__container-table__table">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Dia</th>
                <th class="text-center">DESAYUNO</th>
                <th class="text-center">SNACK</th>
                <th class="text-center">ALMUERZO</th>
                <th class="text-center">MERIENDA</th>
                <th class="text-center">CENA</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                 v-for="dayWeek in menu"
                :key="dayWeek.dia">
                <td style="width:2%">{{ dayWeek.day.charAt(0) }}</td>
                <td class="td-input"><v-textarea rows="4" label="Escriba cosas" solo no-resize></v-textarea></td>
                <td class="td-input"><v-textarea rows="4" solo no-resize></v-textarea></td>
                <td class="td-input"><v-textarea rows="4" solo no-resize></v-textarea></td>
                <td class="td-input"><v-textarea rows="4" solo no-resize></v-textarea></td>
                <td class="td-input"><v-textarea rows="4" solo no-resize></v-textarea></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    menu: [
      {
        day: 'Lunes'
      },
      {
        day: 'Martes'
      },
      {
        day: 'Miercoles'
      },
      {
        day: 'Jueves'
      },
      {
        day: 'Viernes'
      },
      {
        day: 'Sábado'
      },
      {
        day: 'Domingo'
      }
    ]
  })
}
</script>
<style scoped>
 .menu_creator {
   padding: 0 20px;
 }
 .menu_creator__container-table__title {
   text-align: center;
   margin: 20px 0;
 }
 .menu_creator__container-table__table {
   overflow: visible;
   overflow-x: visible;
   overflow-y: hidden;
   white-space: nowrap;
   font-size: 0.8em;
 }
 .td-input {
   padding: 0 5px;
 }
 div /deep/ .v-data-table {
   margin: auto;
   min-width: 1000px;
   max-width: 1600px;
 }
 div /deep/ .v-textarea .v-input__control {
   font-size: 0.8em;
 }
 div /deep/ .v-textarea .v-label {
   font-size: 0.9em;
 }
 div /deep/ .v-text-field__details {
   display: none
 }
 @media (min-width: 700px) {
  .menu_creator {
   padding: 0 90px;
 }
}
</style>
