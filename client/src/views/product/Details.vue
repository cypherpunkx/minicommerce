<script setup lang="ts">
import { useRoute } from "vue-router"
import { ref, onMounted, computed } from 'vue'
import axios from "axios";
import NotFound from "@/views/errors/404.vue"
import type { ProductProps } from "@/types";

const route = useRoute()

const { id } = route.params
const product = ref<ProductProps>()
const notification = ref(false)

onMounted(async () => {
    product.value = (await axios.get(`http://localhost:3000/api/products/${id}`)).data
})

const addToCart = async (code: string) => {
    await axios.post(`http://localhost:3000/api/orders/user/1/add`, {
        product: code
    })

    notification.value = !notification.value

    setTimeout(() => {
        notification.value = !notification.value
    }, 1000)
}

</script>

<template>
    <div>
        <div id="page-wrap" v-if="product">
            <h4 v-if="notification" class="notification">Item added successfully</h4>
            <div id="img-wrap">
                <img :src="`http://localhost:3000${product.imageUrl}`" :alt="product.name">
            </div>
            <div id="product-details">
                <h1>{{ product?.name }}</h1>
                <h3 id="price">Rp. {{ product.price }}</h3>
                <p>Average rating: {{ product.averageRating }}</p>
                <button id="add-to-cart" @click="addToCart(product.code)">Add to cart</button>
                <p>{{ product.description }}</p>
            </div>
        </div>
        <!-- <NotFound v-else /> -->
        <div class="container-loading" v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>

<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
}

#img-wrap {
    text-align: center;
}

img {
    width: 400px;
}

#product-details {
    padding: 16px;
    position: relative;
}

#add-to-cart {
    width: 100%;
    margin-bottom: 10px;
}

#price {
    position: absolute;
    top: 24px;
    right: 16px;
}

.container-loading {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.notification {
    text-align: center;
    color: #fff;
    background-color: #41b883;
    padding: 3%;
    border-radius: 8px;
}
</style>