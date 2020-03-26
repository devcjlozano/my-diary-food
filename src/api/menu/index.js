import axios from 'axios'

const saveMenu = menu => axios({
  method: 'post',
  url: 'http://localhost:3001/menus/saveMenu',
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
  url: 'http://localhost:3001/menus/getMenus/',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const getMenu = menuId => axios({
  method: 'get',
  url: `http://localhost:3001/menus/getMenu/${menuId}`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const getCurrentMenu = () => axios({
  method: 'get',
  url: 'http://localhost:3001/menus/getCurrentMenu/',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const updateMenu = menu => axios({
  method: 'put',
  url: `http://localhost:3001/menus/updateMenu/${menu._id}`,
  data: {
    menuDistribution: JSON.stringify(menu.menuDistribution)
  },
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
const searchMenu = payload => axios({
  method: 'get',
  url: payload.textToSearch === '' ? `http://localhost:3001/menus/searchMenu/${payload.startDate}/${payload.endDate}`
    : `http://localhost:3001/menus/searchMenu/${payload.textToSearch}/${payload.startDate}/${payload.endDate}`,
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
