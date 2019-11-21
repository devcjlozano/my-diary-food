import jwtDecode from 'jwt-decode'

const mutations = {
  LOGGIN_SUCCESS (state) {
    state.isLoggedIn = true
  },
  SET_USER (state, { token }) {
    window.localStorage.setItem('_token', token)
    state.user = jwtDecode(token)
  },
  LOGOUT (state) {
    window.localStorage.removeItem('_token')
    state.user = {}
    state.isLoggedIn = false
  }
}

export default mutations
