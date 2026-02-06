<template>
  <div>
    <h1>Burger Maker</h1>
    <input v-model="newIngredient" @keyup.enter="addIngredient" placeholder="Add ingredient" />
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>

    <button @click="makeBurger">Make Burger</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ingredients = ref([
  'Lettuce',
  'Tomato',
  'Cheese',
  'Pickles',
  'Onions',
  'Bacon',
  'Avocado',
  'Mushrooms'
  
])
const newIngredient = ref('')

function addIngredient() {
  if (newIngredient.value) {
    ingredients.value.push(newIngredient.value)
    newIngredient.value = ''
  }
}

function makeBurger() {
  if (ingredients.value.length) {
    alert(`Making burger with: ${ingredients.value.join(', ')}`)
  } else {
    alert('Please add some ingredients to your burger.')
  }
}

</script>

<style scoped>

</style>