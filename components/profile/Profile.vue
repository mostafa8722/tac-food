<template>
   <section>
     
     
        <Dashboard  v-if="isLogin" />
        <UnLogin  v-else />

    </section>

</template>
<script>


import UnLogin from './UnLogin';
import Dashboard from './Dashboard';


import Cookies from 'js-cookie'

export default {
    components: { UnLogin,Dashboard },
     data :()=>({
        isLogin: false,
     }),
      created(){
  
    
           if(Cookies.get("user"))
            this.isLogin = true;
         
         
     },
  
  
}
</script>
<style scoped>


</style>
