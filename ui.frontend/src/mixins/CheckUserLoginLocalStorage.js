export default {
  mounted () {
    this.checkUserLoginLocalStorage()
  },
  methods: {
    checkUserLoginLocalStorage () {
      const userLogin = JSON.parse(localStorage.getItem('userLogin'))
      const { path } = this.$route
      const { isInEditor } = this.$attrs.componentProperties

      if (!isInEditor) {
        if (
          path === '/content/vue/login.html' &&
          userLogin &&
          userLogin.login
        ) {
          this.$store.commit('loginManager/setLogin', userLogin)
          window.location.pathname = '/content/vue/home.html'
        } else if (
          path === '/content/vue/home.html' &&
          userLogin &&
          !userLogin.login
        ) {
          this.$store.commit('loginManager/setLogin', {})
          window.location.pathname = '/content/vue/login.html'
        }
      }
    }
  }
}
