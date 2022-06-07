<template>
<div class="flex flex-col items-center ml-3">
  <v-card v-if="category.color"
    class="flex items-center justify-center rounded-xl"
    width="80"
    height="80"
     :color="category.color"
   outlined
   rounded
  >
    
<v-img
      height="40"
      width="40"
      class="flex-none rounded-none"
      :src="category.img"
    
    ></v-img>
 
  </v-card>
   <span class="mt-2">  {{category.title}}</span>
</div>


</template>
<script>

export default {
  props : ["category"]
}
</script>
<style>
.flex-none{
    flex:none;
}
.rounded-xl{
  border-radius:0.5rem!important;
}
.rounded-none{
  border-radius:0rem!important;
}
</style>
