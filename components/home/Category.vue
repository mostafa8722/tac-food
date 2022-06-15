<template>
<div class="flex flex-col items-center ml-3">
   <NuxtLink v-if="category.id" :to="`/category/${category.id}`">
  <v-card 
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
      :src="category.image"
    
    ></v-img>
 
  </v-card>
  </NuxtLink>
   <span class="mt-2">  {{category.name}}</span>
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
