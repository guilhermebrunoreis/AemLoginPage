<template>
  <section class="card-home">
    <article class="card-home__article">
      <p class="card-home__title card-home__title--small">Our mission is</p>
      <p class="card-home__description">Nossa missão é</p>
    </article>
    <article class="card-home__article">
      <p class="card-home__title">to transform the world</p>
      <p class="card-home__description">transformar o mundo</p>
    </article>
    <article class="card-home__article">
      <p class="card-home__title">building digital experiences</p>
      <p class="card-home__description">construindo experiências digitais</p>
    </article>
    <article class="card-home__article">
      <p class="card-home__title">that enable our client’s growth</p>
      <p class="card-home__description">
        que permitam o crescimento dos nossos clientes
      </p>
    </article>
  </section>
</template>

<script>
import ToggleBackgroundColorMixins from '@/mixins/ToggleBackgroundColor'
export default {
  mixins: [ToggleBackgroundColorMixins],
  props: {
    background: {
      type: String,
      default: 'beige'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './cardHome.scss'
</style>
