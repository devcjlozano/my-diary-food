<template>
  <div class="card-menu">
    <div class="card-menu__body">
      <div class="card-menu__body__avatar">
        <v-avatar
          size="124"
          tile>
            <v-img src="../assets/chefHat.png" contain></v-img>
        </v-avatar>
      </div>
      <div class="card-menu__body__info">
        <div class="card-menu__body__info__name">
          <span> {{ menu.name }} </span>
          <span
            class="card_menu__body__info__name__text-actual"
            v-if="menu.isCurrent"> (Este es tu menú actual) </span>
        </div>
        <div class="card-menu__body__info__date">
          <span
            v-text="isMenuShared ? 'Cuando fue creado: ' : 'Cuando lo creaste: '"
            class="label"/>
          <span class="text-value">{{ moment(menu.createdDate).format('DD/MM/YYYY') }}</span>
        </div>
        <div
          v-if="isMenuShared"
          class="card-menu__body__info__name-share">
          <span
            v-text="'Ha sido compartido por: '"
            class="label"/>
          <span class="text-value">
             {{menu.user.name}}
          </span>
          <div v-if="menu.user.email === user.email">
            <span class="text-value--menu-own">
              (Esté menu ha sido compartido por tí)
            </span>
          </div>
        </div>
        <div
          v-if="!isMenuShared"
          class="card-menu__body__info__favorite">
          <span class="label"> Es uno de tus favoritos: </span>
          <span class="text-value">{{ menu.isFav ? 'Si' : 'No' }}</span>
        </div>
        <div
          v-if="!isMenuShared"
          class="card-menu__body__info__favorite">
          <span class="label"> Lo has compartido con los demás: </span>
          <span class="text-value"> {{ menu.shared ? 'Si' : 'No' }}</span>
        </div>
      </div>
    </div>
    <div class="card-menu__body__actions">
      <v-tooltip
        v-if="!isMenuShared"
        :disabled="!menu.isCurrent"
        top>
        <template v-slot:activator="{ on }">
          <div
            v-on="on">
            <v-btn
              class="card-menu__body__actions__deleted"
              color="#ED5E68"
              :outlined="true"
              :disabled="menu.isCurrent"
              @click="deleteMenu">
                Eliminar menú
            </v-btn>
          </div>
        </template>
        <span>No puedes eliminar tu menú actual</span>
      </v-tooltip>
       <v-btn
         dark
         @click="selectMenu"
         color="primary">
           Ver menú
      </v-btn>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'cardMenu',
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
    selectMenu () {
      this.$emit('select-menu', this.menu)
    },
    deleteMenu () {
      this.$emit('delete-menu', this.menu._id)
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
  .card_menu__body__info__name__text-actual {
    font-size: 0.8em;
    font-style: italic;
    font-weight: 300;
  }
  .card-menu__body__info__name-share {
    margin-top: 20px;
  }
  .card-menu__body__avatar {
    margin-right: 20px;
  }
  .card-menu__body__info__name {
    font-size: 1.3em;
    font-weight: 400;
  }
  .card-menu__body__actions {
    display: flex;
    justify-content: flex-end;
  }
  .card-menu__body__actions__deleted {
    margin-right: 20px;
  }
  .card__icon {
    font-size: 2.8em
  }
  .label {
    font-weight: 300;
  }
  .text-value {
    font-weight: bold;
  }
  .text-value--menu-own {
    font-size: 0.9em;
  }
</style>
