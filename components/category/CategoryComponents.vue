<template>
   <div>
       <SearchBox />  
       <Categories @select-tab="handleSelectTab"  v-show="id==1"/>
         
        <Products :tab="tab"   />

        
       
  </div>

</template>
<script>
import SearchBox from '~/components/app/SearchBox.vue'
import Categories from './Categories.vue';
import Products from './Products.vue';

export default {
   components: { Categories,SearchBox,Products},
    
  

    data : ()  =>({
          tab: 1,
          id : 0,
              

    }),
    created(){
       
         
        this.id = this.$route.params.id ;


    },
    methods:{
    handleSelectTab(id){
       this.tab = id;
      
 
  // this.$store.dispatch('categories/categoriesPage',{lat:35.022731 , lng : 50.357277 ,type:id2})
      }
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
