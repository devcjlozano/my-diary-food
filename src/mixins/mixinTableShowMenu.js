import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  props: {
    menu: {
      type: Object,
      default: () => {}
    },
    isMenuShared: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      moment: moment
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  methods: {
    esSnack (nameFoodDistribution) {
      if (nameFoodDistribution === 'Snack' || nameFoodDistribution === 'Merienda') { return true }
      return false
    },
    goToMenuEdit () {
      this.$emit('go-to-menu-edit', this.menu)
    },
    checkMenuFavorite () {
      this.menu.isFav = !this.menu.isFav
      this.$emit('check-menu-favorite', this.menu)
    },
    checkCurrentMenu () {
      this.$emit('check-current-menu', this.menu._id)
    },
    shareMenu () {
      this.$emit('share-menu', this.menu)
    },
    deleteMenu () {
      this.$emit('delete-menu', this.menu._id)
    }
  }
}
