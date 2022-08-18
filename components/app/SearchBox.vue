<template>
 
     <div class="search-container relative flex">
       
          
  <v-progress-circular
       v-show="url=='/search' && isDataSent"
      indeterminate
      color="#fd5e63"
      class="absolute icon-search left-2 top-2" 
    ></v-progress-circular>
         
  <input  v-if="this.url=='/search'"  v-on:keyup="$emit('handle-input',$event)" placeholder="جست و جو در تک فود" class="absolute left-0 right-2" />
  <div  v-else @click="handleEvent()"   >
   <span>جست و جو در تک فود</span>
    <font-awesome-icon v-if="this.url!='/search'" color="#9d9d9d" class=" icon-search left-2 top-3" icon="fa-solid fa-magnifying-glass" />
    
  </div>
           
      </div>
  
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon);
import {mapGetters} from "vuex";

library.add(faMagnifyingGlass)
export default {
   computed: {
      ...mapGetters({
           
             isDataSent: 'home/isDataSent',
        
            })
         },
  data :()=>({
    url : ""
  }),
  created(){
    this.url = this.$route.path
  },
methods :{
  handleEvent(){

   this.$router.push("/search")
  },
 
}
}
</script>
<style scoped>


.search-container{
  height:46px;
  width:calc(100% - 20px);
  margin:5px 10px;
  border : 0.5px solid #eeeeee;
  border-radius:5px;
  background-color:#ffffff;
}
.search-container input{
  height : 100%;
  font-size:0.9rem;
}
.search-container div{
  height:46px;
  width:calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0px 10px;
}
.search-container span{
 color:#9d9d9d;
   font-size:0.9rem;
     font-family: IranYekanFN;
}
input:focus {
  outline: none /* Removes the border when the input is clicked */
}
.icon-search {
  height:20px;
  position: absolute !important;;
}
</style>
