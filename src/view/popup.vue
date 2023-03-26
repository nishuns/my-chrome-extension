<template>
  <div class="main_app">
    <!-- <h1 class="alert" v-if="words && words.length <= 0">No available words</h1> -->
    <span class="words" v-for="word in words" :key="word" @click="deleteWord(word)">{{ word }}</span>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'popupView',
  data () {
    return {
      counter: 0,
    }
  },
  methods: {
    startCounter() {
      const myInterval = setInterval(() => {
        this.counter += 1;

        if (this.counter === 50) {
          this.counter = 0;
          clearInterval(myInterval);
        }
      }, 500);
    },
    deleteWord(word) {
      this.$store.dispatch('trashWord', word);
    }
  },
  computed: {
    words() {
      return this.$store.state.wordbin;
    }
  },
}

</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 400px;
  min-height: 50vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.words {
    color: black;
    font-size: .8rem;
    background: #8be38b;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    margin: 0.2rem;
    box-shadow: 0px 0px 4px 1px #979292;
}
</style>
