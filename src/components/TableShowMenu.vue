<template>
  <div class="table-show-menu">
    <div class="table-show-menu__info">
      <span> {{`Nombre:\u00A0`}} </span>
      <span class="table-show-menu__info--textname">
        {{ menu.name }}
      </span>
    </div>
    <table cellspacing="0">
      <thead>
        <tr>
          <th></th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
          <th>Sábado</th>
          <th>Domingo</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="foodDistribution in JSON.parse(menu.menuDistribution)"
          :key="foodDistribution.nameFoodDistribution">
          <td :class="esSnack(foodDistribution.nameFoodDistribution) ? 'td-snack' : 'td-no-snack'">
            {{ foodDistribution.nameFoodDistribution }}
          </td>
          <td v-html="foodDistribution.daysFood.lunes.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
          <td v-html="foodDistribution.daysFood.martes.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
          <td v-html="foodDistribution.daysFood.miercoles.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
          <td v-html="foodDistribution.daysFood.jueves.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
          <td v-html="foodDistribution.daysFood.viernes.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
          <td v-html="foodDistribution.daysFood.sabado.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
          <td v-html="foodDistribution.daysFood.domingo.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableShowMenu',
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    esSnack (nameFoodDistribution) {
      if (nameFoodDistribution === 'Snack' || nameFoodDistribution === 'Merienda') { return true }
      return false
    }
  }
}
</script>
<style scoped>
 .table-show-menu__info {
   display: flex;
   margin: auto;
   max-width: 1600px;
   text-align: left;
   font-size: 0.9em;
   margin-bottom: 15px;
 }
 .table-show-menu__info--textname {
   font-weight: bold;
   font-style: italic;
 }
 table {
   width: 100%;
   table-layout: fixed;
   max-width: 1600px;
   min-width: 1000px;
   margin: auto;
   border-collapse: collapse;
 }
 table, td {
   border: 1px solid black
 }
 thead {
   border: solid #00918E;
 }
 th {
   background-color: #00918E;
   color: white;
   border: none
 }
 tbody tr {
  vertical-align: top;
 }
 td {
   padding: 0.5em;
   margin: 0;
   text-align: left;
   font-size: 0.8em;
   word-break: break-word;
 }
 .td-snack,
 .td-no-snack {
   font-weight: bold;
 }
 .td-no-snack {
   height: 180px;
 }
 .td-snack {
   height: 80px;
 }
</style>
