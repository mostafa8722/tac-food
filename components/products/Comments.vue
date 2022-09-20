<template>
   <section class=" bg  pr-3 pl-3">
     
     
     <div v-if="comments.length>0" class="  mr-2 ml-2 ">

     <div class="mt-3  mb-2 flex flex-col  header-comment">
        <HeaderComment :key="1" :item="getItem(comments,'high')" type="hight" class="mb-2" />
        <HeaderComment :key="2" :item="getItem(comments,'middle')" type="middle"  class="mb-2" />
        <HeaderComment :key="3" :item="getItem(comments,'low')" type="low" class="mb-2" />
     
     </div>

          
            
     <div  class="mt-1" v-for="(item, index) in comments">
         <Comment :key="item.id" :comment="item" />
           
      </div>
     </div>
      <div v-else class="  mr-2 ml-2 ">
        <EmptyComment />
        
     </div>
    </section>

</template>
<script>
import HeaderComment from './HeaderComment.vue';
import Comment from './Comment.vue';
import EmptyComment from './EmptyComment.vue';
import { mapGetters } from 'vuex'
export default {
    components: { HeaderComment ,Comment,EmptyComment},
      props: {
          title:{
              type:String
          }
      },
  computed: {
             ...mapGetters({
                  isLoading: 'home/isLoading',
                 comments: 'products/comments' })
         },
    data : ()  =>({
        item1 : {icon:"/images/emoj1.png",percent:70,color:"#4baf52"},
        item2 : {icon:"/images/emoj2.png",percent:50,color:"#ff9501"},
        item3 : {icon:"/images/emoj3.png",percent:30,color:"#f65457"},
       
    }),
    methods:{
        getItem(comments,type){


           let count = 0;
           comments.map(item=>{
            if(type=="high" && item.rating>=3 )
            count++;
            else if(type=="middle" && (item.rating<3 && item.rating>=1.5 ) )
            count++;
                else if(type=="middle" && (item.rating<1.5  ) )
            count++;

        
         })
         let percent = 0 ;
         if(comments.length!=0)
         percent = Math.ceil(count /comments.length) * 100 ;
         let color = type == "high" ? "#4caf50" : type == "middle" ? "#ff9b08":"#ff5252" ; 
         let icon = type == "high" ? "/images/emoj1.png" : type == "middle" ? "/images/emoj2.png":"/images/emoj3.png" ; 
         
          
            return  {icon:icon,percent:percent,color:color};
        }
    },
    watch:{
        isLoading(new_val,old_val){
          
        
            if(!new_val)
         this.comments.map(item=>{
           
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
      background-color: #f5f5f5;
}
.header-comment{
    height:120px;
    background:#ffffff;

    padding: 10px 20px;
}
</style>
