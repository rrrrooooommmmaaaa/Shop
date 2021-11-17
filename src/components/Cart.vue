<template>
    <div class="products">
        <h1>Cart</h1>
        <template v-if="cart.length">
            <div class="product" v-for="(item) in cart" v-bind:key="item._id">
                <div class="product-image">
                    <img v-bind:src="item.src">
                </div>
                <div>
                    <h4 class="product-title">
                        <router-link v-bind:to="'/product/' + item.id">
                            {{ item.item }}
                        </router-link>
                    </h4>
                    <label>{{item.price}}</label>
                    <button class="btn" @click="removeFromCart(item.id)">Remove</button>
                    <div class="counter">
                        <button class="btn counter__button" @click="decrementProductAmount(item.id)">-</button>
                        <p>{{ item.amount }}</p>
                        <button class="btn counter__button" @click="incrementProductAmount(item.id)">+</button>  
                    </div>  
                </div>
            </div>
            <div class="cart-footer">
                <p>Total price: {{ totalPrice }}</p>
            </div>
        </template>
        <div v-else>
            Cart is empty =(
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            cart() {
                return this.$store.getters.getCart
            },
            totalPrice() {
                return this.$store.getters.getCart.reduce((total, current) => total += current.price * current.amount, 0).toFixed(2)
            }
        },
        methods: {
            removeFromCart(id) {
                this.$store.commit('removeItem', id)
            },
            incrementProductAmount(id) {
                this.$store.commit('incrementProductAmount', id)
            },
            decrementProductAmount(id) {
                this.$store.commit('decrementProductAmount', id)
            },
        },
    }
</script>
