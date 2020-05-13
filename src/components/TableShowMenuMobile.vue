<template>
  <div>
    <div class="table-show-menu__info">
      <div class="table-show-menu__info__left">
        <div>
          <span> {{`Nombre:\u00A0`}} </span>
          <span class="table-show-menu__info__left--value">
           {{ menu.name }}
            <span
               class="table-show-menu__info__left--value--current"
               v-if="menu.isCurrent && this.$route.name !== 'home' && !isMenuShared">
                 (este es tu menú actual)
            </span>
          </span>
          <span
              v-if="isMenuShared && menu.user.email === user.email">
               (Este menú ha sido compartido por tí)
            </span>
        </div>
        <div>
          <span v-text="!isMenuShared ? 'Cuando lo creaste: ' : 'Cuando fue creado: '"/>
          <span class="table-show-menu__info__left--value">
           {{ moment(menu.createdDate).format('DD/MM/YYYY') }}
          </span>
        </div>
        <div v-if="isMenuShared">
          <span v-text="'Ha sido compartido por: '"/>
          <span
            v-text="menu.user.name"
            class="table-show-menu__info__left--value"/>
        </div>
        <div v-if="!isMenuShared">
          <span> {{`Lo has compartido con lo demás:\u00A0`}} </span>
          <span class="table-show-menu__info__left--value">
            {{menu.shared ? 'Si' : 'No'}}
          </span>
        </div>
      </div>
      <div
        v-if="!isMenuShared"
        class="table-show-menu__info__rigth">
        <div>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
               <v-icon
                @click="goToMenuEdit"
                 v-on="on"
                 color="#00918E"
                 class="table-show-menu__info__rigth__icon">
                 mdi-pencil
               </v-icon>
            </template>
            <span>Editar Menú</span>
         </v-tooltip>
         <v-tooltip top>
            <template v-slot:activator="{ on }">
               <v-icon
                @click="checkCurrentMenu"
                 v-on="on"
                 :disabled="menu.iscurrent"
                 :color="menu.isCurrent ? '#11013357' : '#3F51B5'"
                 class="table-show-menu__info__rigth__icon pin">
                 mdi-pin
               </v-icon>
            </template>
            <span v-text="menu.isCurrent ? 'Este ya es tu menú actual' : 'Marcar este menú como actual'"></span>
         </v-tooltip>
         <v-tooltip top>
           <template v-slot:activator="{ on }">
             <v-icon
               class="table-show-menu__info__rigth__icon"
               @click="checkMenuFavorite"
               v-on="on"
               v-if="menu.isFav"
               color="red">
                 mdi-heart
             </v-icon>
             <v-icon
              class="table-show-menu__info__rigth__icon"
              @click="checkMenuFavorite"
              v-on="on"
              v-else>
                mdi-heart-outline
              </v-icon>
           </template>
          <span v-text="menu.isFav ? 'Quitar de favoritos' : 'Marcar como favorito'"/>
         </v-tooltip>
         <v-tooltip top>
            <template v-slot:activator="{ on }">
               <v-icon
                 v-on="on"
                 color="#110133"
                 class="table-show-menu__info__rigth__icon"
                 @click="shareMenu">
                   mdi-share-variant
               </v-icon>
            </template>
            <span v-text="menu.shared ? 'Dejar de compartir el menú' : 'Compartir este menú' "/>
         </v-tooltip>
         <v-tooltip top>
           <template v-slot:activator="{ on }">
             <v-icon
                v-on="on"
                :disabled="menu.iscurrent"
                :color="menu.isCurrent ? '#11013357' : '#110133'"
                class="table-show-menu__info__rigth__icon"
                @click="deleteMenu">
                   mdi-delete
               </v-icon>
            </template>
            <span
              v-text="menu.isCurrent ? 'No puedes eliminar el menú que tienes marcado como actual' : 'Eliminar este menú' "/>
         </v-tooltip>
        </div>
      </div>
    </div>
    <table class="table-mobile" cellspacing="0">
      <thead>
        <th> Menu </th>
      </thead>
     <tbody>
        <tr
          v-for="menu in listadoMapeado"
          :key="menu.nameDay">
          <td>
            <div class="table-mobile__name-food">
              <span class="table-mobile__name-food__text">{{ menu.nameDay }}</span>
            </div>
            <div class="table-mobile__dayweek">
              <div class="table-mobile__dayweek__cell">
                <span class="table-mobile__dayweek__cell__name-day">
                  Desayuno
                </span>
              </div>
              <div class="table-mobile__dayweek__cell">
                <span
                  v-html="menu.Desayuno.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
              </div>
            </div>
            <div class="table-mobile__dayweek">
              <div class="table-mobile__dayweek__cell">
                <span class="table-mobile__dayweek__cell__name-day">
                  Snack
                </span>
              </div>
              <div class="table-mobile__dayweek__cell">
                <span
                  v-html="menu.Snack.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
              </div>
            </div>
            <div class="table-mobile__dayweek">
              <div class="table-mobile__dayweek__cell">
                <span class="table-mobile__dayweek__cell__name-day">
                  Almuerzo
                </span>
              </div>
              <div class="table-mobile__dayweek__cell">
                <span
                 v-html="menu.Almuerzo.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
              </div>
            </div>
            <div class="table-mobile__dayweek">
              <div class="table-mobile__dayweek__cell">
                <span class="table-mobile__dayweek__cell__name-day">
                  Merienda
                </span>
              </div>
              <div class="table-mobile__dayweek__cell">
               <span
                  v-html="menu.Merienda.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
              </div>
            </div>
            <div class="table-mobile__dayweek border-none">
              <div class="table-mobile__dayweek__cell">
                <span class="table-mobile__dayweek__cell__name-day">
                  Cena
                </span>
              </div>
              <div class="table-mobile__dayweek__cell">
                <span
                  v-html="menu.Cena.food.replace(/(?:\r\n|\r|\n)/g, '<br />')"/>
              </div>
            </div>
          </td>
        </tr>
     </tbody>
  </table>
  </div>
</template>

<script>
import mixinTableShowMenu from '@/mixins/mixinTableShowMenu.js'

export default {
  name: 'TableShowMenuMobile',
  mixins: [mixinTableShowMenu],
  mounted () {
    const menuParseado = JSON.parse(this.menu.menuDistribution)
    let nameKeyDay = ''
    const arrayConstruido = []
    menuParseado.forEach(foodDistribution => {
      for (let i = 0; i < 7; i++) {
        switch (i) {
          case 0:
            nameKeyDay = 'lunes'
            break
          case 1:
            nameKeyDay = 'martes'
            break
          case 2:
            nameKeyDay = 'miercoles'
            break
          case 3:
            nameKeyDay = 'jueves'
            break
          case 4:
            nameKeyDay = 'viernes'
            break
          case 5:
            nameKeyDay = 'sabado'
            break
          case 6:
            nameKeyDay = 'domingo'
            break
        }
        if (!arrayConstruido[i]) {
          const newObject = {
            nameDay: foodDistribution.daysFood[nameKeyDay].nameDay,
            [foodDistribution.nameFoodDistribution]: foodDistribution.daysFood[nameKeyDay]
          }
          arrayConstruido[i] = newObject
        } else {
          arrayConstruido[i].nameDay = foodDistribution.daysFood[nameKeyDay].nameDay
          arrayConstruido[i][foodDistribution.nameFoodDistribution] = foodDistribution.daysFood[nameKeyDay]
        }
      }
    })
    this.listadoMapeado = [...arrayConstruido]
  },
  data () {
    return {
      listadoMapeado: []
    }
  }
}
</script>
<style scoped>
 table {
   width: 100%;
   table-layout: fixed;
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
   margin: 0;
   text-align: left;
   font-size: 0.8em;
   word-break: break-word;
 }
 .table-mobile__name-food {
   padding: 5px;
   text-align: center;
   background-color: #16918e2b;
 }
 .table-mobile__name-food__text {
   font-size: 1.3em;
   font-weight: bold;
 }
 .table-mobile__dayweek {
  display: flex;
  margin-top:1px;
  margin-bottom: 1px;
  border-bottom: 1px solid;
 }
 .table-mobile__dayweek.border-none {
  border-bottom: none;
 }
 .table-mobile__dayweek__cell {
   width: 50%;
   padding: 10px;
 }
 .table-mobile__dayweek__cell__name-day {
   font-weight: bold;
 }
 .table-show-menu__info {
   display: flex;
   flex-direction: column;
   margin: auto;
   max-width: 1600px;
   text-align: left;
   font-size: 0.9em;
   margin-bottom: 15px;
 }
 .table-show-menu__info__left {
   display: flex;
   flex-direction: column;
   margin-right: 10px;
 }
 .table-show-menu__info__rigth {
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
 }
 .table-show-menu__info__left--value {
   font-weight: bold;
   font-style: italic;
 }
 .table-show-menu__info__left--value--current {
   font-weight: normal;
 }
 .table-show-menu__info__rigth__icon {
   margin-right: 8px;
 }
 .table-show-menu__info__rigth__icon.pin {
   transform: rotate(20deg);
 }
</style>
