<template>
 

    <div>
     <div  class="flex justify-center">
<v-card
    class="rounded-xl  "
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
      <span class=" red mt-2"> {{ name}}</span>
      <span class=" text-profile mt-2">  {{mobile}}</span>
      <span class=" text-profile mt-2">  کد معرف {{code}}</span>
      

    </div>

    <div class="flex justify-evenly mt-2">
      <div class="pointer" @click.prevent="edit">
               <font-awesome-icon class=" mr-5  icon-item red" :icon="`fa-solid fa-pencil`" />
            <span class=" text-profile-edit mr-1"> ویرایش </span>
      </div>

       <div class="pointer" @click.prevent="logOut">
           
            <font-awesome-icon class=" mr-5  icon-item red" :icon="`fa-solid fa-arrow-right-from-bracket`" />
            <span  class=" text-profile-edit mr-1">  خروج</span>
          
      </div>
    </div>
    </div>
    

    
 
  </v-card>
     </div>
         <div class="mt-20 flex flex-col ml-3 flex-items profile-container  mr-3">

         
      <ProfileTitle v-for="item in items" :key="item.id"  :item="item" />

        
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
            {id:4,title:"معرفی به دوستان",icon:"fa-share-nodes",link:"/profile/share"},
            {id:5,title:"تماس با پشتیبانی",icon:"fa-phone",link:"/profile/contact"},
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
.btn-add{
    background-color : #fd5e63!important;
}
.red{
  
    color : #f75c67!important;
    font-size:0.8rem;
}
.text-profile{
    color : #9c9c9c!important;
    font-size:0.8rem;
     font-family: yekanBold !important;
}
.icon-users{
   
    height:25px;
    color :#cccccc;
}
.text-profile-edit{
    color : #6b6b6b!important;
    font-size:0.8rem;
}
.cover-profile-img{
    width: 80px;
    height: 80px;
    position: absolute;
    right:calc(50% - 40px);
    top: -45px;
}
.profile-image{
   position: absolute;
   left:15px;
   top:15px;
}
</style>
