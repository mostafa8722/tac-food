<template>
<v-card
    class="flex flex-col mt-2  overflow-hidden  content-product"
 
    height="140"
     color="#ffffff"
  
  outlined
 
  >
    <div class="flex flex-row mr-1 mt-1">
      <v-img
      height="60"
      width="60"
      class="flex-none rounded-xl"
      :src="product.logo"
    
    ></v-img>

    <div class="flex flex-col mr-2">
     <div>
          <span class=" title">  {{product.name}}</span>
             <span class=" circle-parent circle-green"> 
               <span class="circle-child"></span>
             </span>
     </div>
      <span v-for="cat in product.categories" class=" body mt-2">  {{cat}}</span>
      <span class=" address mt-2">   {{product.address}}</span>

    </div>
    </div>
  
<div class="divider mt-3"></div>
    
  <div class="flex justify-between items-center mr-2 ml-2">
  <span v-if="product.delivery_cost==0" class=" price "> رایگان</span>
  <span v-else class=" price "> تومان {{product.delivery_cost}}</span>
 
   <div class="flex ">
      <div class=" type ">  {{product.vote}} رای</div>
     
      <v-rating
      v-model="product.rating"
      background-color="warning lighten-1"
      color="red"
      size="10"
      class="rating-section flex flex-row-reverse ml-2"
        
    ></v-rating>


    </div>

  </div>
  </v-card>


</template>
<script>

export default {
  props : ["product"]
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
  color:#717171;
  font-size:0.75rem;
}
.price{
  color:#717171;
    font-size:0.5rem;
    flex:84%;
}
.address{
  color:#717171;
    font-size:0.5rem;
}
.flex-89{flex:89%}
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
      font-family: yekanNumRegular!important;
 
}

.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fe5c67!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}
.divider{height:1px;width:100%;background-color:#f6f6f6}
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
    

    
  
</style>
