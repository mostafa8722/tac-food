<template>
  <div class="containers">
    <CategoryComponents />
  </div>
</template>

<script lang="ts">

import Vue from "vue"
import CategoryComponents from '~/components/category/CategoryComponents.vue'

export default Vue.extend({
   layout: 'cart',
  components:{CategoryComponents,},
  created(){



   let prevInfo = this.$nuxt.context.from;



    let params = this.$route.params;
    let id = params.id;
   if(!prevInfo || prevInfo.name!="products-id")
   this.$store.dispatch('categories/categoriesPage',{lat:35.022731 , lng : 50.357277 ,type:id})
    }
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea, span, .v-application {
  font-family: yekanBold !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

  max-width: 600px;
  background-color: #f5f5f5;
}


</style>
