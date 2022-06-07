<template>
<div class="flex flex-col items-center  ml-3">


   <div class="category-icon" :style="`background-color:${category.color}`"></div>
   <span class="mt-2 title">  {{category.title}}</span>
</div>


</template>
<script>

export default {
  props : ["category"],
  data :()=>({
   
  }),
}
</script>
<style>
.category-icon{
  height:40px;
  width:40px;
  border-radius:50%;
}
.title{
  font-size:0.7rem;
}
</style>
