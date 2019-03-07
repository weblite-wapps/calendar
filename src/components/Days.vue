<template>
  <div>
    <Day
      v-for="number in numbers"
      :key="number"
      :number="number - (numbers - monthNumber)"
      :note="notes[number - (numbers - monthNumber)]"
      :username="username"
      :changeNotes="changeNotes"
    />
  </div>
</template>


<script>
import Day from './Day'

export default {
  name: 'Days',

  components: { Day },

  props: ['username', 'year', 'month', 'notes', 'changeNotes'],

  computed: {
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
