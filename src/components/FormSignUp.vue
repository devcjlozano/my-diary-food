<template>
  <div
    class="form-signup">
    <div class="form-signup--title">
       <div>
         <v-btn
           @click="previousStep"
           icon
           color="white"
           v-if="step === 2"
           >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
       </div>
       <span class="logo"> My diary food</span>
       <v-btn
         :disabled="disabledButtonNext"
         @click="nextStep"
         dark
         color="#110133"> Siguiente </v-btn>
    </div>
    <div class="form-signup--subtitle">
       <div>
         <span> Crea tu cuenta</span>
       </div>
    </div>
    <div
        v-if="step === 1"
        class="form-signup--name">
      <span> Nombre </span>
      <v-text-field
        color="#110133"
        v-model="name"
        outlined
        placeholder="Nombre">
      </v-text-field>
    </div>
    <div
      v-if="step === 1"
      class="form-signup--surnames">
      <span> Apellidos </span>
      <v-text-field
        color="#110133"
        v-model="surnames"
        outlined
        placeholder="Apellidos">
      </v-text-field>
    </div>
    <div
      v-if="step === 2"
      class="form-signup--mail">
      <span> Correo electrónico </span>
      <v-text-field
        color="#110133"
        v-model="email"
        outlined
        placeholder="Correo electrónico">
      </v-text-field>
    </div>
    <div
      v-if="step === 2"
      class="form-signup--password">
      <span> Contraseña </span>
      <v-text-field
        color="#110133"
        type="password"
        v-model="password"
        outlined
        placeholder="Contraseña">
        </v-text-field>
     </div>
     <div
       v-if="step === 2"
       class="form-signup--register">
        <v-btn
           class="form-signup--register--button"
           height="56px"
           dark
           color="#110133"
         >
         Registrarse
        </v-btn>
     </div>
  </div>
</template>
<script>
export default {
  name: 'FormSignUp',
  data () {
    return {
      step: 1,
      email: '',
      name: '',
      surnames: '',
      password: ''
    }
  },
  computed: {
    disabledButtonNext () {
      if (this.name.length === 0 || this.surnames.length === 0 || this.step === 2) {
        return true
      }
      return false
    }
  },
  methods: {
    nextStep () {
      this.step = 2
    },
    previousStep () {
      this.step = 1
    }
  }
}
</script>
<style scoped>
.form-signup {
  background-color: #00aeaa;
  color: #110133;
  padding: 10px 20px 40px 20px;
  border-radius: 10px;
  width: 100%;
}
.logo {
  font-size: 1.1em;
}
.form-signup--title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.form-signup--subtitle {
  margin-bottom: 15px;
  font-size: 1.2em;
}
 .form-signup--mail,
 .form-signup--name,
 .form-signup--surnames,
 .form-signup--password {
   display: flex;
   flex-direction: column;
   color: #110133
 }
 .form-signup--register--button {
    width: 100%;
    display: flex;
 }
 div /deep/ .v-text-field--outlined fieldset {
   border-color: #110133;
 }
 div /deep/ .v-input input {
   color: red;
 }
</style>
