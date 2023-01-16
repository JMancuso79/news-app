<template>
  <div class="details container pt-4 pb-4">
    <div v-if="article" class="card mb-3 border-0">
      <img
        :src="article.urlToImage"
        class="card-img-top"
        :alt="article.title"
      />
      <div class="card-body text-start">
        <h5 class="card-title text-black fs-1">{{ article.title }}</h5>
        <p class="card-text text-dark">
          {{ article.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";

export default {
  name: "DetailsView",
  components: {},
  setup() {
    const store = useNewsStore();
    const { article } = storeToRefs(store);
    return {
      article,
    };
  },
};
</script>
