<template>
  <div class="bg-gray-800 flex justify-cenet flex-col p-6 rounded-xl shadow-md w-full max-w-sm text-center text-gray-100">
    <button @click="earnMoney" class="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-500 transition">
      Earn +1
    </button>
    <button v-if="wallet >= 100" @click="earnTwo" class="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition">
      Earn +2
    </button>
    <button v-if="wallet >= 500" @click="earnFive" class="bg-orange-600 px-6 py-2 rounded-lg hover:bg-orange-500 transition">
      Earn +5
    </button>
    <button v-if="wallet >= 1000" @click="earnTen" class="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-500 transition">
      Earn +10
    </button>
    <button v-if="wallet >= 2000" @click="doubleMoney" class="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-500 transition">
      Double Money
    </button>
    <button @click="gambleMoney" class="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-500 transition">
      Gamble Money
    </button>
    <button @click="doubleOrNothing" class="bg-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
      Double or Nothing
    </button>
  </div>
</template>

<script setup>

defineProps({
  wallet: Number,
  earnMoney: Function,
  gambleMoney: Function,
  doubleOrNothing: Function,
  amount: Number,
  earnTwo: Function,
  earnTen: Function,
  earnFive: Function,
  doubleMoney: Function
})
</script>

<style scoped></style>