import api from '@/api/auth'

const actions = {
  async signIn ({ commit }, payload) {
    try {
      const { data } = await api.signIn(payload.email, payload.password)
      console.log(data)
      commit('LOGGIN_SUCCESS', data)
    } catch (err) {
      if (err.response) {
        throw (err.response)
      } else {
        throw (err)
      }
    }
  }
}

export default actions
