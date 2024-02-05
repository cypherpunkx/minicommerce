<script setup lang="ts">
import axios from "axios";
import { ref, reactive, onMounted, computed } from "vue"
import ItemCart from "@/components/ItemCart.vue";
import type { ProductProps } from "@/types";


const products = reactive(new Map())
const cartItems = ref<ProductProps[] | null>(null);

onMounted(async () => {
    const data = (await axios.get("http://localhost:3000/api/orders/user/1")).data

    products.set('products', [...new Set(...[...data.map(prop => prop.products)])])

    cartItems.value = products.get("products")
})

const totalPrice = computed(() => {
    if (cartItems.value?.length) {
        return cartItems.value.reduce((total, item) => total + (+item.price), 0)
    }

    return 0
})

const removeFromCart = async (code: string) => {
    await axios.delete(`http://localhost:3000/api/orders/user/1/product/${code}`)

    const indexCart = cartItems.value?.map(item => {
        return item.code
    }).indexOf(code)

    if (indexCart) {
        cartItems.value?.splice(indexCart, 1)
    }
}



</script>

<template>
    <div>
        <div id="page-wrap">
            <h3>Shopping cart</h3>
            <ItemCart v-for="item in cartItems" :key="item.id" :item="item" v-on:remove-item="removeFromCart($event)" />
            <h3 id="total-price">Rp. {{ totalPrice }}</h3>
            <button id="checkout-button">Checkout</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
}

#total-price {
    padding: 16px;
    text-align: right;
}

#checkout-button {
    width: 100%;
}
</style>