<template>
   <div class="container-category flex items-center ">
   
      <Category v-for="category in categories" :category="category" />
  </div>

</template>
<script>


import Category from './Category.vue';
export default {
  
    props : ["data"],
     components: {  },
    
    data : ()  =>({
          tab: null,
          title : "پیتزا",
          categories : [
            {title:"همه " ,icon:"",color:"#fa6062"},
            {title:"فست فود" ,icon:"",color:"#61b15a"},
            {title:"ایرانی" ,icon:"",color:"#653cb5"},
            {title:"بین المللی" ,icon:"",color:"#029686"}
          
        ]

    })
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
