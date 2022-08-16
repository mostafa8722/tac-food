<template>
  <header >

    <div class="flex  justify-between items-center ">
      <div class=" v-header flex items-center pt-2 pb-2">
       <font-awesome-icon v-if="title!=''" @click.prevent="handleBackBtn"  class=" mr-2 pointer btn-back p-2" :icon="`fa-solid fa-arrow-right`" />
    <h4 class="title mr-4">{{title}}</h4>

    
        <v-skeleton-loader
           v-if="title=='' && 2>3"
          type="card-heading"
        ></v-skeleton-loader>
    </div>
     <div  class="flex items-center flex-row-reverse" v-if="2>3" >
       <font-awesome-icon  @click.prevent="handleBackBtn"  class=" mr-2 ml-2 pointer btn-back " :icon="`fa-solid fa-arrow-right`" />
       <h4 class="title  mr-10">{{title}}</h4>
    </div>
    </div>
  
    
        
              
  </header>
      
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {mapGetters} from "vuex"

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faArrowRight)
  export default {
      computed: {
      ...mapGetters({
         
             title: 'products/title',
        
            })
         },
  
   data : ()=>({
    
   
   }),

   created(){
  

     this.$store.dispatch('products/setTitle',"");
   },
 
   methods:{
     
      handleBackBtn(){
          this.$router.back();
      }
   }
  }
</script>
<style scoped>
  header{
    background-color: #f5f5f5;
    height:50px;
  
    width: 100%;
    display: flex;
    justify-content: center;
  }
  header > div{max-width: 600px;    width: 100%;}
  .title{
    font-size:0.85rem;
    color:#606060;
    
  }
  .btn-back{
    font-size:0.9rem;
    height: 20px;
  }

</style>