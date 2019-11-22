<template>
  <div class="home">
    <v-btn
     color='primary'
     @click="logout"
     >
     Logout
    </v-btn>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span> Autenticacion usuario: {{ autenticado }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters('auth', { autenticado: 'isLoggedIn' })
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
