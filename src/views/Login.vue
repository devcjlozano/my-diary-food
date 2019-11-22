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
          height="56px"
          class=" custom-transform-class text-none btn-own"
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
    </div>
    <div class="login__info">
      <h1 class="login__info__card--title"> My diary food</h1>
      <h3 class="login__info__card--subtitle"> Un subtitulo</h3>
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
      errorLogin: false
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.errorLogin = false
        this.$router.push({ name: 'home' })
      }).catch(() => {
        this.errorLogin = true
      })
    },
    keypress (e) {
      if (e.keyCode === 13) {
        this.signIn()
      }
    }
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
 .login__form__new-account {
   display: flex;
   justify-content: center;
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
