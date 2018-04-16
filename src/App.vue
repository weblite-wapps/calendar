<template>
<div :class="$style.root">
  <Header :year="year" :month="month" />
</div>
</template>

<script>
// components
import Header from './components/Header'


export default {
  name: 'App',

  components: {
    Header,
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
  width: 280px;
  padding: 35px;
  font-family: 'Dosis', sans-serif;
  height: 330px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>
