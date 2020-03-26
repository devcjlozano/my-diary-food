
const mutations = {
  SAVE_MENU (state, menu) {
    state.listMenus.push(menu)
  },
  UPDATE_MENU (state, menu) {
    const indexMenu = state.listMenus.findIndex(menuItem => menuItem._id === menu.__id)
    state.listMenus[indexMenu] = menu
  },
  RECEIVE_MENUS (state, menus) {
    state.listMenus = menus
  },
  RECEIVE_CURRENT_MENU (state, currentMenu) {
    state.currentMenu = currentMenu
  },
  EMPTY_INFO_MENUS (state) {
    state.listMenus = []
    state.currentMenu = {}
  }
}
export default mutations
