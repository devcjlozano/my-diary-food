import axios from 'axios'

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
  signIn,
  logOut
}
