const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      visibility: true,
      secondInput: "",
    };
  },
  watch: {},
  computed: {
    pClass() {
      let style = this.visibility ? "visible" : "hidden";
      if (this.firstInput === "user1" || this.firstInput === "user2") {
        style += " " + this.firstInput;
      }
      return style;
    },
    second() {
      return this.secondInput;
    },
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
