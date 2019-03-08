<template>
  <label :class="[$style.day, invalidClass(number)]">
    <!-- <p class="kind">{{ username }}</p> -->
    <textarea
      dir="auto"
      placeholder="What would you like to do?"
      required="true"
      type="text"
      :value="note"
      @input="changeNotes(number, $event.target.value)"
    >
    <span :class="[new Date().getDate() === number && $style.today]">{{ number }}</span>
    <em></em>
  </label>
</template>


<script>
export default {
  name: 'Days',

  props: ['username', 'number', 'note', 'changeNotes'],

  methods: {
    invalidClass(number) {
      if (number < 1) return this.$style.invalid
    },
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
  transition: all 0.2s linear;
  cursor: pointer;
}

.day span:hover {
  border-color: #fcee6d;
}

.day em {
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border-color: #29323f;
  width: 7px;
  height: 7px;
  background-color: #fcee6d;
  margin-left: 9px;
  margin-top: 2px;
  opacity: 0;
  transition: all 0.2s linear;
}

<<<<<<< HEAD
.day textarea[type='text'] {
=======
.day input[type='text'] {
>>>>>>> dev
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
  transition: height 0.2s linear, opacity 0.2s linear, color 0.02s linear;
  color: #fff;
}

<<<<<<< HEAD
.day textarea[type='text']:focus {
=======
.day input[type='text']:focus {
>>>>>>> dev
  opacity: 1;
  height: 35px;
  padding: 10px 40px;
  left: -30px;
  width: 300px;
  color: #29323f;
}

<<<<<<< HEAD
.day textarea[type='text']:focus + span {
=======
.day input[type='text']:focus + span {
>>>>>>> dev
  color: #fcee6d;
  border-color: #fcee6d;
  background: #fcee6d;
  color: #29323f;
  font-weight: bold;
  margin-bottom: 65px;
}

<<<<<<< HEAD
.day textarea[type='text']:focus ~ em {
=======
.day input[type='text']:focus ~ em {
>>>>>>> dev
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

<<<<<<< HEAD
.day textarea[type='text']:valid ~ em {
=======
.day input[type='text']:valid ~ em {
>>>>>>> dev
  display: inline-block;
  opacity: 1;
}

.invalid {
  opacity: 0;
  width: 25px;
  height: 25px;
}

.invalid span,
<<<<<<< HEAD
.invalid textarea {
=======
.invalid input {
>>>>>>> dev
  display: none;
}

.today {
  background-color: brown;
}
</style>
