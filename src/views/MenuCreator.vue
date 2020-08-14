<template>
  <div class="menu_creator">
    <div class="menu_creator__title">
      <div class="menu_creator__title__main">
        <h1>
          Nuevo Menú semanal
        </h1>
        <v-icon>
          mdi-chef-hat
        </v-icon>
      </div>
      <div class="menu_creator__title__description">
        <p> Podrás crear menus semanales rápidamente, rellena tus comidas para cada momento
        del día y en la parte inferior dale a guardar, <strong> !así de fácil! </strong> </p>
      </div>
    </div>
    <div
      v-if="!menuIsCreated"
      class="menu_creator__container-table">
      <TableEditorMenu
        :menu="menu"
        @save-menu="saveMenu"/>
    </div>
    <div class="menu_creator__menu-success" v-else>
      <MenuCreatedSuccess
        @go-to-menu-creator="goToMenuCreator"
        @go-to-list-menus="goToListMenus"/>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventbus/event-bus'
import TableEditorMenu from '@/components/TableEditorMenu'
import MenuCreatedSuccess from '@/components/MenuCreatedSuccess'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuCreator',
  components: {
    TableEditorMenu,
    MenuCreatedSuccess
  },
  data: () => ({
    menu: {
      name: '',
      isFav: false,
      shared: false,
      isCurrent: false,
      idUser: '',
      menuDistribution: [
        {
          nameFoodDistribution: 'Desayuno',
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
          nameFoodDistribution: 'Snack',
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
          nameFoodDistribution: 'Almuerzo',
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
          nameFoodDistribution: 'Merienda',
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
          nameFoodDistribution: 'Cena',
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
    },
    menuIsCreated: false
  }),
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  methods: {
    saveMenu () {
      this.menu.idUser = this.user.sub
      this.$store.dispatch('menu/saveMenu', this.menu)
        .then(() => {
          this.menuIsCreated = true
        }).catch(() => {
          EventBus.$emit('logout')
        })
    },
    showMenuSuccess () {
      this.menuIsCreated = true
    },
    goToMenuCreator () {
      this.menuIsCreated = false
    },
    goToListMenus () {
      this.$router.push({ name: 'allmenus' })
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
   flex-direction: column;
   align-items: center;
   margin-top: 80px;
   margin-bottom: 40px;
 }
 .menu_creator__title__main {
   display: flex;
 }
 .menu_creator__title__description {
   max-width: 800px;
 }
 .menu_creator__menu-success {
   display: flex;
   justify-content: center;
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
 @media (min-width: 900px) {
   .menu_creator__title {
     margin-top: 40px;
 }
}
</style>
