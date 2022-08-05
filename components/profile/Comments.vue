<template>
   <section class=" bg ">
     
     
        <div v-if="comments.length>0" class="header-Comments flex justify-center items-center">
            <span class="p-red-text">مجموع نظرات شما:</span>
            <span  class="p-red-text">{{comments.length}}</span>
        </div>

     <div class="  mr-2 ml-2 ">

    
        
            
     <div  v-if="comments.length>0"  v-for="(item, index) in comments" :class="`${index==0?'':'mt-1'}`">
         <Comment :key="item.id" :comment="item" />
           
      </div>
       <Empty else />
     </div>
    </section>

</template>
<script>

import Comment from '../products/Comment.vue';
import Empty from './CommentEmpty.vue';
import { mapGetters } from 'vuex'

import Cookies from 'js-cookie';
export default {
    components: {  Comment,Empty},
      props: {
          title:{
              type:String
          }
      },
  computed: {
             ...mapGetters({ comments: 'products/comments' })
         },
   
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
      background-color: #f5f5f5;
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
.p-red-text{
      color : #fd5e63;
    font-size:0.95rem;
     font-family: yekanNumRegular !important;
}
</style>
