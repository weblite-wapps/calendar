<template>
<label :class="[$style.day, invalidClass(number)]">
  <input
    class='appointment'
    placeholder='What would you like to do?'
    required='true'
    type='text'
    :value="note"
  >
  <span>{{ number }}</span>
  <em></em>
</label>
</template>


<script>
export default {
  name: 'Days',

  props: ['number', 'note'],

  methods: {
    invalidClass(number) { if (number < 1) return this.$style.invalid },
  },
}
</script>


<style module>
.day {
  display: inline-block;
  width: 25px;
  margin: 8px;
  color: #fff;
}

.day span {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin: -2px 0 0 -2px;
  border-radius: 50%;
  border: 2px solid #29323f;
  text-align: center;
  transition: all .2s linear;
  cursor: pointer;
}

.day span:hover {
  border-color: #e7d84f;
}

.day em {
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border-color: #29323f;
  width: 3px;
  height: 3px;
  background-color: #685e02;
  margin-left: 11px;
  margin-top: 2px;
  opacity: 0;
  transition: all .2s linear;
}

.day input[type=text] {
  border: 0;
  opacity: 0;
  position: absolute;
  margin-top: 40px;
  left: -30px;
  width: 380px;
  height: 1px;
  padding: 0;
  outline: none;
  font-size: 16px;
  transition: height .2s linear, opacity .2s linear, color .02s linear;
  color: #fff;
}

.day input[type=text]:focus {
  opacity: 1;
  height: 35px;
  padding: 10px 40px;
  left: -30px;
  width: 300px;
  color: #29323f;
}

.day input[type=text]:focus + span {
  color: #fcee6d;
  border-color: #fcee6d;
  background: #fcee6d;
  color: #29323f;
  font-weight: bold;
  margin-bottom: 65px;
}

.day input[type=text]:focus ~ em {
  border-radius: 0;
  border: 5px solid transparent;
  background: transparent;
  border-bottom-color: white;
  margin-top: -62px;
  margin-left: 7px;
  width: 0;
  height: 0;
  display: inline-block;
  opacity: 1;
}

.day input[type=text]:valid ~ em {
  display: inline-block;
  opacity: 1;
}

.invalid {
  opacity: 0;
  width: 25px;
  height: 25px;
}

.invalid span, .invalid input {
  display: none;
}
</style>
