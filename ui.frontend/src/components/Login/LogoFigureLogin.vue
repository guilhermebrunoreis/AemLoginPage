<template>
  <figure class="logo-figure-login">
    <img :src="src" alt="logo compass white" width="306" height="69" />
  </figure>
</template>

<script>
export default {
  name: 'LogoFigureLogin',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/img/logo-compass-white.png'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./logoFigureLogin.scss";
</style>
