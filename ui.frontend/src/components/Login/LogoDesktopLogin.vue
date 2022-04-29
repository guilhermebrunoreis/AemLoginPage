<template>
  <figure class="logo-desktop-login">
    <img :src="src" alt="logo compass white desktop" width="306" height="69" />
  </figure>
</template>

<script>
export default {
  name: 'LogoDesktopLogin',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/img/logo-compass-white.png'
    }
  }
}
</script>
<style lang="scss" scoped>
@import url("./logoDesktopLogin.scss");
</style>
