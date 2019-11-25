<template>
  <div
    class="form-signup">
    <div
      v-if="!accountCreatedSuccess"
      class="form-signup__title">
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
    <div
      v-if="!accountCreatedSuccess"
      class="form-signup__subtitle">
       <div>
         <span> Crea tu cuenta</span>
         <span class="form-signup__subtitle--step"> (paso {{step}} / 2) </span>
       </div>
    </div>
    <div
      v-if="!accountCreatedSuccess">
      <div
          v-if="step === 1"
          class="form-signup__name">
        <span> Nombre </span>
        <v-text-field
          color="#110133"
          v-model="form.name"
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
          v-model="form.surNames"
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
          v-model="form.email"
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
          v-model="form.password"
          outlined
          placeholder="Contraseña">
          </v-text-field>
      </div>
      <div
        v-if="step === 2"
        class="form-signup__register">
          <v-btn
            @click="register"
            class="form-signup__register--button"
            height="56px"
            dark
            color="#110133"
          >
          Registrarse
          </v-btn>
      </div>
      <div
          v-if="step === 2 && mailExist"
          class="login__warning">
          <v-alert
            color="#fbae00">
            <div class="login__warning__texto">
              <span>
              El correo ya está registrado en la aplicación.
              Por favor, revísalo y vuelve a intentarlo </span>
            </div>
          </v-alert>
       </div>
    </div>
    <div
      class="form-signup__success"
      v-if="accountCreatedSuccess">
      <div class="form-signup__success__title">
        <h1> My diary Food</h1>
      </div>
      <div class="form-signup__success__subtitle">
        <p class="form-signup__success__subtitle--parrafo">
          ¡Tu cuenta ha sido creada correctamente!
        </p>
        <p class="form-signup__success__subtitle--parrafo">
          Muchas gracias por registrarte
        </p>
        <p class="form-signup__success__subtitle--parrafo">
          Puedes acceder a la página principal para acceder
          con los datos de la cuenta que acabas de crear haciendo click
          en el botón de abajo.
        </p>
      </div>
      <div>
        <v-btn
         height="56px"
         @click="nextStep"
         dark
         to="/"
         color="#110133"> Ir a página principal
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormSignUp',
  props: {
    mailExist: {
      type: Boolean,
      default: false
    },
    accountCreatedSuccess: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      step: 1,
      form:
        {
          email: '',
          name: '',
          surNames: '',
          password: ''
        }
    }
  },
  computed: {
    disabledButtonNext () {
      if (this.form.name.length === 0 || this.form.surNames.length === 0 || this.step === 2) {
        return true
      }
      return false
    }
  },
  methods: {
    nextStep () {
      this.step += 1
    },
    previousStep () {
      this.step -= 1
    },
    register () {
      this.$emit('register', this.form)
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
 .login__warning {
    margin-top: 15px;
 }
 .form-signup__success {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .form-signup__success__title {
   margin-bottom: 20px;
 }
 .form-signup__success__subtitle {
   margin-bottom: 35px;
 }
 .form-signup__success__subtitle--parrafo {
   text-align: center;
 }
 div /deep/ .theme--light.v-text-field--outlined fieldset {
   border-color: #110133;
 }
 div /deep/ .v-text-field--outlined > .v-input__control > .v-input__slot {
    background: white;
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
   .form-signup__success__subtitle--parrafo {
     font-size: 1.2em;
   }
 }
</style>
