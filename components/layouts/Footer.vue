<template>
  <v-footer

    padless
   
    v-bind="attrs"
     class="bg-white "
  >


   <font-awesome-icon @click.prevent="addHome" class="add-home pointer" :icon="`fa-solid  fa-add`" />
   
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
        <v-icon v-if="index==0"  :class="`${getUrl(index)? 'active':''}`">mdi-home-outline</v-icon>
        <v-icon v-else-if="index==3"  :class="`${getUrl(index)? 'active':''}`">mdi-account-outline</v-icon>
        <v-icon v-else-if="index==2"  :class="`${getUrl(index)? 'active':''}`">mdi-credit-card-outline</v-icon>
 <font-awesome-icon 
 v-else
 class="custom-footer-icon" 
   :class="`${getUrl(index)? 'active':''}`"
 :icon="`fa-solid  ${link.icon}`" />

      <span
        :class="`${getUrl(index)? 'active':''}`"
      class="mt-1">{{link.title}}</span>
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
import {faHouse,faUser,faCreditCard,faRectangleList, faAdd } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faHouse,faUser,faRectangleList,faCreditCard,faAdd)


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
        let name  = this.$route.name;

       
        if(url=="/" && index==0)
        return true
        else if(url=="/myOrders" && index==1)
        return true;
        else if(url=="/wallet" && index==2)
        return true;
        else if(url=="/profile" && index==3)
        return true; 
        else if(name=="category-id" && index==0)
          return true; 
          else if(name=="products-id" && index==0)
          return true; 
   

 return false;
           
      },

      addHome(){
          
        
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
  color:#fd5e63!important;
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
  height: 20px;
}
.custom-footer-icon{
  height:20px;
}
.footer{
  height:55px!important;
}
</style>