<template>
   <section>
     <HeaderSection title="دسته بندی"/>
     
     <div class="mt-3 flex flex-row mr-3">
     <div  v-for="(item, index) in categories">
        <Category   :category="item" />
      </div>
     </div>
    </section>

</template>
<script>
import HeaderSection from '../app/HeaderSection.vue';
import Category from './Category.vue';
export default {
    components: { HeaderSection ,Category},
    
  
    data : ()  =>({
        categories : [
            {title:"غذا",color:"#ffaead",img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"میوه",color:"#cbffc1",img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"بستنی",color:"#a4e7e5",img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
            {title:"نان",color:"#fefadf",img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
        ]
    })
}
</script>
<style>
.flex-none{
    flex:none;
}
</style>
