import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  isLoggedIn: !!window.localStorage.getItem('_token'),
  user: {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
