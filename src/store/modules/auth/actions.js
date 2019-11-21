import api from '@/api/auth'

const actions = {
  async signIn ({ commit }, payload) {
    try {
      const { data } = await api.signIn(payload.email, payload.password)
      commit('LOGGIN_SUCCESS')
      commit('SET_USER', data)
    } catch (err) {
      if (err.response) {
        throw (err.response)
      } else {
        throw (err)
      }
    }
  },
  logout ({ commit }) {
    commit('LOGOUT')
  }
}

export default actions
