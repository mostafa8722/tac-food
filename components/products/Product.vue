<template>
<v-card
    class="flex flex-col mt-2  overflow-hidden content-product pointer "
    width="100%"
    height="138"
     color="#ffffff"
  
  outlined
   @click.prevent="$emit('select-product',product)"
  >
    <div class="flex flex-row  ">
     <v-img
       
      height="60"
      width="60"
      class="flex-none rounded-xl"
      :src="product.logo"
    
    >
     <template v-slot:placeholder>
         <v-img
        src="/icons/logo.svg"
      height="40"
      width="40"
      class="flex-none img-placeholder "
    
    
    ></v-img>
        </template>
    </v-img>
    <div class="flex flex-col mr-2">
      <span class=" title">  {{product.name}}</span>
      <span class=" body">  {{product.description}}</span>
      

    </div>
    </div>
    <div class="flex flex-row-reverse mt-2 mb-2 items-center ">
      <v-rating
      v-model="product.rating"
      background-color="warning lighten-1"
      color="red"
      size="10"
      class="rating-section flex flex-row-reverse ml-2"
        
    ></v-rating>

      <span class=" type flex-100 text-left  ml-1">  {{product.vote}} رای</span>

    </div>
<div class="divider"></div>
    
  <div class="flex justify-between items-center mr-2 ml-2 mt-2">
  <span class=" price ">  {{formatPrice(product.price)}}</span>
  
    <div class="flex flex-row-reverse ">
      <font-awesome-icon @click.stop.prevent="addToCart" class="icon-custom pointer" :icon="`fa-solid  fa-add`" />
      <span v-if="cart_product.count" class="mr-3 ml-3">{{cart_product.count}}</span>
        <font-awesome-icon v-if="cart_product.count" @click.stop.prevent="removeFromCart" class="icon-custom pointer" :icon="`fa-solid  fa-minus`" />
    </div>
  

  </div>
  </v-card>


</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMinus,faTrash } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faMinus,faTrash)
import { mapGetters } from 'vuex'

export default {
  props : ["product"],
   computed: {
      ...mapGetters({
           carts: 'carts/carts',
            totalCart: 'carts/totalCart',
        
            })
         },
         data : ()=>({
             cart_product : {}
         }),
  methods:{
     addToCart(){
      
     
      
      this.$store.dispatch('carts/addCart', this.product)
    },
     removeFromCart(){
    //  console.log(this.product)
      this.$store.dispatch('carts/removeCart', this.product)
    },
      formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"تومان";
      },
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

.content-product{
  border-radius:0.3rem!important;
  border:0.5rem solid #dddddd;
}
.rounded-none{
  border-radius:0rem!important;
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
.body{
  color:#8d8d8d;
    font-size:0.6rem;
     clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 94%;
}
.type{
  color:#8d8d8d;
    font-size:0.6rem;
 
}
.flex-100{flex:100%;}

.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fe5c67!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}
.divider{height:1px;width:100%;background-color:#f6f6f6}

  .btn-custom{
  background-color:#ffffff!important;
  border:1px solid #fe5c67;
  height:20px!important;
  width:20px!important;
}
.icon-custom{
  color:#fe5c67!important;
  font-size:0.9rem!important;
  padding:0.1rem;
  border:0.1rem solid #fe5c67;
  border-radius: 50%;

}
.img-placeholder{
     position: absolute;
    left: 10px;
    top: 10px;
    }
      

    
  
</style>
