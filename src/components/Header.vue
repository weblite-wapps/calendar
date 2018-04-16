<template>
<h1 :class="$style.root">
  {{ month }} {{ year }}
</h1>
</template>

<script>
export default {
  name: 'Header',

  props: ['year', 'month'],
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
