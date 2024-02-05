<script setup lang="ts">
import type { ProductProps } from "@/types";
import { RouterLink } from "vue-router"

defineProps<{
    product: ProductProps
}>()

</script>

<template>
    <div class="product-item">
        <img :src="`http://localhost:3000${product.imageUrl}`" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p class="product-price">Rp {{ product.price }}</p>
        <RouterLink :to="{ name: 'ProductDetails', params: { id: product.code } }">
            <button>Details</button>
        </RouterLink>
    </div>
</template>

<style scoped>
.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
}

.product-name {
    margin-bottom: 0;
}

img {
    height: 200px;
    width: 200px;
    border-radius: 5%;
}

a {
    width: 100%;
}

button {
    width: 100%;
}
</style>