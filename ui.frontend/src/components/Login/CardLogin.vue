<template>
  <section class="card-login">
    <article class="card-login__header">
      <h1 class="card-login__title">{{ title }}</h1>
      <p class="card-login__description">
        {{ description }}
      </p>
    </article>
  </section>
</template>

<script>
import ToggleBackgroundColorMixins from '@/mixins/ToggleBackgroundColor'
export default {
  mixins: [ToggleBackgroundColorMixins],
  props: {
    title: {
      type: String,
      default: 'Olá,'
    },
    description: {
      type: String,
      default:
        'Para continuar navegando de forma segura, efetue o login na rede.'
    },
    background: {
      type: String,
      default: 'gray'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./cardLogin.scss";
</style>
