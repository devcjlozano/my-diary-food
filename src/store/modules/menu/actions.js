import api from '@/api/menu'

const actions = {
  async saveMenu ({ commit }, payload) {
    try {
      const { data } = await api.saveMenu(payload)
      commit('SAVE_MENU', data.menu)
    } catch (err) {
      throw (err.response)
    }
  }
}

export default actions
