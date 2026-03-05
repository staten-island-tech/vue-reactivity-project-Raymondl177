<template>
  <div class="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md text-gray-100">
    <h2 class="text-2xl font-semibold mb-4">{{ currentStep.key }}</h2>

    <div class="grid grid-cols-2 gap-3 mb-4">
      <button v-for="(item, index) in currentStep.options" :key="index" @click="onSelect(item)"
        class="bg-green-600 text-gray-100 px-4 py-3 rounded-lg hover:bg-green-500 transition cursor-pointer">
        {{ item.name }} - ${{ item.price.toFixed(2) }}
      </button>
    </div>

    <div class="flex flex-wrap gap-3">
      <button @click="onPrevious"
        class="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer">Previous</button>
      <button @click="onNext"
        class="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer">Next</button>
      <button @click="onClear"
        class="bg-red-600 text-gray-100 px-4 py-2 rounded-lg hover:bg-red-500 transition cursor-pointer">Clear</button>
      <button @click="makeBurger"
        class="bg-blue-600 text-gray-100 px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer">Make Burger</button>
    </div>
  </div>
</template>

<script setup>

defineProps({
  currentStep: Object,
  onSelect: Function,
  onNext: Function,
  onPrevious: Function,
  onClear: Function,
  makeBurger: Function,
  calculateTotal: Function,
})

</script>

<style scoped></style>