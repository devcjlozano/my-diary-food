import axios from 'axios'

const signUp = payload => axios({
  method: 'post',
  url: `${process.env.VUE_APP_URL}/user/signUp`,
  data: {
    name: payload.name,
    email: payload.email,
    surNames: payload.surNames,
    password: payload.password
  }
})

const signIn = (email, password) => axios({
  method: 'post',
  url: `${process.env.VUE_APP_URL}/user/signIn`,
  data: {
    email: email,
    password: password
  }
})

const signInWithGoogle = token => axios({
  method: 'post',
  url: `${process.env.VUE_APP_URL}/user/signInWithGoogle`,
  data: {
    token
  }
})

export default {
  signUp,
  signIn,
  signInWithGoogle
}
