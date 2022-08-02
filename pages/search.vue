<template>
  <div class="containers">
    <div>

    <SearchBox @handle-input="handleSearchInput" />  
    <SearchComponent :type="type" @change-tab="handleTab" />
    
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import SearchBox from '~/components/app/SearchBox.vue'
import SearchComponent from '~/components/search/SearchComponent.vue'
import {mapGetters} from "vuex"
export default Vue.extend({
    layout: 'custom',
     computed: {
             ...mapGetters({
               
                  isDataSent: 'home/isDataSent',
                 })
         },
   
  components:{
    SearchBox,
    SearchComponent,
   
},
data : ()=>({
type : "product",
}),
methods :{
 handleTab(tab:string){
  console.log(tab)
  this.type = tab;
 },
  handleSearchInput(e:any){

console.log(e)
   

   if(e.target.value.length<3 && !this.isDataSent ){
    return ;
   }
    let data = {
      word:e.target.value,
      category : this.type,
      lat:35.022731 ,
       lng : 50.357277 ,
       page:1,};
    
       this.$store.dispatch('products/searchPage',data);

  }
}
})
</script>

<style scoped>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanBold !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;
  width: 100%;
  max-width: 600px;

 
  background-color: #f5f5f5;
}


</style>
