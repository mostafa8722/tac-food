<template>
  <div class="containers pb-10">
    <div>
   <SearchBox />   
  
   <Sliders/>
   
   <Categories class="mt-3" />

  <Products type="discount" title="تخفیفات" class="mt-10" />
  <Products type="popular" title="محبوب ترین" class="mt-10 mb-10" />
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBox from '~/components/app/SearchBox.vue'
import Sliders from '~/components/home/Sliders.vue'
import Categories from '~/components/home/Categories.vue'
import Products from '~/components/home/Products.vue'
import Map from '~/components/home/Map.vue'

export default Vue.extend({
   layout: 'home',
  components:{
    Sliders,
    Categories,
    Products,
    SearchBox,
    Map
},
created(){
   this.$store.dispatch('home/homePage',{lat:35.022731 , lng : 50.357277 })
}
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea, span, .v-application {
  font-family: yekanNumRegular !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

 
 
  background-color: #f6f6f6;
}


</style>
