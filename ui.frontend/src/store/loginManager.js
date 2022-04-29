import people from '@/server/people.json'

export const state = () => ({
  userLogin: {},
  isValid: true
})

export const mutations = {
  setLogin (state, payload) {
    state.userLogin = payload
    localStorage.setItem('userLogin', JSON.stringify(payload))
  },

  setIsValid (state, payload) {
    state.isValid = payload
  }
}

export const actions = {
  fetchLogin ({ commit }, form) {
    const { logins } = people
    const { user, password } = form
    let login = {}

    if (logins && logins.length > 1) {
      login = logins.find((e) => e.login === user && e.password === password)
    }

    if (!login) {
      login = {}
      commit('setIsValid', false)
    }

    commit('setLogin', login)
  }
}
