<template>
  <section
    :style="`background-image: url(${src})`"
    class="banner-login"
  ></section>
</template>

<script>
export default {
  name: 'BannerFigureLogin',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/img/banner-notebook.png'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./bannerFigureLogin.scss";
</style>
