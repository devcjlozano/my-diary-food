<template>
  <div class="menu_creator">
    <div class="menu_creator__title">
      <h1>
        Nuevo Menú semanal
      </h1>
      <v-icon>
        mdi-chef-hat
      </v-icon>
    </div>
    <div class="menu_creator__subtitle">
      <p> Podrás crear menus semanales rápidamente, rellena tus comidas para cada momento
        del día y en la parte inferior dale a guardar, <strong> !así de fácil! </strong> </p>
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
        @go-to-menu-creator="goToMenuCreator"/>
    </div>
  </div>
</template>

<script>
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
    menu: [
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
    ],
    menuIsCreated: false
  }),
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  methods: {
    saveMenu () {
      const payload = {
        menu: JSON.stringify(this.menu),
        name: 'prueba',
        isFav: false,
        shared: false,
        isCurrent: false,
        idUser: this.user.sub
      }
      this.$store.dispatch('menu/saveMenu', payload)
        .then(() => {
          this.menuIsCreated = true
        }).catch(() => {
          console.log('error')
        })
    },
    showMenuSuccess () {
      this.menuIsCreated = true
    },
    goToMenuCreator () {
      this.menuIsCreated = false
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
   justify-content: center;
   align-items: baseline;
   text-align: center;
   margin: 30px 0 0
 }
 .menu_creator__subtitle {
  margin-bottom: 40px;
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
</style>
