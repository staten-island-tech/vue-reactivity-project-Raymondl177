<template>
  <div class="min-h-screen bg-gray-900 p-6 flex flex-row items-center justify-center">
  <div class="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
    <h1 class="text-3xl font-bold text-gray-100 mb-6">Burger Maker</h1>

    <SelectedIngredients :ingredients="selectedIngredients" :removeIngredient="removeIngredient"
      class="mb-6 w-full max-w-md" />

    <IngredientSelector 
    :currentStep="ingredientSteps[step]" 
    :onSelect="addIngredient" 
    :onNext="nextIngredient"
    :onPrevious="previousIngredient" 
    :onClear="clearIngredients" 
    :makeBurger="makeBurger" 
    :calculateTotal="calculateTotal"
    class="mb-6 w-full max-w-md" />

    <div class="flex justify-between items-center w-full max-w-md text-gray-100 mb-6">
      <p class="text-lg font-medium">Total Price: ${{ calculateTotal().toFixed(2) }}</p>
      <p class="text-lg font-medium">Wallet: ${{ store.wallet.toFixed(2) }}</p>
    </div>

    <router-link to="/money" class="bg-blue-600 text-gray-100 px-6 py-2 rounded-lg hover:bg-blue-500 transition">
      Go earn money
    </router-link>
  </div>

  <div id="burger-preview" class="min-h-screen bg-gray-900 p-6 flex flex-col items-center hidden justify-center">
    <h1 class="text-3xl font-bold text-gray-100 mb-6">Your Burger</h1>
    <img src="/images/Burger.png" alt="Burger">
  </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { store } from '@/store.js'
import IngredientSelector from '@/components/IngredientSelector.vue'
import SelectedIngredients from '@/components/SelectedIngredients.vue'

const selectedIngredients = reactive({
  Bun: { option: null, price: 0 },
  Patty: { option: null, price: 0 },
  Toppings: [],
  Sauce: { option: null, price: 0 }
})

const ingredientSteps = [
  {
    key: 'Bun',
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
    key: 'Patty',
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
    key: 'Toppings',
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
    key: 'Sauce',
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

function addIngredient(item) {
  const currentStep = ingredientSteps[step.value]
  if (currentStep.key === 'Toppings') {
    if (!selectedIngredients.Toppings.includes(item)) {
      selectedIngredients.Toppings.push(item)
      selectedIngredients.Toppings.reduce((acc, t) => acc + t.price, 0)
      hideBurger()
    }
  } else {
    selectedIngredients[currentStep.key].option = item.name
    selectedIngredients[currentStep.key].price = item.price
    hideBurger()
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
  selectedIngredients.Bun = { option: null, price: 0 }
  selectedIngredients.Patty = { option: null, price: 0 }
  selectedIngredients.Toppings = []
  selectedIngredients.Sauce = { option: null, price: 0 }
  hideBurger()
}

function previousIngredient() {
  if (step.value > 0) {
    step.value--
  }
}

function removeIngredient(category, index) {
  if (category === 'Toppings') {
    selectedIngredients.Toppings.splice(index, 1)
  } else {
    selectedIngredients[category] = { option: null, price: 0 }
  }
}

function makeBurger() {
  if (!selectedIngredients.Bun.option || !selectedIngredients.Patty.option || selectedIngredients.Toppings.length === 0 || !selectedIngredients.Sauce.option) {
    alert('Please complete your burger by selecting a bun, patty, at least one topping, and a sauce.')
    return
  } else if (calculateTotal() > store.wallet) {
    alert('You do not have enough money to make this burger. Please remove some toppings or go earn more money.')
  }
    else {
    alert('Your burger with ' + selectedIngredients.Bun.option + ', ' + selectedIngredients.Patty.option + ', ' + selectedIngredients.Toppings.map(t => t.name).join(', ') + ', and ' + selectedIngredients.Sauce.option + ' that costs $' + calculateTotal() + ' is ready!')
    store.wallet -= calculateTotal()
    clearIngredients()
    showBurger()
    step.value = 0
  }
}

function showBurger(){
  const burgerContainer = document.getElementById('burger-preview')
  burgerContainer.style.display = 'flex'
}

function hideBurger(){
  const burgerContainer = document.getElementById('burger-preview')
  burgerContainer.style.display = 'none'
}

function calculateTotal() {
  const bunPrice = selectedIngredients.Bun.price || 0
  const pattyPrice = selectedIngredients.Patty.price || 0
  const toppingsPrice = selectedIngredients.Toppings.reduce((acc, t) => acc + t.price, 0)
  const saucePrice = selectedIngredients.Sauce.price || 0
  return bunPrice + pattyPrice + toppingsPrice + saucePrice
}

</script>

<style scoped></style>