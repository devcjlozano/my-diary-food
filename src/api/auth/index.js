import axios from 'axios'

const signUp = payload => axios({
  method: 'post',
  url: 'http://localhost:3001/user/signUp',
  data: {
    name: payload.name,
    email: payload.email,
    surNames: payload.surNames,
    password: payload.password
  }
})

const signIn = (email, password) => axios({
  method: 'post',
  url: 'http://localhost:3001/user/signIn',
  data: {
    email: email,
    password: password
  }
})
const logOut = (email, passwword) => axios({
  method: 'post',
  url: 'http://localhost:3001/user/signIn',
  email,
  passwword,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default {
  signUp,
  signIn,
  logOut
}
