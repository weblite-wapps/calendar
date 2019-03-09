<template>
  <h1 :class="$style.root">{{ monthName }} {{ year }}</h1>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',

  computed: {
    ...mapState(['year', 'month']),

    monthName() {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      return monthNames[this.month]
    },
  },
}
</script>


<style module>
.root {
  font-size: 24px;
  font-weight: bolder;
  text-align: center;
  color: #fcee6d;
  margin: 5px 0 25px 0;
}
</style>
