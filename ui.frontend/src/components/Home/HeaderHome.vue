<template>
  <header class="header-home">
    <figure class="header-home__figure">
      <img :src="src" alt="logo compass" width="150" height="43" />
    </figure>
    <section class="header-home__card-middle">
      <p class="header-home__clock">{{ clock }}</p>
      <p class="header-home__date">{{ dateFormat }}</p>
    </section>
    <section class="header-home__card-right">
      <p class="header-home__location">{{ location }}</p>
      <p class="header-home__temp">{{ temp }}°</p>
    </section>
  </header>
</template>

<script>
import months from '@/server/months.json'
import days from '@/server/days.json'
export default {
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/img/logo-compass.png'
    }
  },
  data () {
    return {
      location: 'Ribeirão Preto - SP',
      temp: '25',
      date: new Date()
    }
  },
  computed: {
    dateFormat () {
      const { date } = this
      return `${days[date.getDay()]}, ${date.getDate()} de ${
        months[date.getMonth()]
      } de ${date.getFullYear()}`
    },
    clock () {
      const { date } = this
      return `${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`
    }
  },
  watch: {
    date: {
      handler () {
        setTimeout(() => {
          this.date = new Date()
        }, 1000)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./headerHome.scss"
</style>
