<template>
<div :class="$style.root">
  <Header
    :year="year"
    :month="month"
  />
  <Weekday />
  <Days
    :year="year"
    :month="month"
    :notes="notes"
    :changeNotes="changeNotes"
  />
</div>
</template>


<script>
// components
import Header from './components/Header'
import Weekday from './components/Weekday'
import Days from './components/Days'


export default {
  name: 'App',

  components: {
    Header,
    Weekday,
    Days,
  },

  data: () => ({
    year: 2018,
    month: 2,
    notes: { 9: 'salam', 13: 'joooon' },
  }),

  methods: {
    changeNotes(day, note) { this.notes[day] = note },
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
</style>
