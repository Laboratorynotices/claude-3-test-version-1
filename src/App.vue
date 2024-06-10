<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useDarkMode } from './composables/useDarkMode'

// Импортируем реактивную переменную и функцию из useDarkMode
const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Кнопка для переключения темы -->
    <button
      class="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      @click="toggleDarkMode"
    >
      {{ isDarkMode ? 'Светлая тема' : 'Темная тема' }}
    </button>
  </div>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
