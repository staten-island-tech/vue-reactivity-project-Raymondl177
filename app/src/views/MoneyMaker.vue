<template>
  <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
    <div class="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm text-center">
      <h1 class="text-3xl font-semibold text-gray-100 mb-4">Money Maker</h1>
      <h2 class="text-xl font-medium text-gray-300 mb-6">
        Wallet: ${{ store.wallet.toFixed(2) }}
      </h2>
      <GetMoney class="mb-6" 
      :wallet="store.wallet" 
      :earnMoney="earnMoney" 
      :gambleMoney="gambleMoney"
      :doubleOrNothing="doubleOrNothing"
      :amount="amount"
      />
      <h1 class="text-2xl font-semibold text-gray-100 mb-4">{{ amount }}</h1>
      <button class="bg-green-600 text-gray-100 px-4 py-2 rounded-lg hover:bg-green-500 transition" @click="amount++">+1</button>
      <button class="bg-red-600 text-gray-100 px-4 py-2 rounded-lg hover:bg-red-500 transition" @click="amount--">-1</button>
      <router-link to="/"
        class="inline-block bg-blue-600 text-gray-100 px-6 py-2 rounded-lg hover:bg-blue-500 transition">
        Back to Burger Maker
      </router-link>
    </div>
  </div>
</template>

<script setup>
import GetMoney from '@/components/GetMoney.vue'
import { store } from '@/store.js'
import { ref } from 'vue'

function earnMoney() {
  store.wallet++
}
const amount = ref(1)

function gambleMoney() {
  const randomNumber = Math.random()
  if (randomNumber < 0.5) {
    store.wallet -= amount.value
  } else {
    store.wallet += amount.value
  }
}
function doubleOrNothing() {
  const randomNumber = Math.random()
  if (randomNumber < 0.5) {
    store.wallet = 0
  } else {
    store.wallet *= 2
  }
}
</script>

<style scoped></style>
