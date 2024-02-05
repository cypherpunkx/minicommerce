<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "axios"
import ProductItem from "@/components/ProductItem.vue";
import type { ProductProps } from "@/types";


let products = ref<ProductProps[]>([])

onMounted(async () => {
    products.value = (await axios.get("http://localhost:3000/api/products")).data
    console.log(products.value)
})



</script>

<template>
    <div id="page-wrap">
        <div class="grid-wrap">
            <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
        </div>
    </div>
</template>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
}
</style>