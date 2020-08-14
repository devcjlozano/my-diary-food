import api from '@/api/auth'

const actions = {
  async signIn ({ commit }, payload) {
    try {
      const { data } = await api.signIn(payload.email, payload.password)
      commit('LOGGIN_SUCCESS')
      window.localStorage.setItem('_token', data.token)
      commit('SET_USER')
    } catch (err) {
      throw (err.response ? err.response : err)
    }
  },
  async signInWithGoogle ({ commit }, token) {
    try {
      const { data } = await api.signInWithGoogle(token)
      commit('LOGGIN_SUCCESS')
      window.localStorage.setItem('_token', data.token)
      commit('SET_USER')
    } catch (err) {
      throw (err.response ? err.response : err)
    }
  },
  logout ({ commit }) {
    window.localStorage.removeItem('_token')
    commit('LOGOUT')
  }
}

export default actions
