<template>
  <v-footer

    padless
   
    v-bind="attrs"
     class="bg-white "
  >

    <v-row
      justify="center"
      no-gutters
      class="justify-center bg-[#fbfbfb] shadow-[0px_-2px_5px_rgba(221,221,221,0.9)] "
    >
    
      <v-btn
        v-for="(link,index) in links"
        :key="index"
        color="white"
        text
        rounded
        class="my-2 footer bottom-text  "
        :class="`${getUrl(index)? 'active':''}`"
      >
       <NuxtLink :to="link.link">
       <span class="flex flex-col">
 <font-awesome-icon :icon="`fa-solid  ${link.icon}`" />

      <span class="mt-1">{{link.title}}</span>
       </span>
       </NuxtLink>
    
       
      </v-btn>
    
    </v-row>
  </v-footer>
</template>

<script>
import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHouse,faUser,faCreditCard,faRectangleList } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faHouse,faUser,faRectangleList,faCreditCard)


import { mapGetters } from 'vuex'




//Vue.use(VueToast);


  export default {
 
   computed: {
      ...mapGetters({
           installPromptEvent: 'general/installPromptEvent',
          
            })
         },
   
    data: () => ({
      attrs : {"fixed":true},
      selected_page : 0,
     
     installPromptEvent2 : undefined,
      links: [
        {title:'خانه',icon:"fa-house",link:"/"},
        {title:'سفارشات',icon:"fa-rectangle-list",link:"/myOrders"},
        {title:'کیف پول',icon:"fa-credit-card",link:"/wallet"},
        {title:'پروفایل',icon:"fa-user",link:"/profile"},
       
       
      ],
    }),
    mounted(){



       if(typeof window !== "undefined"){
       
        window.addEventListener("beforeinstallprompt",e =>{
  
            e.preventDefault();
          
           this.$store.dispatch('general/addInstallPromptEvent',e)
          
            
            
     

        })
       }
    },
    methods:{
      getUrl(index){
        let url = this.$route.path;
       
        if(url=="/" && index==0)
        return true
        else if(url=="/myOrders" && index==1)
        return true;
        else if(url=="/wallet" && index==2)
        return true;
        else if(url=="/profile" && index==3)
        return true; 
   

 return false;
           
      },

      addHome(){
          
        //    this.$toast.success('Profile saved.', {})

 

        return ;
          if(this.installPromptEvent){
           
            this.installPromptEvent.prompt();

             this.installPromptEvent.userChoice
            .then((choiceResult)=>{
                if(choiceResult.outcome == "")
                    console.log("outcome")
                else
                    console.log("nonoutcome")
            })
          
          }


      }
    }
   
  }
</script>
<style scoped>

.bottom-text{
  color: #727272;
  font-size:0.75rem;
}
.active{
  color:#ea7c85;
}
.add-home{
  position: absolute;
  right: 20px;
  bottom: 60px;
  padding:10px;
  background-color: green;
  border-radius: 50%;
  color:#ffffff;
 
  font-size: 1rem;
  
}
</style>