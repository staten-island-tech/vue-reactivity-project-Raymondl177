<template>
  <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
    <div class="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-150 text-center flex justify-center flex-col">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">Money Maker</h1>
      <h2 class="text-xl font-medium text-gray-300 mb-6">
        Wallet: ${{ store.wallet.toFixed(2) }}
      </h2>
      <GetMoney class="mb-6 flex flex-col justify-center" 
      :wallet="store.wallet" 
      :earnMoney="earnMoney" 
      :gambleMoney="gambleMoney"
      :doubleOrNothing="doubleOrNothing"
      :amount="amount"
      :earnTwo="earnTwo"
      :earnTen="earnTen"
      :earnFive="earnFive"
      :doubleMoney="doubleMoney"
      />
      <h1 class="text-2xl font-semibold text-gray-100 mb-4">Gamble Amount: ${{ amount }}</h1>
      <div class="">
    <button class="bg-green-600 text-gray-100 px-4 py-2 mr-2 rounded-lg hover:bg-green-500 transition cursor-pointer font-medium mb-2 w-15" @click="amount+= 10">+10</button>
      <button class="bg-green-600 text-gray-100 px-4 py-2 mr-2 rounded-lg hover:bg-green-500 transition cursor-pointer font-medium mb-2 w-15" @click="amount++">+1</button>
      <button class="bg-red-600 text-gray-100 px-4 py-2 mr-2 rounded-lg hover:bg-red-500 transition cursor-pointer font-medium mb-2" v-if="amount > 0" @click="amount--">-1</button>
      <button class="bg-red-600 text-gray-100 px-4 py-2 mr-2 rounded-lg hover:bg-red-500 transition cursor-pointer font-medium mb-2" v-if="amount >= 10" @click="amount-= 10">-10</button>
      <button class="bg-red-900 text-gray-100 px-4 py-2 mr-2 rounded-lg hover:bg-red-800 transition cursor-pointer font-medium mb-2" v-if="amount > 0" @click="amount = 0">Reset</button>
      </div>
      <router-link to="/"
        class="inline-block bg-blue-600 text-gray-100 px-6 py-2 rounded-lg hover:bg-blue-500 transition font-medium">
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
const amount = ref(0)

function gambleMoney() {
  if (amount.value > store.wallet) {
    alert("ur broke");
    return;
  } else if (amount.value <= 0 || isNaN(amount.value)) {
    alert("Invalid amount");
    return;
  } else {
  const randomNumber = Math.random()
  if (randomNumber < 0.5) {
    store.wallet -= amount.value
  } else {
    store.wallet += amount.value
  }
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

function earnTwo() {
  store.wallet += 2
}

function earnTen() {
  store.wallet += 10
}

function earnFive() {
  store.wallet += 5
}

function doubleMoney() {
  store.wallet = store.wallet * 2
}

</script>

<style scoped></style>
