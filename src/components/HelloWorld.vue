<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4><h1> Nuevo Menú semanal </h1> </v-flex>
      <v-flex>
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
        <tbody>
          <tr v-for="item in dias" :key="item.name">
            <td style="width:2%">{{ item.nombre }}</td>
            <td><v-textarea rows="4" label="Escriba cosas" solo no-resize></v-textarea></td>
            <td><v-textarea rows="4" solo no-resize></v-textarea></td>
            <td><v-textarea rows="4" solo no-resize></v-textarea></td>
            <td><v-textarea rows="4" solo no-resize></v-textarea></td>
            <td><v-textarea rows="4" solo no-resize></v-textarea></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    dias: [
      {
        nombre: 'Lunes'
      },
      {
        nombre: 'Martes'
      },
      {
        nombre: 'Miercoles'
      },
      {
        nombre: 'Jueves'
      },
      {
        nombre: 'Viernes'
      },
      {
        nombre: 'Sábado'
      },
      {
        nombre: 'Domingo'
      }
    ]
  })
}
</script>
