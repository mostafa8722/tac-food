<template>
<NuxtLink v-if="product.id" :class="`${page=='search'?'w-100':''}`" :to="`/products/${product.id}`">
<v-card
    class="flex flex-col mt-2  overflow-hidden  content-product"
 
    height="136"

     color="#ffffff"
  
  outlined
 
  >
    <div class="flex flex-row mr-1 mt-1">
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
     <div>
          <span class=" title">  {{product.name}}</span>
             <span class=" circle-parent circle-green"> 
               <span class="circle-child"></span>
             </span>
     </div>
      <span class=" body flex mt-1"> 
        <span v-for="(cat,index) in product.categories" >  {{index==0?cat:`,${cat}`}}</span>
       </span>
      <span class=" address ">   {{product.address}}</span>

    </div>
    </div>
  
<div class="divider mt-5"></div>
    
  <div class="flex justify-between items-center mt-2 mr-2 ml-2">
  <span v-if="product.delivery_cost==0" class=" price "> رایگان</span>
  <span v-else class=" price flex">
    <span>{{formatPrice(product.delivery_cost)}}</span>
    <span class="mr-2">تومان</span>
  </span>
 
   <div class="grid grid-cols-2 ">
      <div class=" type flex ml-2  ">  {{product.vote}} رای</div>
     
      <v-rating
      v-model="product.rating"
      background-color="warning lighten-1"
      color="#fd5e63"
      size="20"
      class="rating-section flex flex-row-reverse ml-2"
        
    ></v-rating>


    </div>

  </div>
  </v-card>
</NuxtLink>



</template>
<script>

export default {
  props : ["product",'page'],
  methods:{
      formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"";
      },
  }
}
</script>
<style >
.flex-none{
    flex:none;
}

.content-product{
  border-radius:0.3rem!important;
  border:0.5rem solid #dddddd;
  width:calc(100% - 10px)
}
.rounded-none{
  border-radius:0rem!important;
}
.title{
 color:#606060;
    font-size:0.85rem;
     font-family: IranYekanFN !important;
}
.price{
  color:#8e8e8e;
    font-size:0.85rem;
     font-family: IranYekanFN !important;
}
.price span{
  color:#8e8e8e;
    font-size:0.75rem;
     font-family: IranYekanFN !important;
}
.address{
  color:#717171;
    font-size:0.5rem;
}

.body{
  color:#8e8e8e;
    font-size:0.85rem;
     clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 94%;
}
.type{
    color:#8e8e8e;
    font-size:0.85rem;
     font-family: IranYekanFN !important;
     flex-direction: row-reverse;
 
}

.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fe5c67!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}
.divider{height:1px;width:100%;background-color:#f5f5f5}
.circle-parent{
  width:10px;
  height:10px;
  background:#ffffff;
  
  position:absolute;
  border-radius :50%;
  left:10px;
  top:10px;}

.circle-child{
  width:5px;
  height:5px;
   border-radius :50%;
  background:#ff2200;
    right:0.09rem;
    top:0.09rem;}

    .circle-green{border:1px solid #6cb066;}
    .circle-red{border:1px solid #f65d60;}

    .circle-green span{background:#6cb066;}
    .circle-red span{background:#f65d60;}


  .btn-custom{
  background-color:#ffffff!important;
  border:1px solid #fe5c67;
  height:20px!important;
  width:20px!important;
}
.icon-custom{
  color:#fe5c67!important;
  font-size:17px!important;

}
    

.img-placeholder{
     position: absolute;
    left: 10px;
    top: 10px;
    }
  
</style>
