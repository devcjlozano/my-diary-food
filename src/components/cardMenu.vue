<template>
  <div class="card-menu">
    <div class="card-menu__body">
      <div class="card-menu__body__icon">
        <v-icon class="card__icon" >mdi-silverware-spoon</v-icon>
      </div>
      <div class="card-menu__body__info">
        <div class="card-menu__body__info__name">
          <span> {{ menu.name }}</span>
        </div>
        <div class="card-menu__body__info__date">
          <span> Cuando lo creaste {{ moment(menu.createdDate).format('DD/MM/YYYY') }}</span>
        </div>
      </div>
    </div>
    <div class="card-menu__body__actions">
       <v-btn dark color="primary">Ver menú</v-btn>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'cardMenu',
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      moment: moment
    }
  }
}
</script>
<style scoped>
.card-menu {
  text-align: left;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  padding: 20px 10px;
  width: 100%
}
.card-menu__body {
  display: flex;
}
.card-menu__body__icon {
  margin-right: 10px;
}
.card-menu__body__info__name {
  font-size: 1.3em;
  font-weight: 400;
}
.card-menu__body__actions {
  text-align: right;
}
 .v-list-item__title,
 .v-list-item__subtitle {
   text-align: left;
   white-space: normal;
 }
 .v-list-item__title,
 .v-list-item__subtitle {
   text-align: left;
 }
 .v-card__actions {
   display: flex;
   justify-content: flex-end;
 }
 .card__icon {
   font-size: 2.8em
 }
</style>
