<template>
   <section class=" bg flex justify-center ">
     
     
     <div class="  mr-2 ml-2 ">

    
  
          
  
         <Payment v-if="payments.length>0"  v-for="(item, index) in payments" :key="item.id" :payment="item" />
           
     
      <Empty v-if="payments.length==0"  />
      
     </div>
    </section>

</template>
<script>

import Payment from './Payment.vue';
import Empty from './PaymentEmpty.vue';
import { mapGetters } from 'vuex'

import Cookies from 'js-cookie';

export default {
    components: {  Payment,Empty},
      props: {
          title:{
              type:String
          }
      },
  computed: {
             ...mapGetters({ payments: 'products/payments' })
         },
 

    created(){

          if(Cookies.get("user")){
        let user = JSON.parse (Cookies.get("user"));
                 let token  = {
                       api_token: user.api_token
                    };
                 
                  this.$store.dispatch('products/customerPaymentSection',token)
                  
                }else{
                
                 this.$store.dispatch('home/authenticatedCode',{status:401})
                }
   
  
       
         
     },
    
   
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.bg{
      background-color: #f5f5f5;
}
.header-comment{
    height:120px;
    background:#ffffff;

    padding: 10px 20px;
}
.header-Comments{
    background-color: #ffffff;
    height: 40px;
    border-bottom: 0.1rem solid #9c9c9c;
}
.red{
    color:#ff2200;
    font-size: 0.7rem;
}
</style>
