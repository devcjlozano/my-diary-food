<template>
  <div class="menu-searcher">
    <div class="menu-searcher__main">
      <div class="menu-searcher__main__name">
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
            class="menu-searcher__main__date"
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
        class="menu-searcher__main__button"
        dark
        color="secundary"
        @click="searchMenu">
          Buscar
      </v-btn>
    </div>
    <div class="menu-searcher__delete-search">
      <v-btn
        class="menu-searcher__delete-search__button-delete"
        text
        @click="deleteSearch">
        Borrar búsqueda
      </v-btn>
    </div>
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
    },
    deleteSearch () {
      if (this.dates.length > 0 || this.textToSeach !== '') {
        this.textToSeach = ''
        this.dates = []
        this.$emit('search-menu', this.textToSeach, this.dates)
      }
    }
  }
}
</script>
<style scoped>
.menu-searcher {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin: 40px 0 40px;
   background-color: #efefef;
   padding: 15px;
 }
 .menu-searcher__main {
   display: flex;
   align-items: baseline;
   flex-wrap: wrap;
 }
 .menu-searcher__main__name,
 .menu-searcher__main__date {
   margin-right: 15px;
 }
 .menu-searcher__main__name {
   min-width: 300px;
 }
 .menu-searcher__main__date,
 .menu-searcher__main__button {
    margin-top: 10px;
 }
 .menu-searcher__main__date {
   min-width: 200px;
 }
 .menu-searcher__delete-search {
   display: block;
   margin-top: 5px;
   display: flex;
   justify-content: flex-start;
 }
 .menu-searcher__delete-search .v-btn {
   padding: 2px;
 }
 @media (min-width: 735px) {
  .menu-searcher__date,
  .menu-searcher__button {
    margin-top: 0
  }
 }
</style>
