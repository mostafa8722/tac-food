<template>
   <section class="flex  items-center flex-col">
        <SearchTab />
        <Empty/>
        
    </section>

</template>
<script>


import Empty from './Empty'
import SearchTab from './SearchTab'
import Carts from './Carts'




export default {
    components: { Empty,Carts,SearchTab },
    
  
  
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
