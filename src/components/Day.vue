<template>
  <label :class="[$style.day, invalidClass(number)]">
    <textarea
      dir="auto"
      placeholder="What would you like to do?"
      required="true"
      type="text"
      :value="note"
      @input="changeNotes(number, $event.target.value)"
      @focus="changeInitialValue"
      @blur="notifToAll"
    />
    <span :class="[new Date().getDate() === number && $style.today]">{{ number }}</span>
    <em></em>
  </label>
</template>


<script>
import { mapState } from 'vuex' 
// W
const { W } = window


export default {
  name: 'Days',

  props: ['number', 'note'],

  data() {
    return {
      initialValue: '',
    }
  },

  computed: {
    ...mapState(['username']),
  },

  methods: {
    invalidClass(number) {
      if (number < 1) return this.$style.invalid
    },
    notifToAll() {
      if (this.initialValue !== this.note) {
        W.sendNotificationToAll(`Event was added by ${this.username}`, this.note)
      }
    },
    changeInitialValue() {
      this.initialValue = this.note
    },
    changeNotes(day, note) {
      this.$store.dispatch('addNote', { day, note })
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

.day textarea[type='text'] {
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

.day textarea[type='text']:focus {
  opacity: 1;
  height: 35px;
  padding: 10px 40px;
  left: -30px;
  width: 300px;
  color: #29323f;
}

.day textarea[type='text']:focus + span {
  color: #fcee6d;
  border-color: #fcee6d;
  background: #fcee6d;
  color: #29323f;
  font-weight: bold;
  margin-bottom: 65px;
}

.day textarea[type='text']:focus ~ em {
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

.day textarea[type='text']:valid ~ em {
  display: inline-block;
  opacity: 1;
}

.invalid {
  opacity: 0;
  width: 25px;
  height: 25px;
}

.invalid span,
.invalid textarea {
  display: none;
}

.today {
  background-color: brown;
}
</style>
