<template>
   <section>
     
     
        <Dashboard  v-if="isLogin" />
        <UnLogin  v-else />

    </section>

</template>
<script>


import UnLogin from './UnLogin';
import Dashboard from './Dashboard';


import  DB  from '~/data/db'

export default {
    components: { UnLogin,Dashboard },
     data :()=>({
        isLogin: false,
     }),
     async created(){
  
        await DB.users.count(async (count)=> {
            if(count!=0  )
            this.isLogin = true;
            });
         
     },
  
  
}
</script>
<style scoped>


</style>
