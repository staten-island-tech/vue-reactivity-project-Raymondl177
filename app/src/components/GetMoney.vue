<template>
  <div class="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm text-center text-gray-100">
    <button @click="earnMoney" class="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-500 transition">
      Earn Money
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
  amount: Number
})
</script>

<style scoped></style>