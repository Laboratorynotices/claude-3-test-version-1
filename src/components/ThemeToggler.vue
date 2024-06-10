<script setup lang="ts">
import { ref, watch } from 'vue'

// Определяем реактивную переменную `isDark` для отслеживания текущей темы
const isDark = ref(false)

// Функция для переключения темы
const toggleTheme = () => {
  isDark.value = !isDark.value
}

// Наблюдатель для изменения класса `dark` на корневом элементе HTML
watch(
  isDark,
  (newVal) => {
    if (newVal) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  { immediate: true }
)
</script>

<template>
  <!-- Кнопка переключения темы -->
  <button
    @click="toggleTheme"
    class="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md"
  >
    {{ isDark ? 'Светлая тема' : 'Темная тема' }}
  </button>
</template>