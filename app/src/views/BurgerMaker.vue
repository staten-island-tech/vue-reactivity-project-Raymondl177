<template>
  <div>
    <h1>Burger Maker</h1>
    <div>
      <h2>Selected Ingredients</h2>
      <ul class="inline-flex flex-wrap gap-2 flex-col">
        <li class="border">Bun: {{ selectedIngredients.bun.option }} (${{ selectedIngredients.bun.price }})</li>
        <li class="border">Patty: {{ selectedIngredients.patty.option }} (${{ selectedIngredients.patty.price }})</li>
        <li class="border">Toppings: {{ selectedIngredients.toppings.map(t => t.option).join(', ') }} (${{ roundToNearestTenth(selectedIngredients.toppings.reduce((acc, t) => acc + t.price, 0)) }})</li>
        <li class="border">Sauce: {{ selectedIngredients.sauce.option }} (${{ selectedIngredients.sauce.price }})</li>
      </ul>

    </div>
    <div class="mt-4">
      <h2>Available Ingredients</h2>
      <div class="inline-flex flex-wrap gap-2 flex-col">
        <button class="border" @click="addIngredient(item)" v-for="(item, index) in ingredientSteps[step].options"
          :key="index">{{ item.name }} (${{ item.price }})</button>
          <button class="border" @click="previousIngredient" :disabled="step.value === 0">Back</button>
          <button class="border" @click="clearIngredients">Clear Ingredients</button>
        <button class="border" @click="nextIngredient"
          :disabled="step.value === ingredientSteps.length - 1">Next</button>
        <button class="border" @click="makeBurger">Make Burger</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

function roundToNearestTenth(num) {
return Math.round(num * 10) / 10;
}

const selectedIngredients = reactive({
  bun: { option: null, price: 0 },
  patty: { option: null, price: 0 },
  toppings: [],
  sauce: { option: null, price: 0 }
})

const ingredientSteps = [
  {
    key: 'bun',
    options: [
      { name: 'Sesame Bun', price: 1.0 },
      { name: 'Whole Wheat Bun', price: 1.2 },
      { name: 'Gluten-Free Bun', price: 1.5 },
      { name: 'Brioche Bun', price: 1.8 },
      { name: 'Pretzel Bun', price: 2.0 },
      { name: 'Potato Bun', price: 1.5 },
      { name: 'Ciabatta Bun', price: 2.0 },
      { name: 'Multigrain Bun', price: 1.5 },
      { name: 'Sourdough Bun', price: 2.0 }
    ]
  },
  {
    key: 'patty',
    options: [
      { name: 'Beef Patty', price: 3.0 },
      { name: 'Chicken Patty', price: 2.5 },
      { name: 'Veggie Patty', price: 2.0 },
      { name: 'Turkey Patty', price: 2.5 },
      { name: 'Fish Patty', price: 3.0 },
      { name: 'Beyond Meat Patty', price: 3.5 },
      { name: 'Lamb Patty', price: 3.5 },
      { name: 'Buffalo Patty', price: 3.8 },
      { name: 'Salmon Patty', price: 3.5 },
      { name: 'Portobello Mushroom Patty', price: 2.8 }
    ]
  },
  {
    key: 'toppings',
    options: [
      { name: 'Lettuce', price: 0.5 },
      { name: 'Tomato', price: 0.5 },
      { name: 'Onion', price: 0.3 },
      { name: 'Pickles', price: 0.4 },
      { name: 'Bacon', price: 1.0 },
      { name: 'Cheese', price: 0.8 },
      { name: 'Avocado', price: 1.2 },
      { name: 'Jalapenos', price: 0.5 },
      { name: 'Mushrooms', price: 0.7 },
      { name: 'Pineapple', price: 0.6 },
      { name: 'Spinach', price: 0.5 },
      { name: 'Arugula', price: 0.7 },
      { name: 'Fried Egg', price: 1.0 },
      { name: 'Coleslaw', price: 0.8 },
      { name: 'Grilled Peppers', price: 0.9 }
    ]
  },
  {
    key: 'sauce',
    options: [
      { name: 'Ketchup', price: 0.3 },
      { name: 'Mustard', price: 0.3 },
      { name: 'Mayo', price: 0.4 },
      { name: 'BBQ Sauce', price: 0.5 },
      { name: 'Sriracha', price: 0.5 },
      { name: 'Ranch', price: 0.5 },
      { name: 'Honey Mustard', price: 0.6 },
      { name: 'Chipotle Mayo', price: 0.7 },
      { name: 'Garlic Aioli', price: 0.7 },
      { name: 'Teriyaki Sauce', price: 0.6 }
    ]
  }
]





function makeBurger() {
  if (selectedIngredients.bun && selectedIngredients.patty && selectedIngredients.sauce) {
    alert(`Your burger with ${selectedIngredients.bun}, ${selectedIngredients.patty}, ${selectedIngredients.toppings.join(', ')}, and ${selectedIngredients.sauce} is ready!`)
  } else {
    alert('Please select at least a bun, patty, and sauce to make your burger.')
  }
}

function addIngredient(item) {
  const currentStep = ingredientSteps[step.value]
  if (currentStep.key === 'toppings') {
    if (!selectedIngredients.toppings.includes(item)) {
      selectedIngredients.toppings.push(item)
      selectedIngredients.toppings.reduce((acc, t) => Math.floor(acc + t.price), 0)
    }
  } else {
    selectedIngredients[currentStep.key] = item
    selectedIngredients[currentStep.key].option = item.name
    selectedIngredients[currentStep.key].price = item.price
  }

}
const step = ref(0)

function nextIngredient() {
  if (step.value < ingredientSteps.length - 1) {
    step.value++
  } else {
    alert('You have gone through all the ingredient options. Please make your burger.')
  }
}

function clearIngredients() {
  selectedIngredients.bun[0] = { option: null, price: 0 }
  selectedIngredients.patty[0] = { option: null, price: 0 }
  selectedIngredients.toppings = [{ option: null, price: 0 }]
  selectedIngredients.sauce[0] = { option: null, price: 0 }
}

function previousIngredient() {
  if (step.value > 0) {
    step.value--
  }
}
</script>

<style scoped>
@import "tailwindcss";
</style>