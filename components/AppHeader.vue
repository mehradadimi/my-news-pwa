<template>
  <header class="app-header">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup></script>

<style scoped>
.app-header {
  @apply bg-gray-800 p-4;
}

.app-header ul {
  @apply flex gap-4 m-0 p-0 list-none;
}

.app-header ul li a {
  @apply text-white font-bold p-3 ml-2 mr-2 rounded-lg hover:bg-white hover:bg-opacity-25 transition duration-300 ease-in-out;
}
</style>
