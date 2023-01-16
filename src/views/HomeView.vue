<template>
  <div class="home">
    <!-- Categories -->
    <div class="bg-light text-dark text-start py-2 mb-4">
      <div class="container">
        <!-- Desktop -->
        <div class="d-none d-md-flex flex-row">
          <div v-for="item in categories" :key="item">
            <a
              @click="category = item"
              href="#"
              class="text-decoration-none text-capitalize py-1 px-2"
              :class="[item === category ? 'text-light bg-dark' : 'text-black']"
              >{{ item }}</a
            >
          </div>
        </div>
        <!-- Mobile -->
        <div class="d-md-none">
          <select
            v-model="category"
            class="form-select"
            aria-label="Default select example"
          >
            <option v-for="item in categories" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <!-- Data Loaded -->
    <div v-if="isLoading === false">
      <div class="container">
        <div class="row">
          <!-- Left Sidebar -->
          <div class="d-none d-lg-block col-md-3">
            <ad-sidebar />
          </div>
          <!-- Main Content -->
          <div class="col-12 col-lg-6">
            <news-list :news="newsResults" />
          </div>
          <!-- Right Sidebar -->
          <div class="d-none d-lg-block col-md-3">
            <news-sidebar :sidebar-news="newsResults" />
          </div>
        </div>
      </div>
    </div>
    <!-- Data Loading -->
    <div v-else class="container text-center text-dark mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import NewsList from "../components/NewsList.vue";
import NewsSidebar from "../components/NewsSidebar.vue";
import AdSidebar from "../components/AdSidebar.vue";
import axios from "axios";
import { ref, onMounted, watch } from "vue";

const categories = ["Crime", "Politics", "Weather", "Sports", "Tech"];

export default {
  name: "HomeView",
  components: {
    NewsList,
    NewsSidebar,
    AdSidebar,
  },
  setup() {
    const category = ref("Crime");
    const newsResults = ref({});
    const isLoading = ref(false);

    onMounted(() => {
      getNews();
    });

    const getNews = async () => {
      isLoading.value = true;
      await axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            category.value +
            "&from=2023-01-14&sortBy=popularity&pageSize=20&apiKey=d84180cf20fa4992bd338198836ce5c9"
        )
        .then((response) => {
          isLoading.value = false;
          // Make sure request was successful
          if (response.data && response.data.status === "ok") {
            newsResults.value = response.data.articles;
          }
        });
    };

    watch(category, () => {
      getNews();
    });

    return {
      categories,
      category,
      newsResults,
      isLoading,
    };
  },
};
</script>
