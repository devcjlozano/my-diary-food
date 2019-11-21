import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  isLoggedIn: false,
  user: {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
