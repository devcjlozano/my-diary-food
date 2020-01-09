import api from '@/api/menu'

const actions = {
  async saveMenu ({ commit }, menu) {
    try {
      const { data } = await api.saveMenu(menu)
      commit('SAVE_MENU', data.menu)
    } catch (err) {
      throw (err.response)
    }
  },
  async getMenus ({ commit }, mailUser) {
    try {
      const { data } = await api.getMenus(mailUser)
      commit('RECEIVE_MENUS', data.menus)
    } catch (err) {
      throw (err.response)
    }
  }
}

export default actions
