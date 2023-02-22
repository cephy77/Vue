const app = Vue.createApp({
  data() {
    return {
      counterValue: 0,
      timeOut: null,
    };
  },
  watch: {
    result() {
      if (this.counterValue !== 0) {
        const that = this;
        this.timeOut = setTimeout(() => {
          that.counterValue = 0;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.counterValue > 37) {
        return this.counterValue + " Too much!";
      }
      if (this.counterValue === 37) {
        return 37;
      } else {
        return this.counterValue + " Not there yet";
      }
    },
  },
  methods: {
    addNumber(num) {
      clearTimeout(this.timeOut);
      this.counterValue += num;
    },
  },
});

app.mount("#assignment");
