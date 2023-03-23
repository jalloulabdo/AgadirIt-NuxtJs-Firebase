

const state = () => ({
  user: null,
  loggedIn: false,
})

const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      //redirect from here
      this.$router.push({
        path: '/',
      })
    } else {
      state.commit('setLogged', true)
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  setLogged(state,value){
    state.loggedIn = value
  }
}

const getters = {
  getUser(state) {
    return state.user
  },
  getloggedIn(state){
    return state.loggedIn
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
