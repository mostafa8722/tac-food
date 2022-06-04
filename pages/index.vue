<template>
  <div class="containers">
    <div>

   <Sliders/>
   <Categories class="mt-3" />

  <Products title="تخفیفات" class="mt-10" />
  <Products title="محبوب ترین" class="mt-10" />
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sliders from '~/components/home/Sliders.vue'
import Categories from '~/components/home/Categories.vue'
import Products from '~/components/home/Products.vue'

export default Vue.extend({
   layout: 'home',
  components:{
    Sliders,
    Categories,
    Products
}
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea, span, .v-application {
  font-family: yekanRegular !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

 
  background-color: #f6f6f6;
}


</style>
