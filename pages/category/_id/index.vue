<template>
  <div class="containers">
    <CategoryComponents />
  </div>
</template>

<script lang="ts">

import Vue from "vue"
import CategoryComponents from '~/components/category/CategoryComponents.vue'

export default Vue.extend({
   layout: 'home',
  components:{CategoryComponents,},
  created(){

  
    let params = this.$route.params;
    let id = params.id;
 
   this.$store.dispatch('categories/categoriesPage',{lat:35.022731 , lng : 50.357277 ,type:id})
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

  max-width: 600px;
  background-color: #f6f6f6;
}


</style>
