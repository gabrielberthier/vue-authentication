import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData)
    {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA(state)
    {
      state.user = null;
      localStorage.removeItem('user');
      axios.defaults.headers.common['Authorization'] = null;
    },
    SET_TOKEN_HEADER(state, userData)
    {
      state.user = userData;
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    }
  },
  actions: {
    async register({ commit }, credentials)
    {
      const data = await axios.post('//localhost:3000/register', credentials)
      return commit('SET_USER_DATA', data.data)
    },
    async login({ commit }, credentials)
    {
      const data = await axios.post('//localhost:3000/login', credentials)
      return commit('SET_USER_DATA', data.data)
    },
    logout({ commit })
    {
      commit('CLEAR_USER_DATA');
    },
    addHeader({ commit }, token)
    {
      commit('SET_TOKEN_HEADER', token);
    }
  },
  getters: {
    loggedIn(state)
    {
      return !!state.user
    }
  }
})
