<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    definePageMeta({
      layout: "products",
    })

    useHead({
      title: 'Nuxt | Merch',
      meta: [
        { name: 'description', content: 'Nuxt 3 Merch'}
      ]
    })

    return {
      products
    }
  }
}
</script>