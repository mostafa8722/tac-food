<template>
 

    <div class="mb-70 ">
     <div  class="flex justify-center ">
<v-card
    class="rounded-xl mt-70  "
    width="300"
    height="170"
     color="#ffffff"
  
  
 
  >
    <div class="flex flex-col   justify-center ">

        <v-card
    class="rounded cover-profile-img "
    width="80"
    height="80"
     color="#ffffff"
  
  
 
  >
  
   <v-img
      height="50"
      width="50"
       class="profile-image"
     src="/icons/users.svg"
    
    ></v-img>
  </v-card>
     

    <div class="flex  flex-col items-center mt-10">
      <span class=" text-red mt-2"> {{ name}}</span>
      <span class=" text-profile mt-2">  {{mobile}}</span>
      <span class=" text-profile mt-2">  کد معرف {{code}}</span>
      

    </div>

    <div class="flex justify-evenly mt-2">
      <div class="pointer" @click.prevent="edit">
      <v-icon class=" mr-5  icon-item icon-red">mdi-pencil</v-icon>
             
            <span class=" text-profile-edit mr-1"> ویرایش </span>
      </div>

       <div class="pointer" @click.prevent="logOut">
            <v-icon class=" mr-5  icon-item icon-red">mdi-exit-to-app</v-icon>
            <span  class=" text-profile-edit mr-1">  خروج</span>
          
      </div>
    </div>
    </div>
    

    
 
  </v-card>
     </div>
         <div class="mt-20 flex flex-col ml-3 flex-items profile-container  mr-3">

         
      <ProfileTitle v-for="item in items" :key="item.id"  :item="item"
       />

        
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


import Cookies from 'js-cookie'
export default {
    components: {ProfileTitle},
    data :()=>({
        name:"",
        code:"",
        mobile:"",
     
        items :[
            {id:1,title:"نظرات ",icon:"fa-message",link:"/profile/comments"},
            {id:2,title:"سوابق پرداخت",icon:"fa-credit-card",link:"/profile/payments"},
            {id:3,title:"انتقادات و پیشنهادات",icon:"fa-exclamation",link:"/profile/proposals"},
            {id:4,title:"به روز رسانی ",icon:"fa-exclamation",link:"/profile/proposals"},
            {id:5,title:" به دوستان",icon:"fa-share-nodes",link:"/profile/share"},
            {id:6,title:"تماس با پشتیبانی",icon:"fa-phone",link:"tel:086-4242-0000"},
        ]
    }),
     
    created(){
  
     if(Cookies.get("user")){
        let user = JSON.parse (Cookies.get("user"));
               this.name = user.name;
                     this.mobile = user.phone;
                   this.code = user.invite_code
    }
   
         
      
             
       
    },
    methods:{
        async logOut(){
          
              this.$router.push('/logout')

            
        },
        edit(){}
        
    }
    
  
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
p{
    color :#cccccc;
    font-size:0.6rem;
    font-family: yekanBold!important;
}
.mt-70{margin-top: 70px;}
.btn-add{
    background-color : #fd5e63!important;
}
.text-red{
  
    color : #fd5e63!important;
    font-size:0.95rem;
}

.icon-red{
  
    color : #fd5e63!important;
    font-size:1.6rem;
}
.text-profile{
    color : #9e9e9e;
    font-size:0.95rem;
     font-family: yekanNumRegular !important;
}
.icon-users{
   
    height:25px;
    color :#cccccc;
}
.text-profile-edit{
    color : #606060!important;
    font-size:0.95rem;
      font-family: IranYekanFN !important;
}
.cover-profile-img{
    width: 80px;
    height: 80px;
    position: absolute;
    right:calc(50% - 40px);
    top: -45px;
    border-radius: 50%!important;;
}
.profile-image{
   position: absolute;
   left:15px;
   top:15px;
   filter: invert(39%) sepia(43%) saturate(2653%) hue-rotate(329deg) brightness(113%) contrast(98%);
}
.mb-70{margin-bottom: 70px;}
</style>
