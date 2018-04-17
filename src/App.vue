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
    month: 1,
  })
}
</script>

<style module>
.root {
  background-color: #29323f;
  width: 295px;
  padding: 20px;
  height: 330px;
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
