<template>
  <div class="home">
    <ListadoMenus />
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoMenus from '@/components/ListadoMenus.vue'

export default {
  name: 'home',
  components: {
    ListadoMenus
  }
}
</script>
