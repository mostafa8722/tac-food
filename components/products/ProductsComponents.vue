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
        src="/icons/fruit.svg"
       height="20"
      width="20"
      class="flex-none rounded-none"
      
    
    
    ></v-img>
      </v-tab>

      <v-tab href="#tab-2">
     
          <v-img
        src="/icons/comment.svg"
       height="20"
      width="20"
      class="flex-none rounded-none"
      
    
    
    ></v-img>
      </v-tab>

      <v-tab href="#tab-3">
  
        <v-icon>mdi-information-outline</v-icon>
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
export default {
   components: { Categories,Info,Comments,Products},
    
  
    data : ()  =>({
          tab: null,
               text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
               categories : [
                   {id:1,title:"پیتزا"},
                   {id:1,title:"ساندویچ "},
                   {id:1,title:"برگر "},
                   {id:1,title:"سوخاری"},
                   {id:1,title:"کتلت "},
                   {id:1,title:"مرغ"},
               ]

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
