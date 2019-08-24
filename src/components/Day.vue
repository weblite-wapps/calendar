<template>
  <label :class="[$style.day, invalidClass(number)]">
    <textarea
      dir="auto"
      ref="textRef"
      placeholder="What would you like to do?"
      required="true"
      type="text"
      :value="note"
      @focus="changeInitialValue"
      @input="changeNotes(number, $event.target.value)"
      @blur="notifToAll"
    />
    <span :class="[new Date().getDate() === number && $style.today]">{{ number }}</span>
    <em></em>
  </label>
</template>


<script>
// modules
import { mapState } from 'vuex'
// helpers
import { notif, getAnalyticsType } from '../helper/functions/notification'
// const
const { W } = window

export default {
  name: 'Days',

  props: ['number', 'note'],

  data() {
    return {
      initialValue: '',
      type: '',
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
      const { initialValue, note, username } = this

      if (initialValue !== note) {
        if (!initialValue) this.type = 'add'
        else if (!note) this.type = 'remove'
        else this.type = 'modify'
        notif(this.type, { username: username, note: note })
        W && W.analytics(getAnalyticsType(this.type))
      }
    },
    changeInitialValue() {
      this.initialValue = this.note
      return
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
  opacity: 0;
  transition: all 0.2s linear;
}

.day textarea[type='text'] {
  border: 0;
  opacity: 0;
  position: absolute;
  margin-top: 40px;
  left: -30px;
  width: 100%;
  padding-right: 40px;
  height: 1px;
  padding: 0;
  outline: none;
  font-size: 1rem;
  transition: height 0.2s linear, opacity 0.2s linear, color 0.02s linear;
  color: #fff;
}

.day textarea[type='text']:focus {
  opacity: 1;
  height: 35px;
  /* line-height: 35px; */
  padding: 10px 40px 10px 40px;
  left: -30px;
  width: 275px;
  color: #29323f;
}

.day textarea[type='text']:focus + span {
  color: #fcee6d;
  border-color: #fcee6d;
  background: #fcee6d;
  color: #29323f;
  font-weight: bold;
  margin-bottom: 60px;
}

.day textarea[type='text']:focus ~ em {
  border-radius: 0;
  border: 5px solid transparent;
  background: transparent;
  border-bottom-color: white;
  margin-top: -65px;
  margin-left: 8px;
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

@media screen and (max-width: 300px) {
  .day textarea[type='text']:focus {
    font-size: 0.9rem;
    height: 30px;
    width: 230px;
  }
  .day textarea[type='text']:focus ~ em {
    margin-top: -60px;
    margin-left: 7px;
  }
  .day {
    margin: 5px;
    size: 6px;
  }

  .day em {
    margin-top: -3px;
    margin-left: 9px;
    width: 6px;
    height: 6px;
  }
}

@media screen and (max-width: 250px) {
  .day textarea[type='text']:focus {
    font-size: 0.8rem;
    width: 180px;
    height: 15px;
  }
  .day textarea[type='text']:focus + span {
    margin-bottom: 50px;
  }
  .day textarea[type='text']:focus ~ em {
    margin-top: -55px;
    margin-left: 7px;
  }
  .day {
    margin: 1px;
  }

  .day em {
    margin-top: -6px;
    margin-left: 10px;
    width: 5px;
    height: 5px;
  }
}
</style>
