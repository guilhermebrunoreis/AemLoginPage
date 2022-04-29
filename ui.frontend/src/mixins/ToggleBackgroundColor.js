export default {
  mounted () {
    const { background } = this
    this.toggleBackgroundColor(background)
  },
  watch: {
    background (newValue, oldValue) {
      this.toggleBackgroundColor(newValue, oldValue)
    }
  },
  methods: {
    toggleBackgroundColor (newValue = null, oldValue = null) {
      const body = document.getElementsByTagName('body')[0]

      if (newValue === 'none' && body.classList.contains(`bg--${oldValue}`)) {
        body.classList.toggle(`bg--${oldValue}`)
      } else {
        body.classList.add(`bg--${newValue}`)
      }
    }
  }
}
