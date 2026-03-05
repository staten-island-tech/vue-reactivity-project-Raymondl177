<template>
  <div class="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-gray-100 mb-4">
    <h2 class="text-2xl font-bold mb-5 tracking-wide">Selected Ingredients</h2>
    <ul class="space-y-2">

      <li class="flex justify-between items-center h-12 px-3 rounded-lg hover:bg-gray-900 transition cursor-pointer"
        @click="removeIngredient('Bun')">
        <span class="font-medium">Bun:</span>
        <span class="flex-1 text-center text-gray-300">{{ ingredients.Bun.option }}</span>
        <span class="font-medium text-gray-300" v-if="ingredients.Bun.option">- ${{ ingredients.Bun.price.toFixed(2)
        }}</span>
      </li>

      <li class="flex justify-between items-center h-12 px-3 rounded-lg hover:bg-gray-900 transition cursor-pointer"
        @click="removeIngredient('Patty')">
        <span class="font-medium">Patty:</span>
        <span class="flex-1 text-center text-gray-300">{{ ingredients.Patty.option }}</span>
        <span class="font-medium text-gray-300" v-if="ingredients.Patty.option">- ${{ ingredients.Patty.price.toFixed(2)
        }}</span>
      </li>

      <li class="flex justify-between items-start h-auto px-3 rounded-lg hover:bg-gray-900 transition cursor-pointer">
        <span class="font-medium pt-3 pb-3">Toppings:</span>
        <div class="flex-1 text-center text-gray-300 flex flex-wrap justify-center gap-1 mt-1 px-4 pt-2 pb-3">
          <span v-for="(topping, index) in ingredients.Toppings" :key="topping.name" class="cursor-pointer"
            @click.stop="removeIngredient('Toppings', index)">
            {{ topping.name }}<span v-if="index < ingredients.Toppings.length - 1">,</span>
          </span>
          <span v-if="ingredients.Toppings.length === 0"></span>
        </div>
        <span class="font-medium text-gray-300" v-if="ingredients.Toppings.length">
          - ${{ingredients.Toppings.reduce((acc, t) => acc + t.price, 0).toFixed(2)}}
        </span>
      </li>

      <li class="flex justify-between items-center h-12 px-3 rounded-lg hover:bg-gray-900 transition cursor-pointer"
        @click="removeIngredient('Sauce')">
        <span class="font-medium">Sauce:</span>
        <span class="flex-1 text-center text-gray-300">{{ ingredients.Sauce.option }}</span>
        <span class="font-medium text-gray-300" v-if="ingredients.Sauce.option">- ${{ ingredients.Sauce.price.toFixed(2)
        }}</span>
      </li>
    </ul>
  </div>
</template>






<script setup>

defineProps({
  ingredients: Object,
  removeIngredient: Function
})

</script>

<style scoped></style>