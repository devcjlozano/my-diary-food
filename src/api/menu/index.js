import axios from 'axios'

export const saveMenu = menu => axios({
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

export const getMenus = () => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/menus/getMenus/`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
export const getSharedMenus = () => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/menus/getSharedMenus/`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
export const getMenu = menuId => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/menus/getMenu/${menuId}`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
export const getCurrentMenu = () => axios({
  method: 'get',
  url: `${process.env.VUE_APP_URL}/menus/getCurrentMenu/`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
export const updateMenu = menu => axios({
  method: 'put',
  url: `${process.env.VUE_APP_URL}/menus/updateMenu/${menu._id}`,
  data: {
    menuDistribution: JSON.stringify(menu.menuDistribution),
    name: menu.name
  },
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})
export const deleteMenu = idMenu => axios({
  method: 'delete',
  url: `${process.env.VUE_APP_URL}/menus/deleteMenu/${idMenu}`,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})

export const checkMenuFavorite = menu => axios({
  method: 'put',
  url: `${process.env.VUE_APP_URL}/menus/updateMenu/${menu._id}`,
  data: {
    isFav: menu.isFav
  },
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})

export const shareMenu = menu => axios({
  method: 'put',
  url: `${process.env.VUE_APP_URL}/menus/updateMenu/${menu._id}`,
  data: {
    shared: !menu.shared
  },
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('_token')
  }
})

export const searchMenu = payload => axios({
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
  updateMenu,
  checkMenuFavorite,
  shareMenu,
  deleteMenu,
  getSharedMenus
}
