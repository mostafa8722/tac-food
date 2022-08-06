<template>

     <div class="flex-header-container flex ">
  <div class="header-side" :class="title.trim()=='مجموع'?'header-side-total':''">{{title}}</div>
    <h3 class="cart-header-center"></h3>
  <div class="header-side header-side-left" :class="title.trim()=='مجموع'?'header-side-total':''">{{value}}</div>

   </div>
</template>

<script>


export default {
   props:{
        title :{type:String},
        value :{type:String},
    }
}
</script>
<style scoped>



.flex-header-container {
  display: flex;
  align-items: center;
}

.header-side {
   font-family: yekanNumRegular!important;
  font-size:0.9rem;
  margin-left:5px;
  margin-right:5px;
  color:#606060;
}
.header-side-total {
   font-family: IranYekanFN!important;
 
}

.cart-header-center {
  border-bottom: 0.05rem dashed #cccccc;
    height: 2px;
  flex: 1;
  padding : 0px 5px;
 
}


</style>
