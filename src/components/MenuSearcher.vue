<template>
  <div class="menu-searcher">
    <div class="menu-searcher__name">
      <v-text-field
        v-model="textToSeach"
        maxlength="60"
        outlined
        placeholder="Escribe para buscar por nombre">
      </v-text-field>
    </div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px">
      <template v-slot:activator="{ on }">
        <v-text-field
          class="menu-searcher__date"
          v-model="dateRangeText"
          outlined
          placeholder="Seleccionar fechas"
          v-on="on"
          readonly/>
      </template>
      <v-date-picker
        locale='es'
        v-model="dates"
        range/>
    </v-menu>
    <v-btn
      class="menu-searcher__button"
      dark
      color="secundary"
      @click="searchMenu">
        Buscar
    </v-btn>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'MenuSearcher',
  data () {
    return {
      menu: '',
      textToSeach: '',
      dates: []
    }
  },
  computed: {
    dateRangeText () {
      if (this.dates[0] !== undefined && this.dates[1] !== undefined) {
        return `${moment(this.dates[0]).format('DD-MM-YYYY')} / ${moment(this.dates[1]).format('DD-MM-YYYY')}`
      }
      return this.dates.join('/')
    }
  },
  methods: {
    searchMenu () {
      this.$emit('search-menu', this.textToSeach, this.dates)
    }
  }
}
</script>
<style scoped>
.menu-searcher {
   display: flex;
   flex-wrap: wrap;
   align-items: baseline;
   margin: 40px 0 40px;
   background-color: #efefef;
   padding: 15px;
 }
 .menu-searcher__name,
 .menu-searcher__date {
   margin-right: 15px;
 }
 .menu-searcher__name {
   min-width: 300px;
 }
 .menu-searcher__date,
 .menu-searcher__button {
    margin-top: 10px;
 }
 .menu-searcher__date {
   min-width: 200px;
 }
 @media (min-width: 735px) {
  .menu-searcher__date,
  .menu-searcher__button {
    margin-top: 0
  }
 }
</style>
