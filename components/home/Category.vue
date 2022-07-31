<template>
<div class="flex flex-col items-center ml-3">
   <NuxtLink v-if="category.id" :to="`/category/${category.id}`">
  <v-card 
    class="flex items-center justify-center rounded-xl-cat"
    width="80"
    height="80"
     :color="category.color"
   outlined

  >
    
<v-img
      height="40"
      width="40"
      class="flex-none rounded-none "
      :src="category.image"
    
    >
     <template v-slot:placeholder>
         <v-img
        src="/icons/logo.svg"
       height="40"
      width="40"
        class="flex-none rounded-none img-placeholder "
    
    
    ></v-img>
        </template> 
    </v-img>
 
  </v-card>
  </NuxtLink>
   <span class="mt-2 cat-title">  {{category.name}}</span>
</div>


</template>
<script>

export default {
  props : ["category"]
}
</script>
<style scoped>
.cat-title{color:#6b6b6b;font-size:0.9rem;}
.flex-none{
    flex:none;
}
.rounded-xl-cat{
  border-radius:0.6rem!important;
}
.rounded-none{
  border-radius:0rem!important;
}
</style>
