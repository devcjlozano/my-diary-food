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
  }
})

export default {
  saveMenu
}
