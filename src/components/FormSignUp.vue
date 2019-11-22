<template>
  <div
    class="form-signup">
    <div class="form-signup__title">
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
    <div class="form-signup__subtitle">
       <div>
         <span> Crea tu cuenta</span>
         <span class="form-signup__subtitle--step"> (paso {{step}} / 2) </span>
       </div>
    </div>
    <div
        v-if="step === 1"
        class="form-signup__name">
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
      class="form-signup__surnames">
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
      class="form-signup__mail">
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
      class="form-signup__password">
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
       class="form-signup__register">
        <v-btn
           class="form-signup__register--button"
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
.form-signup__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.form-signup__subtitle {
  color: white;
  margin-bottom: 15px;
  font-size: 1.2em;
}
.form-signup__subtitle--step {
  font-size: 0.8em;
}
 .form-signup__mail,
 .form-signup__name,
 .form-signup__surnames,
 .form-signup__password {
   display: flex;
   flex-direction: column;
   color: #110133
 }
 .form-signup__register--button {
    width: 100%;
    display: flex;
 }
 div /deep/ .v-text-field--outlined > .v-input__control > .v-input__slot {
    background: #02bfba
 }

 div /deep/ .v-input input {
   color: red;
 }
 @media (min-width: 480px) {
   .form-signup {
      width: 440px;
      padding: 10px 20px 60px 20px;
   }
 }
 @media (min-width: 900px) {
   .form-signup {
      width: 500px;
      padding: 10px 20px 130px 20px;
   }
   .form-signup__subtitle {
      font-size: 1.3em;
      margin-bottom: 25px;
   }
 }
 @media (min-width: 1200px) {
   .form-signup {
      width: 550px;
   }
   .form-signup__title {
      margin-bottom: 26px;
   }
   .form-signup__subtitle {
      margin-bottom: 30px;
      font-size: 1.5em;
   }
 }
</style>
