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

import Cookies from 'js-cookie';

export default Vue.extend({
    layout: 'custom',
  components:{
    Comments
},
created(){


if(Cookies.get("user")){

let user = JSON.parse (Cookies.get("user")!);

       let token  = {
             api_token: user.api_token
          };
       
        this.$store.dispatch('products/customerCommentSection',token)
        
      }else{

       this.$store.dispatch('home/authenticatedCode',{status:401})
      }




},

  

})

</script>

<style>
 @import '~/assets/css/tailwind.css';
  h1, h2, h3, h4, h5, h6, input, textarea,div, span, .v-application {
  font-family: yekanBold !important;
}
.containers {
  margin: 0 auto;
  padding:10px 0px  !important;
  min-height: 100vh;

 
  background-color: #f5f5f5;
}


</style>
