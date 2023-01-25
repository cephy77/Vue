const app = Vue.createApp({
  data() {
    return {
      counterValue: 0,
    };
  },
  methods: {
    increment() {
      this.counterValue += 1;
    },
    decrement() {
      this.counterValue -= 1;
    },
  },
});

app.mount("#counter");
