<template>
 

    <div>
    
         <div class="mt-20 flex flex-col ml-3 flex-items profile-container  mr-3">

         
             <h2 class="proposal-title mt-10">بازخورد خود را برای ما ارسال کنید!</h2>
             <p class="mt-4 text-p">آیا شما پیشنهادی دارید یا مشکلی پیدا کرده اید ؟</p>
             <p class="mt-1 text-p"> از طریق فیلد پایین به ما اطلاعا بدهید </p>
        <div class="flex">
            <div class="flex-header-right mt-3"></div>
        </div>
          

         <h2 class="proposal-title2 mt-3">تجربه شما چطور بود؟ </h2>

         <div class="flex justify-center">
             <div class="container-experiment  flex mt-3 ">

                 <div @click="setExperiance('good')" class="flex-col flex container-item items-center justify-center ml-1r" :class="experiance=='good'?'experiance-selected':''" >
                      <v-icon  class="icon-emoj" >mdi-emoticon-happy-outline</v-icon>
                     <span class="text-emoj">خوب </span>
                 </div>
                 <div  @click="setExperiance('average')"  class="flex-col flex container-item items-center justify-center  ml-1r"  :class="experiance=='average'?'experiance-selected':''" >
                        <v-icon  class="icon-emoj" >mdi-emoticon-neutral-outline</v-icon>
                     <span class="text-emoj">متوسط </span>
                 </div>
                 

                 <div  @click="setExperiance('bad')" class="flex flex-col container-item items-center justify-center"  :class="experiance=='bad'?'experiance-selected':''">
                       <v-icon  class="icon-emoj" >mdi-emoticon-sad-outline</v-icon>
                     <span class="text-emoj">بد </span>
                 </div>

                 <div>

               
                 </div>

                 
                 
             </div>
         </div>

         
         <div class="mt-3">
          <v-textarea
          v-model="description"
          solo
          dir="rtl"
          class="text-right"
          name="input-7-4"
          label="توضیحات خود را در این قسمت وارد کنید"
           maxlength="300"
        counter="300"
        ></v-textarea>
       
         </div>
         <div>
                <v-radio-group row class="flex-row" v-model="subject">
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
           <div class="flex justify-center mb-5 mt-2">
               <div @click.prevent ="sendProposal"  class="btn-location pointer text-center relative mt-3">
                  <span class="white" style="font-size: 0.95rem;"> ارسال </span>
                  <v-icon class=" mr-5  icon-item-send white">mdi-send</v-icon>
                  
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
import Cookies from 'js-cookie';
import { mapGetters } from 'vuex'
export default {
    components: {ProfileTitle,HeaderSection},
     computed: {
             ...mapGetters({ isDataSent: 'home/isDataSent' })
         },
    data :()=>({
          radioGroup: 1,
        labels :["خطا","پیشنهاد","غیره" ],
        subject : 1,
        experiance : '',
        description:"",
    }),
    
   
    created(){

          if(!Cookies.get("user"))
          this.$store.dispatch('home/authenticatedCode',{status:401})
                
   
  
       
         
     },
     methods:{
        setExperiance(e){
              this.experiance = e;
        },
      async  sendProposal(){
           
               let final_subject = "خطا";
                let final_exprience = "خوب";
                
            if(this.subject==2)
            final_subject = "غیره";
            else  if(this.subject==3)
            final_subject = "پیشنهاد";
            else
            final_subject = "خطا";

             if(this.experiance=="good")
            final_exprience = "خوب";
            else  if(this.experiance=="average")
            final_exprience = "متوسط";
            else
            final_exprience = "بد";


            let data = {
                subject : final_subject,
                experiance : final_exprience,
                describe : this.description,
            }

               if(Cookies.get("user")){
                  let user = JSON.parse (Cookies.get("user"));
               
                     data . api_token = user.api_token;
                
                   this.$store.dispatch('home/addProposal', data)
                 
               
                  
                }else{
                
                 this.$store.dispatch('home/authenticatedCode',{status:401})
                }
   
            
          
     
        }
     },
     watch:{
        isDataSent(new_val,old_val){
           
            if(new_val){

            }
        }
     }
    
  
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.profile-container{
    max-width: 400px;
    margin:  0px auto;
    padding-bottom: 60px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}

.proposal-title{
    font-size: 1rem;
    color:#606060;
}
.proposal-title2{
    font-size: 0.9rem;
    color:#606060;
}
p{
    color :#cccccc;
    font-size:0.7rem;
    font-family: yekanBold!important;
}

.flex-header-right {
   background-color: #c2c2c2;

  flex: 100%;
  height: 1px;
}
.container-experiment{
    border-radius: 5px;
    width: 74%;
    border: 0.1rem solid #eaeaea;
    height: 70px;
    max-width: 250px;
}
.container-item {
    flex:1;
    background-color: #ffffff;
    
}

.ml-1r{margin-left: 0.1rem;}

.btn-location{
    height:48px ;
   max-width:450px;
   width: 96%;
   margin-left: 7%;
   margin-right: 7%;
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
.experiance-selected{
    background-color: #f76068;
     color: #fff;
}
.icon-emoj{
    color:#606060;
    font-size: 1.5rem;
}
.text-emoj{
    color:#606060;
    font-size: 0.95rem;
}
.text-p{
     color:#8e8e8e;
    font-size: 0.85rem;
      font-family: yekanNumRegular !important;
}
.experiance-selected .icon-emoj{color:#ffffff!important}
.experiance-selected .text-emoj{color:#ffffff!important}

.icon-item-send{
    transform: rotate(180deg);
    position: absolute;
    left: 15px;
    top: 5px;
}
</style>
