const app = Vue.createApp({
  data() {
    return {
      firstValue: "",
      secondValue: "",
      secondOutput: "OUTPUT",
    };
  },
  watch: {
    secondOutput(value) {
      if (!value) {
        this.secondOutput = "OUTPUT";
      }
    },
  },
  computed: {
    firstOutput() {
      if (!this.firstValue) {
        return "OUTPUT";
      } else {
        return this.firstValue;
      }
    },
  },
  methods: {
    showAlert() {
      alert("The arert window is showing");
    },
    registerSecondValue(event) {
      this.secondValue = event.target.value;
    },
    showSecondOutput() {
      this.secondOutput = this.secondValue;
    },
  },
});

app.mount("#assignment");
