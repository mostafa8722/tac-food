<template>
  <div class="containers">
    <div>

   <Payments />
   
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Payments from '~/components/profile/Payments.vue'


export default Vue.extend({
  components:{
    Payments
}
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanNumRegular !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

 
  background-color: #f5f5f5;
}


</style>
