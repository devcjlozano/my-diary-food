<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

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

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
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
