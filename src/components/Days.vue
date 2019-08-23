<template>
  <div>
    <Day
      v-for="number in numbers"
      :key="number"
      :number="number - (numbers - monthNumber)"
      :note="notes[number - (numbers - monthNumber)]"
    />
  </div>
</template> 


<script>
import { mapState } from 'vuex'

import Day from './Day'

export default {
  name: 'Days',

  components: { Day },

  computed: {
    ...mapState(['year', 'month', 'notes']),

    monthNumber() {
      const monthNumbers = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      return monthNumbers[this.month]
    },

    numbers() {
      return this.monthNumber + new Date(this.year, this.month, 1).getDay()
    },
  },
}
</script>

<style scoped>
div {
  width: 100%;
  margin-left: 0px;
}
</style>>

</style>