import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  listMenus: [],
  currentMenu: {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
