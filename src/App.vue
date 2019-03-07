<template>
  <div :class="$style.root">
    <Header :year="year" :month="month"/>

    <Weekday/>

    <Days
      :username="username"
      :year="year"
      :month="month"
      :notes="notes"
      :changeNotes="changeNotes"
    />

    <div v-if="customizeMode" :class="$style.customize"/>
  </div>
</template>


<script>
// components
import Header from './components/Header'
import Weekday from './components/Weekday'
import Days from './components/Days'
// helper
import { addNote } from './helper/functions/changeNotes'
import webliteHandler from './helper/functions/weblite.api'
// W
const { W } = window

export default {
  name: 'App',

  created() {
    W && webliteHandler(this)
  },

  components: {
    Header,
    Weekday,
    Days,
  },

  data: () => ({
    customizeMode: false,
    year: 2018,
    month: 0,
    username: 'Ali',
    isAdmin: false,
    notes: {},
  }),

  methods: {
    changeNotes(day, note) {
      addNote(day, note)
    },
  },
}
</script>


<style module>
.root {
  background-color: #29323f;
  width: 295px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.6);
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}

.customize {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  top: 0;
  right: 0;
}
</style>
