<template>
  <v-app>
    <NavLoggedDesktop
      :user="user"
      v-if="isLoggedIn" />
    <NavLoggedMobile
      :user="user"
      v-if="isLoggedIn" />
    <v-content>
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
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavLoggedDesktop,
    NavLoggedMobile
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('auth', {
      isLoggedIn: 'isLoggedIn',
      user: 'user'
    })
  }
}
</script>
<style scoped>
.v-content {
  background-color: white;
}
 .footer {
  display: flex;
  justify-content: center;
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
</style>
