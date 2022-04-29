<template>
  <section class="form">
    <article class="form__body">
      <h2 class="form__title">Login</h2>
      <form class="form__group" @submit.prevent="handleSubmit">
        <input
          v-model.trim="form.user"
          data-testid="user-input"
          class="form__input form__input--icon-user"
          :class="{ 'form__input--error': !isValid }"
          type="text"
          placeholder="Usuário"
          required
        />
        <input
          v-model.number="form.password"
          data-testid="password-input"
          class="form__input form__input--icon-lock"
          :class="{ 'form__input--error': !isValid }"
          type="password"
          placeholder="Senha"
          inputmode="numeric"
          required
        />
        <p v-show="!isValid" class="form__message-error">
          Ops, usuário ou senha inválidos. Tente novamente!
        </p>
        <button
          data-testid="login-button"
          class="form__button"
          :class="{ 'form__button--small-margin': !isValid }"
          title="Continuar"
          type="submit"
        >
          Continuar
        </button>
      </form>
    </article>
  </section>
</template>

<script>
import CheckUserLoginLocalStorageMixins from '@/mixins/CheckUserLoginLocalStorage'
export default {
  name: 'FormLogin',
  mixins: [CheckUserLoginLocalStorageMixins],
  data () {
    return {
      form: {
        user: '',
        password: ''
      }
    }
  },
  computed: {
    isValid () {
      return this.$store.state.loginManager.isValid
    }
  },
  methods: {
    handleSubmit () {
      const handleValid = this.handleValidation()

      if (handleValid) {
        this.$store.dispatch('loginManager/fetchLogin', this.form)
        this.redirectPageHome()
      }
    },

    handleValidation () {
      // eslint-disable-next-line prefer-const
      let { user, password } = this.form
      user = user.toLowerCase()
      this.form.user = user

      const resultUser = /^[a-z.]+$/.test(user)

      const passLength = password.toString().length

      const resultNumberPassword = /^[0-9]+$/.test(password)

      const resultLengthPassword = passLength >= 6 && passLength < 9

      const result = resultUser && resultLengthPassword && resultNumberPassword

      this.$store.commit('loginManager/setIsValid', result)

      return result
    },

    redirectPageHome () {
      const { userLogin } = this.$store.state.loginManager
      if (userLogin.login) window.location.pathname = '/content/vue/home.html'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './formLogin.scss';
</style>
