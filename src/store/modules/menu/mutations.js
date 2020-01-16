
const mutations = {
  SAVE_MENU (state, menu) {
    state.listMenus.push(menu)
  },
  RECEIVE_MENUS (state, menus) {
    state.listMenus = menus
  },
  RECEIVE_CURRENT_MENU (state, currentMenu) {
    state.currentMenu = currentMenu
  }
}
export default mutations
