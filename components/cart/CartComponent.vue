<template>
   <section class="flex  items-center flex-col">
     
     
    
        <Carts v-if="carts.length>0" v-for="cart in carts" :cart="cart"  />
        <Empty v-else />
       
    </section>

</template>
<script>


import Empty from './Empty'
import Carts from './Carts'
import { mapGetters } from 'vuex'



export default {
    components: { Empty,Carts },
    
   computed: {
      ...mapGetters({
           carts: 'products/carts',
       
        
            })
         },
         created(){
            console.log("ppp",this.carts)
         }
         
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.circle-border{
  height:110px;  
  width:110px;  
  border : 4px solid #fe606a;
  border-radius:50%;

}
.circle-border span{
    color :#676767;
    font-size:0.75rem;
    font-family: yekanNumRegular!important;
}
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanNumRegular!important;
}
.btn-add{
    background-color : #fd5e63!important;
    width: 200px;
   
}
.white{
  
    color : #ffffff!important;
}
</style>
