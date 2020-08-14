<template>
  <v-app class="app" :style="{background: $vuetify.theme.themes['light'].background}">
    <NavLoggedDesktop
      v-if="isLoggedIn"
      :user="user"/>
    <NavLoggedMobile
      v-if="isLoggedIn"
      :user="user"
      @show-navigation-drawer="showNavigationDrawer"/>
    <NavigationDrawer
      :navigation-drawer-visible="navigationDrawerVisible"
      @drawer-status="changeDrawerStatus"/>
    <v-content>
      <div
       v-if="routeName !== 'login'"
       class="app__icon-utils">
       <v-img src="./assets/utensilios.png" contain> </v-img>
      </div>
      <router-view/>
    </v-content>
    <footer class="footer">
       <div>
         <div class="footer__container">
           <div class="footer__container__texto">
             <p>Puedes enviarme un saludo escribéndome un
               <a href="mailto:carlosjlp@gmail.com">email</a> o un
               <a
                 href="https://twitter.com/carlosjlp"
                 target="__blank">tweet </a>. Además puedes cotillear mi github en
               <a
                 href="https://github.com/devcjlozano"
                 target="__blank">devcjlozano</a>
             </p>
             <p class="footer__container__texto--info">
                @2019 - Web app programada y diseñada por
                <a
                  href="https://twitter.com/carlosjlp"
                  target="__blank">Carlos Javier </a> usando Vue + Vuetify
              </p>
          </div>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>
import NavLoggedDesktop from '@/components/NavLoggedDesktop'
import NavLoggedMobile from '@/components/NavLoggedMobile'
import NavigationDrawer from '@/components/NavigationDrawer'
import EventBus from './eventbus/event-bus'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavLoggedDesktop,
    NavLoggedMobile,
    NavigationDrawer
  },
  mounted () {
    EventBus.$on('logout', () => {
      // eslint-disable-next-line no-undef
      const auth2 = gapi.auth2.getAuthInstance()
      if (auth2) {
        auth2.disconnect()
      }
      this.$store.dispatch('auth/logout')
      this.$store.dispatch('menu/emptyInfoMenus')
      this.$router.push({ name: 'login' })
    })
  },
  data: () => ({
    navigationDrawerVisible: false
  }),
  computed: {
    ...mapGetters('auth', {
      isLoggedIn: 'isLoggedIn',
      user: 'user'
    }),
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    showNavigationDrawer () {
      this.navigationDrawerVisible = true
    },
    changeDrawerStatus (value) {
      this.navigationDrawerVisible = value
    }
  }
}
</script>
<style scoped>
.app
.v-content {
  background-color: white;
}
.app__icon-utils {
  position: absolute;
  margin-left: 20px;
  margin-top: 10px;
  width: 74px;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding: 20px;
  background-color: #fafafa;
}
.footer__container__texto {
  max-width: 600px;
  text-align: center;
}
.footer__container__texto--info {
  color: #4e4e4e;
}
@media(min-width: 500px) {
  .app__icon-utils {
    width: 130px;
  }
}
@media(min-width: 1200px) {
  .app__icon-utils {
    width: 190px;
  }
}
@media(min-width: 1310px) {
  .app__icon-utils {
    width: 237px;
  }
}
</style>
