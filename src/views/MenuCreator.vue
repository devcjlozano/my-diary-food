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
                :key="dayWeek.dia">
                <td
                  class="td-food"
                  style="width:2%">{{ dayWeek.nameFood }}</td>
                <td class="td-input">
                  <v-textarea
                    :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                    solo
                    label="Escriba alimentos"
                    no-resize></v-textarea>
                </td>
                <td class="td-input">
                  <v-textarea
                    :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                    solo
                    no-resize></v-textarea>
                </td>
                <td class="td-input">
                  <v-textarea
                    :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                    solo
                    no-resize></v-textarea>
                </td>
                <td class="td-input">
                  <v-textarea
                    :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                    solo
                    no-resize></v-textarea>
                </td>
                <td class="td-input">
                  <v-textarea
                    :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                    solo
                    no-resize></v-textarea>
                </td>
                <td class="td-input">
                  <v-textarea
                    :rows="esSnack(dayWeek.nameFood) ? '3' : '5'"
                    solo
                    no-resize></v-textarea>
                </td>
                <td class="td-input">
                  <v-textarea
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    menu: [
      {
        nameFood: 'Desayuno',
        daysFood: [
          {
            lunes: {
              nameDay: 'Lunes',
              food: 'Colacao'
            }
          },
          {
            martes: {
              nameDay: 'Martes',
              food: 'Colacao'
            }
          },
          {
            miercoles: {
              nameDay: 'Miércoles',
              food: 'Colacao'
            }
          },
          {
            jueves: {
              nameDay: 'Jueves',
              food: 'Colacao'
            }
          },
          {
            viernes: {
              nameDay: 'Viernes',
              food: 'Colacao'
            }
          },
          {
            sabado: {
              nameDay: 'Sábado',
              food: 'Colacao'
            }
          },
          {
            domingo: {
              nameDay: 'Domingo',
              food: 'Colacao'
            }
          }
        ]
      },
      {
        nameFood: 'Snack',
        daysFood: [
          {
            lunes: {
              nameDay: 'Lunes',
              food: 'Colacao'
            }
          },
          {
            martes: {
              nameDay: 'Martes',
              food: 'Colacao'
            }
          },
          {
            miercoles: {
              nameDay: 'Miércoles',
              food: 'Colacao'
            }
          },
          {
            jueves: {
              nameDay: 'Jueves',
              food: 'Colacao'
            }
          },
          {
            viernes: {
              nameDay: 'Viernes',
              food: 'Colacao'
            }
          },
          {
            sabado: {
              nameDay: 'Sábado',
              food: 'Colacao'
            }
          },
          {
            domingo: {
              nameDay: 'Domingo',
              food: 'Colacao'
            }
          }
        ]
      },
      {
        nameFood: 'Almuerzo',
        daysFood: [
          {
            lunes: {
              nameDay: 'Lunes',
              food: 'Colacao'
            }
          },
          {
            martes: {
              nameDay: 'Martes',
              food: 'Colacao'
            }
          },
          {
            miercoles: {
              nameDay: 'Miércoles',
              food: 'Colacao'
            }
          },
          {
            jueves: {
              nameDay: 'Jueves',
              food: 'Colacao'
            }
          },
          {
            viernes: {
              nameDay: 'Viernes',
              food: 'Colacao'
            }
          },
          {
            sabado: {
              nameDay: 'Sábado',
              food: 'Colacao'
            }
          },
          {
            domingo: {
              nameDay: 'Domingo',
              food: 'Colacao'
            }
          }
        ]
      },
      {
        nameFood: 'Merienda',
        daysFood: [
          {
            lunes: {
              nameDay: 'Lunes',
              food: 'Colacao'
            }
          },
          {
            martes: {
              nameDay: 'Martes',
              food: 'Colacao'
            }
          },
          {
            miercoles: {
              nameDay: 'Miércoles',
              food: 'Colacao'
            }
          },
          {
            jueves: {
              nameDay: 'Jueves',
              food: 'Colacao'
            }
          },
          {
            viernes: {
              nameDay: 'Viernes',
              food: 'Colacao'
            }
          },
          {
            sabado: {
              nameDay: 'Sábado',
              food: 'Colacao'
            }
          },
          {
            domingo: {
              nameDay: 'Domingo',
              food: 'Colacao'
            }
          }
        ]
      },
      {
        nameFood: 'Cena',
        daysFood: [
          {
            lunes: {
              nameDay: 'Lunes',
              food: 'Colacao'
            }
          },
          {
            martes: {
              nameDay: 'Martes',
              food: 'Colacao'
            }
          },
          {
            miercoles: {
              nameDay: 'Miércoles',
              food: 'Colacao'
            }
          },
          {
            jueves: {
              nameDay: 'Jueves',
              food: 'Colacao'
            }
          },
          {
            viernes: {
              nameDay: 'Viernes',
              food: 'Colacao'
            }
          },
          {
            sabado: {
              nameDay: 'Sábado',
              food: 'Colacao'
            }
          },
          {
            domingo: {
              nameDay: 'Domingo',
              food: 'Colacao'
            }
          }
        ]
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
 @media (min-width: 700px) {
  .menu_creator {
   padding: 0 90px;
 }
}
</style>
