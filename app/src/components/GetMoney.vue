<template>
  <div class="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm text-center text-gray-100">
    <button @click="earnMoney" class="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-500 transition">
      Earn Money
    </button>
  </div>
</template>

<script setup>
import { store } from '@/store.js'

function earnMoney() {
  store.wallet++
}
</script>

<style scoped></style>