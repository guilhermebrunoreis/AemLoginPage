<template>
  <section
    :style="`background-image: url(${src})`"
    class="banner-home"
  ></section>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/img/ball-logo-compass.png'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./bannerHome.scss"
</style>
