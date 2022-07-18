<template>
<div @click="$emit('select-tab',category.id)" class="flex flex-col items-center  pointer ml-3">


   <div class="category-icon" :style="`background-color:${category.color}`">
   <img :src="category.icon"  class="custom-icon" :class="`${category.id==1?'custom-icon-1':''}`"/>
   
   </div>
   <span class="mt-2 title " :class="`${category.id==tab_selectd?'red':''}`">  {{category.title}}</span>
  
</div>


</template>
<script>

export default {
  props : ["category","tab_selectd"],
  data :()=>({
   
  }),
}
</script>
<style>
.category-icon{
  height:40px;
  width:40px;
  border-radius:50%;
  display:flex;
  justify-content: center;
  align-items: center;
}
.custom-icon{
  height:20px;
  width:20px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(102%) contrast(102%);
}
.custom-icon-1{
 
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(102%) contrast(102%);
}
.title{
  font-size:0.7rem;
}
.red{
  color: red !important;;
}
</style>
