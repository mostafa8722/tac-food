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
  components:{

    CategoryComponents,
   
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
