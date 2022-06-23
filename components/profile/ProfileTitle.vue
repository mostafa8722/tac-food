<template>
 
      <NuxtLink :to="`${item.link}`">
      <div class="flex justify-between mt-5">
          <div class="flex">
              <font-awesome-icon class=" mr-5 icon-item" :icon="`fa-solid ${item.icon}`" />
              <span class="icon-item mr-5"> {{item.title}}</span>
          </div>
          <font-awesome-icon class=" mr-5  icon-item" :icon="`fa-solid fa-angle-left`" />
      </div>
      </NuxtLink>
    

</template>
<script>

import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.component('font-awesome-icon', FontAwesomeIcon)


export default {
    components: {  },
    props:{
        item :{
            type:Object,
            require:true,
        }
    }
  
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}

.icon-item{
   
    
    font-size: 0.75rem;
    color :#9c9c9c;
}
</style>
