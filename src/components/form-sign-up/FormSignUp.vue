<template>
  <div
    class="form-signup">
    <div v-if="!accountCreatedSuccess">
      <div
        class="form-signup__title">
        <div class="form-signup__icon-back">
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
      </div>
      <div
        class="form-signup__subtitle">
        <div>
          <span> Crea tu cuenta</span>
          <span class="form-signup__subtitle--step"> (paso {{step}} / 2) </span>
        </div>
      </div>
      <div>
        <div v-if="step === 1">
          <Step1 :validation="$v"/>
        </div>
        <div v-if="step === 2">
          <Step2 :validation="$v"/>
        </div>
        <div
          class="form-signup__button-next"
          v-if="step === 1">
          <v-btn
            :disabled="disabledButtonNext"
            @click="nextStep"
            dark
            color="#110133"> Siguiente </v-btn>
        </div>
        <div
          v-if="step === 2"
          class="form-signup__register">
            <v-btn
              @click="register"
              :disabled="disabledButtonRegister"
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
              color="#ffe6ad">
              <div class="login__warning__texto">
                <span>
                El correo <span class="login__warning__texto--mail">
                {{ emailTry }} </span> ya está registrado en la aplicación.
                Por favor, revísalo y vuelve a intentarlo </span>
              </div>
            </v-alert>
        </div>
      </div>
    </div>
    <div
      v-if="accountCreatedSuccess">
      <SuccessSignUp />
      <div class="form-signup__button-main">
      <v-btn
        dark
        color="#110133"
        to='/'>
        Ir a página principal
      </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import SuccessSignUp from './components/SuccessSignUp'
import { email } from 'vuelidate/lib/validators'

export default {
  name: 'FormSignUp',
  components: {
    Step1,
    Step2,
    SuccessSignUp
  },
  props: {
    mailExist: {
      type: Boolean,
      default: false
    },
    emailTry: {
      type: String,
      default: ''
    },
    accountCreatedSuccess: {
      type: Boolean,
      default: false
    }
  },
  validations: {
    form: {
      email: { email },
      name: {},
      surNames: {},
      password: {}
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
    },
    disabledButtonRegister () {
      if (this.form.surNames.email === 0 || this.form.password.length === 0) {
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
      this.$v.form.$touch()
      if (!this.$v.form.$error && !this.$v.form.$invalid) {
        this.$emit('register', this.form)
      }
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.form-signup__icon-back {
  position: absolute;
  left: 0;
}
.form-signup__subtitle {
  color: white;
  margin-bottom: 15px;
  font-size: 1.2em;
}
.form-signup__subtitle--step {
  font-size: 0.8em;
}
 .form-signup__button-next {
   display: flex;
   justify-content: flex-end;
 }
 .form-signup__register--button {
    width: 100%;
    display: flex;
 }
 .form-signup__button-main {
    display: flex;
    justify-content: center;
 }
 .login__warning {
    margin-top: 15px;
 }
 .login__warning__texto--mail {
   font-weight: bold;
   font-style: italic;
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
 div /deep/ .v-messages__message {
   color: black;
   background-color: #FFCEC6;
   padding: 10px;
   font-size: 1.1em;
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
