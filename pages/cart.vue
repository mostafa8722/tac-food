<template>
  <div class="containers">
    <div>

   <Cart />
   <CartButton />
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cart from '~/components/cart/CartComponent.vue'
import CartButton from '~/components/app/AddToCartButton.vue'

export default Vue.extend({
    layout: 'custom',
  components:{
    Cart,CartButton
}
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanBold !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

 
  background-color: #f5f5f5;
}


</style>
