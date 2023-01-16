import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useNewsStore = defineStore("news", {
  // a function that returns a fresh state
  state: () => ({
    article: { news: "test" },
  }),
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.article = {};
    },
    add(data) {
      this.article = data;
    },
  },
});
