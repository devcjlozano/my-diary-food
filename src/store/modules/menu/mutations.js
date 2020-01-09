
const mutations = {
  SAVE_MENU (state, menu) {
    state.listMenus.push(menu)
  },
  RECEIVE_MENUS (state, menus) {
    state.listMenus = menus
  }
}
export default mutations
