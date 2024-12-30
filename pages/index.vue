<template>
  <div>
    <div v-if="isLoading" class="loading">Loading news...</div>
    <div v-if="error" class="error">Failed to load news: {{ error }}</div>
    <div
      v-else
      class="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 p-10"
    >
      <NewsCard
        v-for="(news, index) in newsItems"
        :key="index"
        :url="news.url"
        :title="news.title"
        :image="news.image || placeholderImage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const newsItems = ref([]);
const isLoading = ref(true);
const error = ref(null);
const placeholderImage = "https://via.placeholder.com/300x200";

onMounted(async () => {
  try {
    const cacheKey =
      "http://api.mediastack.com/v1/news?access_key=220c557d909dd83012dc54d65e43d22c&limit=100&languages=en&countries=ca,us";
    const cachedNews = await useFetchWithCache(cacheKey);

    console.log("Fetched news:", cachedNews.value);

    // Transform cached data into usable format
    newsItems.value = cachedNews.value?.data || [];
  } catch (err) {
    error.value = "Failed to fetch news";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.loading {
  @apply text-center p-8 text-3xl text-black;
}

.error {
  @apply text-center p-8 text-3xl text-red-700;
}
</style>
