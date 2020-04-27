<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500">
      <v-card>
        <v-card-title primary-title>
          <slot name="title"/>
        </v-card-title>
        <v-card-text>
          <slot name="description"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="cancel">
              Cancelar
          </v-btn>
          <v-btn
            color="primary"
            @click="accept">
              Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogAccept',
  props: {
    showDialogAccept: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialog: {
      get () {
        return this.showDialogAccept
      },
      set () {
        this.$emit('cancel')
      }
    }
  },
  methods: {
    accept () {
      this.$emit('accept')
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
