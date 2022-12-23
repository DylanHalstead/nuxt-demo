<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  // destructure data from url response, call it products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  // Changing default config stuff
  useHead({
    title: 'NuxtDojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch' }
    ]
  })

</script>

<style scoped>

</style>