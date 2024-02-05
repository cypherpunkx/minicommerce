<template>
    <nav class="navbar">
        <div class="container">
            <RouterLink to="/">
                <h3 class="navbar-brand">Minicommerce</h3>
            </RouterLink>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <RouterLink :to="{ name: 'Product' }"
                        :class="['nav-link', $route.path === '/' ? 'nav-pills--success text-white' : '']">Product
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{ name: 'Cart' }"
                        :class="['nav-link', $route.path === `/cart` ? 'nav-pills--success text-white' : '']">Cart
                    </RouterLink>
                </li>

            </ul>
        </div>
    </nav>
</template>

<style scoped>
.nav-pills--success {
    background-color: #41b883;
}

#nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
}

#products-link {
    text-align: center;
    display: block;
    color: #41B883;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
}

#products-link h1 {
    margin: 0;
}

#cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
}
</style>