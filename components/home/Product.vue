<template>
<div class="flex flex-col items-center ml-3 relative">
 <NuxtLink :to="`/products/${product.store_id}`">
 <v-card
    class="flex mb-3 mt-2 flex-col items-center overflow-hidden  rounded-xl"
    width="160"
    height="215"
     color="#ffffff"
     dir="ltr"
  
 
  >
    
<v-img
      height="100"
      width="160"
      class="flex-none rounded-none"
      :src="product.logo"
    
    >
   <template v-slot:placeholder>
         <v-img
        src="/icons/logo.svg"
       height="40"
      width="40"
      class="flex-none rounded-none img-placeholder"
    
    
    ></v-img>
        </template> 
    </v-img>

<div v-if="product.discount!=0" class="shape-octagon"><span>{{product.discount}}%</span></div>
    <v-rating
      v-model="product.vote"
      background-color="warning lighten-1"
      color="#fd5e63"
      size="20"
      class="rating-section mt-1"
        
    ></v-rating>
  <span class=" title mt-2">  {{product.name}}</span>
  <span class=" type  mt-1">  {{product.category}}</span>
  <span class=" price mt-1">    
    <span class="mr-1">ت</span>
    <span class="mr-1">{{formatPrice(product.price)}} </span>
    <span class="mr-1">{{product.unit}}</span>
    <span>هر</span>
  </span>

  </v-card>
  </NuxtLink>
</div>


</template>
<script>

export default {
  props : ["product"],
  methods:{
      formatPrice(price) {
         return  Number(price).toLocaleString()+" "+"";
      },
  }

}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.rounded-xl{
  border-radius:0.3rem!important;
}
.rounded-none{
  border-radius:0rem!important;
}
.title{
  color:#606060;
  font-size:0.95rem;

}
.price{  display: flex;}
.price span{
  color:#606060;
    font-size:0.9rem;
 
    
  font-family: IranYekanFN!important;
  
}
.type{
  color:#c1c1c1;
    font-size:0.9rem;
}
.rating-section button{padding:0px!important}
.rating-section .mdi-star{color:#fd5e63!important}
.rating-section .mdi-star-outline{color:#cdcdcd!important}

  
    

    
    .shape-octagon {
      background: #fd5e63;
      width: 20px;
      height: 20px;
      top:5px;
      left:5px;
          border-radius: 2px;
      position: absolute;
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
      font-size: 0.5rem;
      transform: rotate(-20deg);
      left:4px;
       font-family: yekanBold!important;
    }
    .img-placeholder{
     position: absolute;
    left: 50px;
    top: 20%;
    }
  
</style>
