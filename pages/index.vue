<template>
  <div class="home-containers pb-10">
    <div>


   <SearchBox /> 
     
  
   <Sliders/>
   
   <Categories class="mt-3" />
 

  <Products  key="1" type="discount" title="تخفیفات" class="mt-10" />
  <Products key="2" type="popular" title="محبوب ترین" class="mt-10 mb-10" />
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBox from '~/components/app/SearchBox.vue'
import Sliders from '~/components/home/Sliders.vue'
import Categories from '~/components/home/Categories.vue'
import Products from '~/components/home/Products.vue'
import Map from '~/components/home/Map.vue'

import VueToast from 'vue-toast-notification';

Vue.use(VueToast);


export default Vue.extend({
   layout: 'home',
  components:{
    Sliders,
    Categories,
    Products,
    SearchBox,
    Map
},


async asyncData(context){
 //   console.log("loading dhhhh28888", context);
   // console.log("loading dhhhh",this);
 

  await context.store.dispatch('general/getLocation')
   context.store.dispatch('home/handleLoading',true)

  // context.store.dispatch('toast/showErrorToast')
await context.$axios.post('v2/customer/home', context.store.getters['general/location'])
  
  .then((res:any) => {
 
   // context.store.dispatch('toast/showErrorToast') 
     context.store.dispatch('home/homePage3',res.data)
     setTimeout(()=>{
       context.store.dispatch('home/handleLoading',false)
     },100)
     
 
   
  })
  .catch((error:any) => {
    context.store.dispatch('home/handleLoading',false)
     //context.store.dispatch('toast/showErrorToast',error)
     
   // dispatch('toast/showErrorToast', error, { root: true })
  })

 

},
created(){
   setTimeout(()=>{
       this.$store.dispatch('home/handleLoading',false)
     },1000)
}




})
</script>

<style scoped>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea, span, .v-application {
  font-family: yekanNumRegular !important;
}
.home-containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;
  max-width: 600px;
  position: relative;
  padding-bottom: 50px!important;
  border-left:0.1rem solid #eeeeee;
  border-right:0.1rem solid #eeeeee;
}


</style>
