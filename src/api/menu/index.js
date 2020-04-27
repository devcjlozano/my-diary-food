import axios from 'axios'

const saveMenu = menu => axios({
  method: 'post',
  url: `${process.env.VUE_APP_URL}/menus/saveMenu`,
  data: {
    name: menu.name,
    isFav: menu.isFav,
    shared: menu.shared,
    isCurrent: menu.isCurrent,
    menuDistribution: JSON.stringify(menu.menuDistribution),
    idUser: menu.idUser
  },
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})

const getMenus = () => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/menus/getMenus/`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const getMenu = menuId => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/${menuId}`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const getCurrentMenu = () => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/menus/getCurrentMenu/`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const updateMenu = menu => axios({
  method: 'put',
  url: `${process.env.VUE_APP_URL}/menus/updateMenu/${menu._id}`,
  data: {
    menuDistribution: JSON.stringify(menu.menuDistribution)
  },
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const searchMenu = payload => axios({
  method: 'get',
  url: payload.textToSearch === '' ? `${process.env.VUE_APP_URL}/menus/searchMenu/${payload.startDate}/${payload.endDate}`
    : `${process.env.VUE_APP_URL}/menus/searchMenu/${payload.textToSearch}/${payload.startDate}/${payload.endDate}`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})

export default {
  saveMenu,
  getMenus,
  getMenu,
  getCurrentMenu,
  searchMenu,
  updateMenu
}
