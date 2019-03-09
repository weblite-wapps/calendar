// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/functions/changeNotes.js'
// R, W
const { W } = window
// set vue plugin
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // stuff came from weblite
    year: 2019,
    month: 0,
    username: 'Ali',
    isAdmin: false,
    customizeMode: false,

    // main data
    notes: {},
  },

  mutations: {
    changeWebliteRelatedData(state, { year, month, username, isAdmin }) {
      state.year = year
      state.month = month
      state.username = username
      state.isAdmin = isAdmin
    },

    changeNotes(state, notes) {
      state.notes = notes
    },
  },

  actions: {
    addNote(_, { day, note }) {
      db.addNote(day, note)
    },
  },

  plugins: [
    ({ commit }) => W.share.subscribe(notes => commit('changeNotes', notes)),
  ],
})
