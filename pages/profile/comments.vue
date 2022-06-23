<template>
  <div class="containers">
    <div>
            
        
        <Comments />
     
    </div> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Comments from '~/components/profile/Comments.vue'


export default Vue.extend({
  components:{
    Comments
},

  

})

</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanNumRegular !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

 
  background-color: #f6f6f6;
}


</style>
