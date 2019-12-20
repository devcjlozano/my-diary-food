<template>
  <div class="menu_creator">
    <div class="menu_creator__title">
      <h1>
        Nuevo Menú semanal
      </h1>
      <v-icon>
        mdi-chef-hat
      </v-icon>
    </div>
    <div class="menu_creator__subtitle">
      <p> Podrás crear menus semanales rápidamente, rellena tus comidas para cada momento
        del día y en la parte inferior dale a guardar, <strong> !así de fácil! </strong> </p>
    </div>
    <div class="menu_creator__container-table">
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
              v-for="dayWeek in menu"
              :key="dayWeek.nameFood">
              <td
                class="td-food"
                style="width:2%">{{ dayWeek.nameFood }}</td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.lunes.food"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  :label="dayWeek.nameFood.toLowerCase()"
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.martes.food"
                  :label="dayWeek.nameFood.toLowerCase()"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.miercoles.food"
                  :label="dayWeek.nameFood.toLowerCase()"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.jueves.food"
                  :label="dayWeek.nameFood.toLowerCase()"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.viernes.food"
                  :label="dayWeek.nameFood.toLowerCase()"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.sabado.food"
                  :label="dayWeek.nameFood.toLowerCase()"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
              <td class="td-input">
                <v-textarea
                  v-model="dayWeek.daysFood.domingo.food"
                  :label="dayWeek.nameFood.toLowerCase()"
                  :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                  solo
                  no-resize></v-textarea>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCreator',

  data: () => ({
    menu: [
      {
        nameFood: 'Desayuno',
        daysFood: {
          lunes: {
            nameDay: 'Lunes',
            food: ''
          },
          martes: {
            nameDay: 'Martes',
            food: ''
          },
          miercoles: {
            nameDay: 'Miércoles',
            food: ''
          },
          jueves: {
            nameDay: 'Jueves',
            food: ''
          },
          viernes: {
            nameDay: 'Viernes',
            food: ''
          },
          sabado: {
            nameDay: 'Sábado',
            food: ''
          },
          domingo: {
            nameDay: 'Domingo',
            food: ''
          }
        }
      },
      {
        nameFood: 'Snack',
        daysFood: {
          lunes: {
            nameDay: 'Lunes',
            food: ''
          },
          martes: {
            nameDay: 'Martes',
            food: ''
          },
          miercoles: {
            nameDay: 'Miércoles',
            food: ''
          },
          jueves: {
            nameDay: 'Jueves',
            food: ''
          },
          viernes: {
            nameDay: 'Viernes',
            food: ''
          },
          sabado: {
            nameDay: 'Sábado',
            food: ''
          },
          domingo: {
            nameDay: 'Domingo',
            food: ''
          }
        }
      },
      {
        nameFood: 'Almuerzo',
        daysFood: {
          lunes: {
            nameDay: 'Lunes',
            food: ''
          },
          martes: {
            nameDay: 'Martes',
            food: ''
          },
          miercoles: {
            nameDay: 'Miércoles',
            food: ''
          },
          jueves: {
            nameDay: 'Jueves',
            food: ''
          },
          viernes: {
            nameDay: 'Viernes',
            food: ''
          },
          sabado: {
            nameDay: 'Sábado',
            food: ''
          },
          domingo: {
            nameDay: 'Domingo',
            food: ''
          }
        }
      },
      {
        nameFood: 'Merienda',
        daysFood: {
          lunes: {
            nameDay: 'Lunes',
            food: ''
          },
          martes: {
            nameDay: 'Martes',
            food: ''
          },
          miercoles: {
            nameDay: 'Miércoles',
            food: ''
          },
          jueves: {
            nameDay: 'Jueves',
            food: ''
          },
          viernes: {
            nameDay: 'Viernes',
            food: ''
          },
          sabado: {
            nameDay: 'Sábado',
            food: ''
          },
          domingo: {
            nameDay: 'Domingo',
            food: ''
          }
        }
      },
      {
        nameFood: 'Cena',
        daysFood: {
          lunes: {
            nameDay: 'Lunes',
            food: ''
          },
          martes: {
            nameDay: 'Martes',
            food: ''
          },
          miercoles: {
            nameDay: 'Miércoles',
            food: ''
          },
          jueves: {
            nameDay: 'Jueves',
            food: ''
          },
          viernes: {
            nameDay: 'Viernes',
            food: ''
          },
          sabado: {
            nameDay: 'Sábado',
            food: ''
          },
          domingo: {
            nameDay: 'Domingo',
            food: ''
          }
        }
      }
    ]
  }),
  methods: {
    esSnack (nameFood) {
      if (nameFood === 'Snack' || nameFood === 'Merienda') { return true }
      return false
    }
  }
}
</script>
<style scoped>
 .menu_creator {
   padding: 0 20px;
   text-align: center;
 }
 .menu_creator__title {
   display: flex;
   justify-content: center;
   align-items: baseline;
   text-align: center;
   margin: 30px 0 0
 }
 .menu_creator__subtitle {
  margin-bottom: 40px;
 }
 .menu_creator__container-table {
   overflow: visible;
   overflow-x: visible;
   overflow-y: hidden;
   white-space: nowrap;
   font-size: 0.8em;
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
 div /deep/ .v-icon {
   color: black;
   font-size: 1.7em;
   margin-left: 10px;
 }
 @media (min-width: 700px) {
  .menu_creator {
   padding: 0 90px;
 }
}
</style>
