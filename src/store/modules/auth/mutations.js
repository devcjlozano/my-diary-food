import jwtDecode from 'jwt-decode'

const mutations = {
  LOGGIN_SUCCESS (state) {
    state.isLoggedIn = true
  },
  SET_USER (state) {
    const token = window.localStorage.getItem('_token')
    state.user = jwtDecode(token)
  },
  LOGOUT (state) {
    state.user = {}
    state.isLoggedIn = false
  }
}

export default mutations
