<template>
  <div class="home">
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
  }
}
</script>
