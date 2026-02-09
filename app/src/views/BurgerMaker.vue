<template>
  <div>
    <h1>Burger Maker</h1>
    <div>
      <h2>Selected Ingredients</h2>
      <ul>
        <li v-for="(ingredient, index) in selectedIngredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Available Ingredients</h2>
      <button @click="addIngredient(ingredient)" v-for="(ingredient, index) in buns" :key="index">{{ ingredient }}</button>
      <button @click="addIngredient(ingredient)" v-for="(ingredient, index) in sauces" :key="index">{{ ingredient }}</button>
      <button @click="addIngredient(ingredient)" v-for="(ingredient, index) in toppings" :key="index">{{ ingredient }}</button>
    </div>
    <button @click="makeBurger">Make Burger</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedIngredients = ref([])

const buns = ref([
  'Regular Bun',
  'Sesame Seed Bun',
  'Whole Wheat Bun',
  'Gluten-Free Bun',
  'Brioche Bun',
  'Pretzel Bun'
])

const patties = ref([
  'Beef Patty',
  'Chicken Patty',
  'Veggie Patty',
  'Turkey Patty',
  'Fish Patty',
  'Beyond Meat Patty'
])

const sauces = ref([
  'BBQ Sauce',
  'Ketchup',
  'Mustard',
  'Mayonnaise',
  'Hot Sauce',
  'Sriracha'
])

const toppings = ref([
  'Lettuce',
  'Tomato',
  'Cheese',
  'Pickles',
  'Onions',
  'Bacon',
  'Avocado',
  'Mushrooms',
  'Jalapenos',
  'Pineapple'
])


function makeBurger() {
  if (selectedIngredients.value.length) {
    alert(`Making burger with: ${selectedIngredients.value.join(', ')}`)
  } else {
    alert('Please add some ingredients to your burger.')
  }
}

function addIngredient(ingredient) {
  selectedIngredients.value.push(ingredient)
}
</script>

<style scoped>

</style>