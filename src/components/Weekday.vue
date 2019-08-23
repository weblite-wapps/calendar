<template>
  <div>
    <label :class="$style.root" v-for="day in weekday" :key="day">{{ day }}</label>
  </div>
</template>


<script>
export default {
  name: 'Weekday',

  data: () => ({
    weekday: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }),
}
</script>


<style module>
.root {
  display: inline-block;
  width: 25px;
  margin: 8px;
  text-align: center;
  color: #999;
}

@media screen and (max-width: 300px) {
  .root {
    margin: 5px;
  }
}

@media screen and (max-width: 250px) {
  .root {
    margin: 1px;
  }
}
</style>
