<template>
<div :id="`content-product-${product.id}`" class="content-product mt-2">
 <NuxtLink :to="`/products/${product.store_id}`">
<v-card
    class="flex flex-col pt-2   overflow-hidden  pointer "
    width="100%"
    height="155"
     color="#ffffff"
  
  outlined
   @click="$emit('select-product',product)"
  >
    <div class="flex flex-row  pr-2 pl-2 ">
     <v-img
       
      height="65"
      width="65"
      
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
      <div class="d-flex">
          <span class=" title">  {{product.name}}</span>
                

          <div v-if="product.discount && product.discount!=0" class="shape-octagon"><span>{{product.discount}}%</span></div>
      </div>
     
      

      <span class=" body">  {{product.description}}</span>
      

    </div>
    </div>
    <div class="flex flex-row-reverse mt-2 mb-2 items-center ">
      <v-rating
      v-model="product.rating"
      background-color="warning lighten-1"
      color="#fd5e63"
      size="20"
      class="rating-section flex flex-row-reverse ml-2"
        
    ></v-rating>

      <span v-if="product.vote>0" class=" type flex-100 text-left  ml-1">  {{product.vote}} نفر</span>

    </div>
<div class="divider"></div>
    
  <div class="flex justify-between items-center mr-2 ml-2 mt-2">
  <span class=" price ">  {{formatPrice(product.price)}}</span>
  
    <div v-if="page=='store' && product.status==1 " class="flex flex-row-reverse ">
      <font-awesome-icon @click.stop.prevent="addToCart" class="icon-custom pointer" :icon="`fa-solid  fa-add`" />
      <span v-if="cart_product.count" class="type mr-2  ml-2">{{cart_product.count}}</span>
        <font-awesome-icon v-if="cart_product.count" @click.stop.prevent="removeFromCart" class="icon-custom pointer" :icon="`fa-solid  fa-minus`" />
    </div>
    <div v-if="page=='store' && product.status==0 " class="flex flex-row-reverse ">
      <span  class="type mr-2  ml-2">اتمام موجودی</span>
       
    </div>
    <div v-if="page=='search'" class="flex flex-row-reverse items-center ">
      <font-awesome-icon  class="icon-left-angle-store pointer" :icon="`fa-solid  fa-angle-left`" />
      <span  class="store-name mr-2  ml-2">{{product.store_name}}</span>
      
    </div>
  

  </div>
  </v-card>
  </NuxtLink>
</div>



</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMinus,faTrash,faAngleLeft } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faMinus,faTrash,faAngleLeft)
import { mapGetters } from 'vuex'

export default {
  props : ["product","page","is_store_online"],
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
    
     if(!this.is_store_online)
       this.$store.dispatch('carts/addCart', this.product)
       else 
       this.$toast.error("!فروشگاه بسته است ")
     
    },
     removeFromCart(){
     if(!this.is_store_online)
       this.$store.dispatch('carts/removeCart', this.product)
       else 
       this.$toast.error("!فروشگاه بسته است ")
     
    },
      formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"تومان";
      },
  },
  created(){
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
  border-radius:0.35rem!important;

  border: 0.055rem solid #cccccc;
}
.rounded-none{
  border-radius:0rem!important;
}
.title{
  color:#606060;
  font-size:0.85rem;
    font-family: IranYekanFN!important;
}
.price{
  color:#606060;
    font-size:0.8rem;
  font-family: IranYekanFN!important;
  
}
.body{
  color:#8e8e8e;
    font-size:0.8rem;
     clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(100% - 80px);
    margin-top: 0.5rem;
    display:flex;
}
.type{
  color:#8e8e8e;
    font-size:0.85rem;
     font-family: IranYekanFN!important;
 
}
.flex-100{flex:100%;}

.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fd5e63!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}
.divider{height:1px;width:100%;background-color:#e5e5e5}

  .btn-custom{
  background-color:#ffffff!important;
  border:1px solid #fd5e63;
  height:20px!important;
  width:20px!important;
}
.icon-custom{
  color:#fd5e63!important;
  height: 13px;
  width: 13px;
  padding:0.1rem;
  border:0.1rem solid #fd5e63;
  border-radius: 50%;

}
.store-name{
    color:#fd5e63!important;
    font-size: 0.85rem;
}
.icon-left-angle-store {
    color:#fd5e63!important;
    font-size: 0.85rem;
}
.img-placeholder{
     position: absolute;
    left: 10px;
    top: 10px;
    }
      

    .shape-octagon {
      background: #fd5e63;
      width: 20px;
      height: 20px;
      top:5px;
      left:5px;
          border-radius: 2px;
          margin-right: 15px;
      position: relative;
      text-align: center;
      transform: rotate(20deg);
      color:#fff;
      display:flex;
      justify-content:center;
      align-items :center;
    }
    .shape-octagon:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
          border-radius: 2px;
      background: #fd5e63;
      transform: rotate(135deg);
    }
   .shape-octagon span {
      position: absolute;
      font-size: 0.75rem;
      transform: rotate(-20deg);
      left:2px;
       font-family: yekanNumRegular!important;
    }
  
</style>
