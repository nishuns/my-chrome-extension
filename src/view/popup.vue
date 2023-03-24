<template>
  <div class="main_app">
    <span class="words" v-for="word in words" :key="word">{{ word }}</span>
    <button></button>
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
}
.words {
      color: black;
    font-size: 1rem;
    background: #8be38b;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
}
</style>
