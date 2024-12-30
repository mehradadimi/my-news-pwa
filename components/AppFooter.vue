<template>
  <footer class="app-footer">
    <p>&copy; {{ currentYear }} MyNewsApp. All rights reserved.</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.app-footer {
  @apply bg-gray-800 text-white text-center p-4;
}

.app-footer p {
  @apply m-0 font-bold;
}
</style>
