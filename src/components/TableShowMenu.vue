<template>
  <div class="table-show-menu">
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
                @click="goToMenuEdit"
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
    <div style="overflow-x:auto;">
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
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'TableShowMenu',
  props: {
    menu: {
      type: Object,
      default: () => {}
    },
    isMenuShared: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      moment: moment
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  methods: {
    esSnack (nameFoodDistribution) {
      if (nameFoodDistribution === 'Snack' || nameFoodDistribution === 'Merienda') { return true }
      return false
    },
    goToMenuEdit () {
      this.$emit('go-to-menu-edit', this.menu)
    },
    checkMenuFavorite () {
      this.menu.isFav = !this.menu.isFav
      this.$emit('check-menu-favorite', this.menu)
    },
    shareMenu () {
      this.$emit('share-menu', this.menu)
    },
    deleteMenu () {
      this.$emit('delete-menu', this.menu._id)
    }
  }
}
</script>
<style scoped>
 .table-show-menu__info {
   display: flex;
   justify-content: space-between;
   margin: auto;
   max-width: 1600px;
   text-align: left;
   font-size: 0.9em;
   margin-bottom: 15px;
 }
 .table-show-menu__info__left {
   display: flex;
   flex-direction: column;
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
