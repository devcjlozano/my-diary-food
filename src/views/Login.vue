<template>
  <div class="login">
    <h1 class="login__title"> My diary food </h1>
    <div class="login__form">
      <div
        v-if="errorLogin"
        class="login__error">
        <v-alert
          dark
          color="error">
          <div class="login__error__texto">
            <span>
             El correo y la contraseña no coinciden con ningún registro.
             Por favor, revísalo y vuelve a intentarlo </span>
          </div>
        </v-alert>
      </div>
      <div class="login__form--mail">
        <span> Correo electrónico </span>
        <v-text-field
          v-model="email"
          outlined
          placeholder="Correo electrónico"
          @keydown="keypress">
        </v-text-field>
      </div>
      <div class="login__form--key">
        <span> Contraseña </span>
        <v-text-field
          type="password"
          v-model="password"
          outlined
          placeholder="Contraseña"
          @keydown="keypress">
        </v-text-field>
      </div>
      <div class="login__form__button">
        <v-btn
          @click="signIn"
          :disabled="disabledButtonEnter"
          height="56px"
          class="custom-transform-class text-none btn-own"
          color="primary">
          Entrar
        </v-btn>
      </div>
      <div class="login__form__new-account">
        <v-btn
          class="custom-transform-class text-none btn-own"
          color="primary"
          to='/signup'
          text>
          Crear cuenta nueva
        </v-btn>
      </div>
      <div class="login__form__google">
        <!--<div id="google-signin-button"></div>-->
       <div id="btn-google">
         <v-btn
           class="custom-transform-class text-none"
           outlined>
           <v-icon left color="#4285F4">
             mdi-google
           </v-icon>
           <span class="btn-google__text">Entrar con Google</span>
         </v-btn>
       </div>
      </div>
    </div>
    <div class="login__info">
      <h1 class="login__info__card--title"> My diary food</h1>
      <h3 class="login__info__card--subtitle"> Tu app para controlar tus menús semanales</h3>
      <div class="login__info__card">
         <p> Controla tus menús semanales </p>
         <p> Podrás marcar tus menús favoritos </p>
         <p> Descargalos en pdf </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      errorLogin: false,
      disabledButtonEnter: false,
      disabledButtonGoogle: false,
      googleUser: {},
      auth2: {}
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.startGoogleSign()
  },
  methods: {
    signIn () {
      this.disabledButtonEnter = true
      this.signInMyDiary()
    },
    startGoogleSign () {
      // eslint-disable-next-line no-undef
      gapi.load('auth2', () => {
        // eslint-disable-next-line no-undef
        this.auth2 = gapi.auth2.init({
          client_id: '1020914206371-1l0naarjoi3ibn8ur2rt3h4ao9kfr281.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin'
        })
        this.attachSignin(document.getElementById('btn-google'))
      })
    },
    attachSignin (element) {
      this.auth2.attachClickHandler(element, {}, googleUser => {
        const idtoken = googleUser.getAuthResponse().id_token
        this.disabledButtonGoogle = true
        this.signInMyDiaryWithGoogle(idtoken)
      }, err => {
        console.log(JSON.stringify(err, undefined, 2))
      })
    },
    keypress (e) {
      if (e.keyCode === 13) {
        this.signIn()
      }
    },
    async signInMyDiary () {
      try {
        await this.$store.dispatch('auth/signIn', {
          email: this.email,
          password: this.password
        })
        this.errorLogin = false
        this.$router.push({ name: 'home' })
      } catch (err) {
        this.disabledButtonEnter = false
        this.errorLogin = true
      }
    },
    async signInMyDiaryWithGoogle (idtoken) {}
  }
}
</script>
<style scoped>
 .login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
 }
 .login__error__texto {
   font-size: 0.9em;
 }
 .login__title {
   margin-bottom: 20px;
 }
 .login__form {
    width: 100%;
    margin-bottom: 40px;
 }
 .login__form--key,
 .login__form--mail,
 .login__form__button {
   display: flex;
   flex-direction: column;
 }
 .login__form__button {
   margin-bottom: 18px;
 }
 .login__info {
   width: 100%;
 }
 .login__info__card--title,
 .login__info__card--subtitle {
   display: none;
 }
 .login__info__card {
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   padding: 20px;
   border-radius: 10px;
   color: white;
   background-color: #00918e;
  }
 .login__form__new-account,
 .login__form__google {
   display: flex;
   justify-content: center;
 }
 .login__form__google {
   margin-top: 15px;
 }
@media (min-width: 700px) {
  .login {
    flex-direction: row-reverse;
    height: 100%;
  }
  .login__title {
    display: none;
  }
  .login__form {
    width: 300px;
    margin-bottom: 0;
  }
  .login__info {
    width: 250px;
    margin-right: 80px;
  }
  .login__info__card--title,
  .login__info__card--subtitle{
    display: block;
    margin-bottom: 20px;
  }
}
@media (min-width: 900px) {
  div /deep/ .btn-own {
    font-size: 1.0em;
  }
  .login__form{
    width: 350px;
  }
  .login__info {
    width: 290px;
    margin-right: 160px;
  }
}
@media (min-width: 1200px) {
  .login__info {
    width: 400px;
    margin-right: 200px;
  }
  .login__form {
    width: 400px;
  }
  .login__info__card {
    height: 210px;
    font-size: 1.1em;
  }
}
</style>
