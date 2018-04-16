<template>
<div :class="$style.root">
  <Header :year="year" :month="month" />
  <Weekday />
</div>
</template>

<script>
// components
import Header from './components/Header'
import Weekday from './components/Weekday'


export default {
  name: 'App',

  components: {
    Header,
    Weekday,
  },

  data: () => ({
    year: '2018',
    month: 'August',
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
}
</style>
