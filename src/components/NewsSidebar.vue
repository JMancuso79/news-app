<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item, index) in sidebarNews"
        :key="index"
        class="list-group-item list-group-item-action text-start"
        @click="goToDetails(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";
import router from "@/router";

export default {
  name: "NewsSidebar",
  props: {
    sidebarNews: Object,
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
