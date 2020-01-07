import axios from 'axios'

const saveMenu = payload => axios({
  method: 'post',
  url: 'http://localhost:3001/menus/saveMenu',
  data: {
    name: payload.name,
    isFav: payload.isFav,
    shared: payload.shared,
    isCurrent: payload.isCurrent,
    menu: payload.menu,
    idUser: payload.idUser
  }
})

export default {
  saveMenu
}
