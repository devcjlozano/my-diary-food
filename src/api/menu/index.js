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
const getCurrentMenu = () => axios({
  method: 'get',
  url: 'http://localhost:3001/menus/getCurrentMenu/',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})

export default {
  saveMenu,
  getMenus,
  getCurrentMenu
}
