<template>
   <div>
       <SearchBox />  
       <Categories v-show="id==1"/>
         
        <Products   />

        
       
  </div>

</template>
<script>
import SearchBox from '~/components/app/SearchBox.vue'
import Categories from './Categories.vue';
import Products from './Products.vue';

export default {
   components: { Categories,SearchBox,Products},
    
  

    data : ()  =>({
          tab: null,
          id : 0,
              

    }),
    created(){
       
     
        this.id = this.$route.params.id ;


    }
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
</style>
