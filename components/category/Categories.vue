<template>
   <div class="container-category flex items-center justify-evenly ">
   
      <Category  v-for="category in categories"  @select-tab="handleSelectTab" :tab_selectd="tab_selectd" :key="category.id" :category="category" />
  </div>

</template>
<script>


import Category from './Category.vue';
export default {
  
    props : ["data"],
     components: {Category  },
    
    data : ()  =>({
          tab: null,
           tab_selectd : 1,
          title : "پیتزا",
          categories : [
            {id:1,title:"همه " ,icon:"/icons/all.svg",color:"#fa6062"},
            {id:2,title:"فست فود" ,icon:"/icons/pizza.svg",color:"#61b15a"},
            {id:3,title:"ایرانی" ,icon:"/icons/persian_food.svg",color:"#653cb5"},
            {id:4,title:"بین المللی" ,icon:"/icons/foreign_food.svg",color:"#029686"}
          
        ]

    }),
    methods:{
      handleSelectTab(id){
       this.tab_selectd = id;
       let params = this.$route.params;
    let id2 = params.id;
 
   this.$store.dispatch('categories/categoriesPage',{lat:35.022731 , lng : 50.357277 ,type:id2})
      }
    }
}
</script>
<style scoped>
.container-category{
    height:80px;
  width:calc(100% - 20px);
  margin:5px 10px;
  border : 0.5px solid #eeeeee;
  border-radius:5px;
  background-color:#ffffff;
}
</style>
