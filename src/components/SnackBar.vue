<template>
  <v-snackbar
    top
    right
    v-model="showSnackBar"
    height="300px"
    :color="color"
    :multi-line="multiline"
    :vertical="vertical"
    :timeout="timeout">
    <div class="snackbar__message">
      {{ message }}
    </div>
  </v-snackbar>
</template>
<script>
export default {
  name: 'SnackBar',
  props: {
    color: {
      type: String,
      default: 'secundary'
    },
    multiline: {
      type: Boolean,
      defaull: false
    },
    vertical: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Number,
      default: 4000
    },
    snackBarVisible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    showSnackBar: {
      get () {
        return this.snackBarVisible
      },
      set () {
        this.$emit('close-snack-bar')
      }
    }
  }

}
</script>
<style scoped>
</style>
