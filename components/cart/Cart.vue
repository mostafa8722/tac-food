<template>
<div class="flex flex-col items-center mr-3 mt-2 ml-3 ">
  <v-card
    class="flex items-center overflow-hidden pb-2 rounded-xl"
    width="100%"
  
     
     dir="rtl"
    outlined 
 
  >
    <div class="flex flex-col">
    <div class="flex mt-2">
<v-img
      height="40"
      width="40"
      class="flex-none  rounded mr-2"
      :src="product.logo"
    
    ></v-img>


  <div class="flex flex-col mr-2 mt-1">
      <span class=" title">  {{product.name}}</span>
 
  <span class=" price"> {{formatPrice(product.count)}} 	&#215; {{formatPrice(product.price)}} </span>
  </div>

 <div class="flex flex-row-reverse mt-2 ml-2">
    <font-awesome-icon @click.prevent="addToCart" class="icon-custom ml-2 pointer" :icon="`fa-solid  fa-add`" />
      
        <font-awesome-icon  @click.prevent="removeFromCart" class="icon-custom ml-2 pointer" :icon="`fa-solid  fa-minus`" />
   </div>
   </div>
   <CartOption v-for="item in product.details" :currentCart="product" :product="item" />
  </div>
  </v-card>
   
</div>


</template>
<script>

import CartOption from './CartOption.vue';
import { mapGetters } from 'vuex'
export default {
  props : ["product"],
   computed: {
      ...mapGetters({
           carts: 'carts/carts',
            totalCart: 'carts/totalCart',
        
            })
         },
  components:{
CartOption
  },
  methods:{
     formatPrice(price) {
         return  Number(price).toLocaleString();
      },
      addToCart(){
       this.$store.dispatch('carts/addCart', this.product)
      },
      removeFromCart(){
        
      this.$store.dispatch('carts/removeCart', this.product)
      }
  },
   watch:{
    totalCart(new_val,old_val){
    
  
      

   let item_remove = true;
  if(this.carts.length>0 )
     this.carts.map((item,index)=>{
       item.products.map(item_detail=>{
       
           if(item_detail.id == this.product.id){
             item_remove = false;
              this.cart_product = item_detail;
           }
             
        
           
       });
     })

     if(item_remove)
  this.cart_product = [];
    

    }
  }
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.rounded-xl{
  border-radius:0.3rem!important;
  border: 1px solid  #dddddd;
}
.rounded{
  border-radius:50%!important;
   border: 1px solid  #dddddd;
  
}
.title{
  color:#717171;
  font-size:0.75rem;
}
.price{
  color:#717171;
    font-size:0.5rem;
  font-family: yekanNumRegular!important;
  
}
.type{
  color:#8d8d8d;
    font-size:0.6rem;
}
   .btn-custom{
  background-color:#ffffff!important;
  border:1px solid #717171;
  height:30px!important;
  width:30px!important;
}
.icon-custom{
  color:#717171!important;
  font-size:0.9rem!important;
  padding:0.1rem;
  border:0.1rem solid #717171;
  border-radius: 50%;

}
</style>