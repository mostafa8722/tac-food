<template>
  <div class="containers">
    <div>

   <Payment />
  
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Payment from '~/components/payment/PaymentComponent.vue'


export default Vue.extend({
    layout: 'headerLayout',

  components:{
    Payment,
}
})
</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanRegular !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;
 max-width: 600px;

 
  background-color: #f5f5f5;
}
.containers > div{
   margin: 0 auto;

}

</style>
