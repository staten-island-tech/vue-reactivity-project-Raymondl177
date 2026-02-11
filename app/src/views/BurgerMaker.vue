<template>
  <div>
    <h1>Burger Maker</h1>
    <div>
      <h2>Selected Ingredients</h2>
      <ul class="inline-flex flex-wrap gap-2 flex-col">
        <li class="border" v-for="(ingredient, index) in selectedIngredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2>Available Ingredients</h2>
      <div class="inline-flex flex-wrap gap-2 flex-col">
      <button class="border" @click="addIngredient(ingredient)" v-for="(ingredient, index) in ingredientSteps.buns" :key="index">{{ ingredient }}</button>
      <button class="border" @click="nextIngredient">Next</button>
      <button class="border" @click="makeBurger">Make Burger</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const selectedIngredients = ref({
  bun: null,
  patty: null,
  toppings: [],
  sauce: null
})

const ingredientSteps = ref({ 
  buns: [
    'Regular Bun',
    'Sesame Seed Bun',
    'Whole Wheat Bun',
    'Gluten-Free Bun',
    'Brioche Bun',
    'Pretzel Bun'
  ],
  patties: [
  'Beef Patty',
  'Chicken Patty',
  'Veggie Patty',
  'Turkey Patty',
  'Fish Patty',
  'Beyond Meat Patty'
],
  toppings: [
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
],
  sauces: [
  'BBQ Sauce',
  'Ketchup',
  'Mustard',
  'Mayonnaise',
  'Hot Sauce',
  'Sriracha'
]
})


function makeBurger() {
  if (selectedIngredients.value.length) {
    alert(`Making burger with: ${selectedIngredients.value.join(', ')}`)
  } else {
    alert('Please add some ingredients to your burger.')
  }
}

function addIngredient(ingredient) {
  selectedIngredients.value[ingredient.type].push(ingredient.name)
  if (selectedIngredients.value.bun.length > 1) {
    alert('You have added enough buns. Please make your burger.')
  }

}

function nextIngredient() {

}
</script>

<style scoped>
@import "tailwindcss";
</style>