<template>
  <div>
    <Head>
      <Title>Nuxt | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script>
export default {
  async setup() {
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    const { data: product } = await useFetch(uri, { key: id })

    if (!product.value) {
      throw createError({ statusCode: 404, statusMessage: 'Product not found' })
    }

    definePageMeta({
      layout: "products",
    })

    return {
      product
    }
  }
}
</script>