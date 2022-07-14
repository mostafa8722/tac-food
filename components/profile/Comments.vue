<template>
   <section class=" bg ">
     
     
        <div class="header-Comments flex justify-center items-center">
            <span class="red">مجموع نظرات شما:</span>
            <span  class="red">5</span>
        </div>

     <div class="  mr-2 ml-2 ">

    
        
            
     <div   v-for="(item, index) in comments" :class="`${index==0?'':'mt-1'}`">
         <Comment :key="item.id" :comment="item" />
           
      </div>
     </div>
    </section>

</template>
<script>

import Comment from '../products/Comment.vue';
import { mapGetters } from 'vuex'

import Cookies from 'js-cookie';
export default {
    components: {  Comment},
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
           
            console.log(new_val)
         new_val.map(item=>{
             console.log(item)
         })
        }
    },
        created(){


          if(Cookies.get("user")){
            console.log("user_login",)
        let user = JSON.parse (Cookies.get("user"));
         
                 let token  = {
                       api_token: user.api_token
                    };
                 
                  this.$store.dispatch('products/customerCommentSection',token)
                  
                }else{
    
                 this.$store.dispatch('home/authenticatedCode',{status:401})
                }
   
  
       
         
     },
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
.header-Comments{
    background-color: #ffffff;
    height: 40px;
    border-bottom: 0.05rem solid #9c9c9c;
}
.red{
    color:#ff2200;
    font-size: 0.7rem;
}
</style>
