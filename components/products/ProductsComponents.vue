<template>
   <div>
    <v-tabs
      v-model="tab"
      background-color="#f6f6f6"
      centered
      dark
      icons-and-text
       slider-color="yellow"
     
    >
  

      <v-tab href="#tab-1">
     
          <v-img
            v-if="title!=''"
        src="/icons/fruit.svg"
       height="20"
      width="20"
      class="flex-none rounded-none"
      
    
    
    ></v-img>
      </v-tab>

      <v-tab href="#tab-2">
      
          <v-img
         v-if="title!=''" 
        src="/icons/comment.svg"
       height="20"
      width="20"
      class="flex-none rounded-none"
      
    
    
    ></v-img>
      </v-tab>

      <v-tab href="#tab-3">
  
        <v-icon   v-if="title!=''" >mdi-information-outline</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
        class="tab-item"
      >
        
         <Products v-if="i==1"/>
         <Comments v-else-if="i==2" />
         <Info v-else-if="i==3" />
         
       
      </v-tab-item>
    </v-tabs-items>
  </div>

</template>
<script>
import Categories from './Categories.vue';
import Info from './Info.vue';
import Comments from './Comments.vue';
import Products from './Products.vue';
import {mapGetters} from "vuex"
export default {
   components: { Categories,Info,Comments,Products},
   computed: {
      ...mapGetters({
         
             title: 'products/title',
        
            })
         },    
  
    data : ()  =>({
          tab: null,
             
    })
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.v-tabs-slider{
    background-color:#fe5c67;
}
.v-tab ,.v-icon{
color:#242424!important;
}
.v-tab--active .v-icon{
color:#fe5c67!important;;
}
.v-tab--active .v-image{
filter: invert(49%) sepia(54%) saturate(5146%) hue-rotate(329deg) brightness(118%) contrast(99%);
}
.tab-item{
   background-color: #f6f6f6!important;
}
.active-tab{
  color:#fe5c67!important;;
}
</style>
