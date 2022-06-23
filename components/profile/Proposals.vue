<template>
 

    <div>
    
         <div class="mt-20 flex flex-col ml-3 flex-items profile-container  mr-3">

         
             <h2 class="proposal-title">بازخورد خود را برای ما ارسال کنید!</h2>
             <p class="mt-4">آیا شما پیشنهادی دارید یا مشکلی پیدا کرده اید ؟</p>
             <p class="mt-1"> از طریق فیلد پایین به ما اطلاعا بدهید </p>
        <div class="flex">
            <div class="flex-header-right mt-3"></div>
        </div>
          

         <h2 class="proposal-title2 mt-3">تجربه شما چطور بود؟ </h2>

         <div class="flex justify-center">
             <div class="container-experiment  flex mt-3 ">
                 <div class="flex-col flex container-item items-center justify-center ml-1r">
                      <v-img
                        height="35"
                        width="35"
                        class="profile-image"
                        src="/icons/good-emoj.png"
                        
                        ></v-img>
                     <span>خوب </span>
                 </div>
                 <div class="flex-col flex container-item items-center justify-center  ml-1r">
                      <v-img
                        height="25"
                        width="25"
                        class="profile-image"
                        src="/icons/good-emoj.png"
                        
                        ></v-img>
                     <span>متوسط </span>
                 </div>
                 

                 <div class="flex flex-col container-item items-center justify-center">
                      <v-img
                        height="30"
                        width="30"
                        class="profile-image"
                        src="/icons/good-emoj.png"
                        
                        ></v-img>
                     <span>بد </span>
                 </div>

                 <div>

               
                 </div>

                 
                 
             </div>
         </div>

         
         <div class="mt-3">
          <v-textarea
          solo
          dir="rtl"
          class="text-right"
          name="input-7-4"
          label="توضیحات خود را در این قسمت وارد کنید"
        ></v-textarea>
        <div class="red flex flex-row-reverse">0/300</div>
         </div>
         <div>
                <v-radio-group row class="flex-row" v-model="radioGroup">
      <v-radio
        v-for="n in 3"
        :key="n"
          color="#ff2200"
        :label="` ${labels[n-1]}`"
        :value="n"
        class="ml-2"
      ></v-radio>
    </v-radio-group>
         </div>
           <div class="flex justify-center mb-5 mt-5">
               <div class="btn-location pointer text-center relative mt-3">
                  <span class="white" style="font-size: 0.8rem;"> ارسال </span>
                   <font-awesome-icon class=" mr-5  icon-item white" :icon="`fa-solid fa-location-dot`" />
                </div>

           </div>
                
     </div>
    </div>
   
    

</template>
<script>

import Vue from "vue"
import ProfileTitle from './ProfileTitle';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser,faAngleLeft,faCreditCard 
,faMessage,faShareNodes
,faPhone,faExclamation,
faPencil,faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUser,faAngleLeft,faCreditCard,faMessage
,faShareNodes,faPhone
,faExclamation,faPencil,faArrowRightFromBracket
)
import HeaderSection from '../app/HeaderSection.vue';
import  DB  from '~/data/db'
export default {
    components: {ProfileTitle,HeaderSection},
    data :()=>({
          radioGroup: 1,
        labels :["خطا","پیشنهاد","غیره" ]
    }),
    
      async created(){
  
        await DB.users.count(async (count)=> {
            if(count==0  ){
              this.$router.push('/login')
            }else{
                 await   DB.users.each( (item) =>{
                    let token  = item.api_token;
                //  this.$store.dispatch('products/customerCommentSection',token)

                });
              
              // this.isLogin = true;
            }
           
          
            });
         
     },
    
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.profile-container{
    width: 400px;
    margin:  0px auto;
}
.proposal-title{
    font-size: 1rem;
    color:#767676;
}
.proposal-title2{
    font-size: 0.8rem;
    color:#767676;
}
p{
    color :#cccccc;
    font-size:0.7rem;
    font-family: yekanNumRegular!important;
}

.flex-header-right {
   background-color: #eee;

  flex: 100%;
  height: 1px;
}
.container-experiment{
    border-radius: 5px;
    border: 0.1rem solid #eaeaea;
    height: 70px;
    width: 250px;
}
.container-item {
    flex:1;
    background-color: #ffffff;
    
}
.container-item span{font-size: 0.6rem;color:#707070;}
.ml-1r{margin-left: 0.1rem;}

.btn-location{
    height:40px ;
    width:250px;
    border-radius: 5px;
    background-color: #fd5e63;
    line-height: 35px;
}

.btn-location svg{
    position:absolute;
    left:20px;
    top:10px;
    color: #ffffff;
}
.white{
    color: #fff;
}
.red{
    color:#f76068;
}
</style>
