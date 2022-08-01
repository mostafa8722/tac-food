<template>

     <div class="flex-header-container flex ">
  <div class="header-side">{{title}}</div>
    <h3 class="cart-header-center"></h3>
  <div class="header-side header-side-left">{{value}}</div>

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
   font-family: yekanBold!important;
  font-size:0.6rem;
  margin-left:5px;
  margin-right:5px;
}
.header-side-left{
  width:64px;
}
.cart-header-center {
border-bottom: 1px dotted;
    height: 2px;
  flex: 95%;
  padding : 0px 5px;
 
}


</style>
