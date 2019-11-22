import api from '@/api/auth'

const actions = {
  async signIn ({ commit }, payload) {
    try {
      const { data } = await api.signIn(payload.email, payload.password)
      commit('LOGGIN_SUCCESS')
      window.localStorage.setItem('_token', data.token)
      commit('SET_USER')
    } catch (err) {
      if (err.response) {
        throw (err.response)
      } else {
        throw (err)
      }
    }
  },
  logout ({ commit }) {
    window.localStorage.removeItem('_token')
    commit('LOGOUT')
  }
}

export default actions
