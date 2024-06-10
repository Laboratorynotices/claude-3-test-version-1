import { ref, watchEffect } from 'vue'

// Определяем реактивную переменную для хранения текущей темы
export const useDarkMode = () => {
  const isDarkMode = ref(false)

  // Функция для переключения темы
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  // Слушаем изменения значения isDarkMode и применяем соответствующий класс к body
  watchEffect(() => {
    const bodyElement = document.body
    if (isDarkMode.value) {
      bodyElement.classList.add('dark')
    } else {
      bodyElement.classList.remove('dark')
    }
  })

  // Возвращаем реактивную переменную и функцию для переключения темы
  return { isDarkMode, toggleDarkMode }
}