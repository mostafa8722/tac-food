<template>
<NuxtLink v-if="product.id" :class="`${page=='search'?'w-100':''}`" :to="`/products/${product.id}`">
<v-card
    class="flex flex-col mt-2  overflow-hidden  content-product"
 
    height="160"

     color="#ffffff"
  
  outlined
 
  >
    <div class="flex flex-row  mt-1">
      <v-img
       
      height="70"
      width="70"

      class="flex-none rounded-xl mr-1"
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


       <div v-if="getActiveTime(product)" class="active-time-shape-green">
          <div class="active-time-shape-green-inline"></div>
        </div>
             <div v-else  class="active-time-shape">
          <div class="active-time-shape-inline"></div>
        </div>
     <div>
         <div class="d-flex">
           <span class=" title mt-1">  {{product.name}}</span>
           <div v-if="product.is_new" class="shape-octagon-cat"><v-icon>mdi-exclamation</v-icon></div>
         </div>
             
          
     </div>
      <span class=" body  mt-2"> 
        <span v-for="(cat,index) in product.categories" >  {{index==0?cat:`,${cat}`}}</span>
       </span>
      <span class=" address mt-1">   {{product.address}}</span>

    </div>
    </div>
  

<div class="divider mt-7"></div>
    
  <div class="flex justify-between items-center mt-3 mr-2 ml-2">
  <span v-if="product.delivery_cost==0" class=" price-tag "> پیک رایگان</span>
  <span v-else class=" price-tag flex">
    <span>{{formatPrice(product.delivery_cost)}}</span>
    <span class="mr-2">تومان</span>
  </span>
 
   <div class="grid grid-cols-2 ">
      <div v-if="product.vote>0" class=" type-cat flex ml-2  ">  {{product.vote}} رای</div>
     
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
      getActiveTime(product){


     let active_times = product.activity_times;
   let is_active = true;
   
    active_times.map((time,index)=>{
 
        let hour_start = parseInt(time.start.substring(0,2));
        let min_start = parseInt(time.start.substring(3,5));

          let hour_end = parseInt(time.end.substring(0,2));
        let min_end = parseInt(time.end.substring(3,5));
         let date  = new Date();
              let hour = date.getHours();
              let min = date.getMinutes();

         if( hour< hour_start &&  hour>hour_end ){
                is_active = false;
               }else  if( hour== hour_start &&  min<min_start ){
                is_active = false;
               }
               else  if( hour== hour_end &&  min>min_end ){
                is_active = false;
               }
       
      });

      return is_active;
       
      }
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
  width:100%;
  margin-left: 5%;
  margin-right: 5%;
}
.rounded-none{
  border-radius:0rem!important;
}
.title{
 color:#606060;
    font-size:0.85rem;
     font-family: IranYekanFN !important;
}
.price-tag{
  color:#8e8e8e;
    font-size:0.75rem;
     font-family: IranYekanFN !important;
}
.price-tag span{
  color:#8e8e8e;
    font-size:0.85rem;
     font-family: IranYekanFN !important;
}
.address{
  color:#8e8e8e;
    font-size:0.7rem;
      font-family: yekanNumRegular !important;
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
    display: flex;
}
.body span{
  color:#8e8e8e;
    font-size:0.8rem;
     font-family: IranYekanFN !important;
    
}
.type-cat{
    color:#8e8e8e;
    font-size:0.85rem;
     font-family: yekanNumRegular !important;
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

.active-time-shape{
    position: absolute;
  left: 10px;
  top:10px;
  height: 12px;
  width: 12px;
  border:0.05rem solid #fe5c67;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active-time-shape-inline{
  height: 7px;
  width: 7px;
  background-color: #fe5c67;
  border-radius: 50%;
}
.active-time-shape-green{
  position: absolute;
  left: 10px;
  top:10px;
  height: 12px;
  width: 12px;
  border:0.05rem solid #6cb066;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active-time-shape-green-inline{

  height: 7px;
  width: 7px;
  background-color: #6cb066;
  border-radius: 50%;
}
.d-flex{display: flex;}
 .shape-octagon-cat {
      background: #ffc107;
      width: 15px;
      height: 15px;
       margin-right: 10px;
          border-radius: 2px;
   
      text-align: center;
      transform: rotate(20deg);
      color:#fff;
      display:flex;
      justify-content:center;
      align-items :center;
    }
    .shape-octagon-cat:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
          border-radius: 2px;
      background: #ffc107;
      transform: rotate(135deg);
    }
   .shape-octagon-cat i {
      position: absolute  !important;
      font-size: 0.85rem!important;
      transform: rotate(-20deg)!important;
      color:#ffffff!important;
      left: 0px !important;;
       font-family: yekanBold!important;
    }
</style>
