<template>
 
     <div class="search-container relative flex">
       
          
  <font-awesome-icon v-if="this.url!='/search'" color="#9d9d9d" class="absolute left-2 top-2" icon="fa-solid fa-magnifying-glass" />
           <input  @click="handleEvent()" placeholder="جست و جو در تک فود" class="absolute left-0 right-2" />

      </div>
  
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faMagnifyingGlass)
export default {
  data :()=>({
    url : ""
  }),
  created(){
    this.url = this.$route.path
  },
methods :{
  handleEvent(){

   this.$router.push("/search")
  }
}
}
</script>
<style scoped>


.search-container{
  height:35px;
  width:calc(100% - 20px);
  margin:5px 10px;
  border : 0.5px solid #eeeeee;
  border-radius:5px;
  background-color:#ffffff;
}
.search-container input{
  height : 100%;
  font-size:00.75rem;
}
input:focus {
  outline: none /* Removes the border when the input is clicked */
}
</style>
