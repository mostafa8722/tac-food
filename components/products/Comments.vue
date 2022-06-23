<template>
   <section class=" bg ">
     
     
     <div class="  mr-2 ml-2 ">

     <div class="mt-3 flex flex-col  header-comment">
        <HeaderComment :key="1" :item="item1" class="mb-2" />
        <HeaderComment :key="2" :item="item2" class="mb-2" />
        <HeaderComment :key="3" :item="item3" class="mb-2" />
     
     </div>
          
            
     <div  class="mt-1" v-for="(item, index) in comments">
         <Comment :key="item.id" :comment="item" />
           
      </div>
     </div>
    </section>

</template>
<script>
import HeaderComment from './HeaderComment.vue';
import Comment from './Comment.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderComment ,Comment},
      props: {
          title:{
              type:String
          }
      },
  computed: {
             ...mapGetters({ comments: 'products/comments' })
         },
    data : ()  =>({
        item1 : {icon:"/images/emoj1.png",percent:70,color:"#4baf52"},
        item2 : {icon:"/images/emoj2.png",percent:50,color:"#ff9501"},
        item3 : {icon:"/images/emoj3.png",percent:30,color:"#f65457"},
       
    }),
    watch:{
        comments(new_val,old_val){
            alert()
            console.log(new_val)
         new_val.map(item=>{
             console.log(item)
         })
        }
    }
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.bg{
      background-color: #f6f6f6;
}
.header-comment{
    height:120px;
    background:#ffffff;

    padding: 10px 20px;
}
</style>
