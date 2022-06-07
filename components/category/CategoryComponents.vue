<template>
   <div>
       <SearchBox />  
       <Categories/>
         
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
</style>
