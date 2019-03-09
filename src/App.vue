<template>
  <div :class="$style.root">
    <Header />

    <Weekday/> 

    <Days />

    <div v-if="customizeMode" :class="$style.customize"/>
  </div>
</template>


<script>
// modules
import { mapState } from 'vuex'
// components
import Header from './components/Header'
import Weekday from './components/Weekday'
import Days from './components/Days'
// helper
import webliteHandler from './helper/functions/weblite.api'
// store
import store from './store'
// W
const { W } = window

export default {
  name: 'App',

  store,

  created() {
    W && webliteHandler(this)
  },

  components: {
    Header,
    Weekday,
    Days,
  },

  computed: {
    ...mapState([
      'customizeMode',
    ]),
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
