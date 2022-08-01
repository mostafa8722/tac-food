<template>
   <section>
     
     
        <Empty  v-if="myOrders.length==0" />

        
        <Orders v-else v-for="order in myOrders" :key ="order.order_id" :order="order"  :orderState="getOrderState(order)"  />
        
    </section>

</template>
<script>


import Empty from './Empty'
import Orders from './Orders'
 import Cookies  from 'js-cookie';


import { mapGetters } from 'vuex';

export default {
    components: { Empty, Orders },
   computed :{
    ...mapGetters({
        myOrders : "orders/myOrders",
        myOrdersState : "orders/myOrdersState"
    })
   },
      created(){
            
               if(Cookies.get("user")){
           let user = JSON.parse (Cookies.get("user"));
                 let token  = {
                       api_token: user.api_token,
                       is_order : true
                    };
                 
               this.$store.dispatch('orders/showMyOrders',token)      
               this.$store.dispatch('orders/showOrdersState',token)      
              
              
                
                }else{
                 
                }
           
         },
    
    methods :{
        getOrderState(order){
            return this.myOrdersState.filter(item => item.id== order.order_id )[0];
        }
    }
  
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.circle-border{
  height:110px;  
  width:110px;  
  border : 4px solid #fe606a;
  border-radius:50%;

}
.circle-border span{
    color :#676767;
    font-size:0.75rem;
    font-family: yekanBold!important;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanBold!important;
}
.btn-add{
    background-color : #fd5e63!important;
    width: 200px;
   
}
.white{
  
    color : #ffffff!important;
}
</style>
