<template>
  <div class="news-card" @click="handleClick">
    <img
      :src="image"
      :alt="title"
      class="news-card__image"
      @error="handleImageError"
    />
    <div class="news-card__content">
      <h3 class="news-card__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const { url, title, image } = defineProps({
  url: String,
  title: String,
  image: String,
});

const router = useRouter();

const handleClick = () => {
  if (url) {
    if (url.startsWith("http")) {
      window.location.href = url;
    } else {
      router.push(url);
    }
  } else {
    console.log(`News clicked: ${title}`);
  }
};

const handleImageError = (event) => {
  const placeholderImage = "https://via.placeholder.com/300x200";
  event.target.src = placeholderImage;
};
</script>

<style scoped>
.news-card {
  @apply bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer max-h-80;
}

.news-card__image {
  @apply w-full h-48 object-cover;
}

.news-card__content {
  @apply p-4;
}

.news-card__title {
  @apply text-lg text-center font-bold text-gray-800;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}
</style>
