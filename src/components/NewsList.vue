<template>
  <div>
    <div v-for="(item, index) in news" :key="index" class="card mb-4 w-100">
      <img :src="item.urlToImage" class="card-img-top" :alt="item.title" />
      <div class="card-body text-start">
        <h5 class="card-title text-black fs-3">{{ item.title }}</h5>
        <p class="card-text text-dark">{{ item.description }}</p>
        <div class="text-end">
          <button @click="goToDetails(item)" class="btn btn-dark">
            Full Story
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";
import router from "@/router";

export default {
  name: "NewsList",
  props: {
    news: Object,
  },
  setup() {
    const store = useNewsStore();
    const { add } = storeToRefs(store);
    const goToDetails = (item) => {
      store.add(item);
      router.push("/details");
    };

    return {
      add,
      goToDetails,
    };
  },
};
</script>
