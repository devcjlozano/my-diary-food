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
  },
  async getCurrentMenu ({ commit }, mailUser) {
    try {
      const { data } = await api.getCurrentMenu(mailUser)
      commit('RECEIVE_CURRENT_MENU', data.currentMenu)
    } catch (err) {
      throw (err.response)
    }
  },
  emptyInfoMenus ({ commit }) {
    commit('EMPTY_INFO_MENUS')
  }
}

export default actions
