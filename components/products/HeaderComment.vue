<template>
 
       <div class="flex">
             <span>{{item.percent}}%</span>
             <span class="flex-100 bar-comment "><span class="bar-comment-percent" :style="`background:${item.color};width:${item.percent}%`"></span></span>
            <v-img
                        height="35"
                        width="35"
                        class="profile-image"
                        :src="item.icon"
                        
                        ></v-img>
         </div>
     
   

</template>
<script>

export default {
   
      props: {
          item:{
              type:Object,
              require:true
          }
      },
      data() { return {
    accentColor: '#fff300',
    heroImage: 'https://vuejs.org/images/logo.png',
  }},
  
  
}
</script>
<style>
.flex-none{
    flex:none;
}
.flex-100{
    flex:100%;
  
}
.bar-comment{

    height: 7px;
    background: #eeeeee;
    margin-top: 8px;
    margin-right:10px;
    margin-left:10px;
    position:relative;
}
.bar-comment-percent{
position :absolute;
height:100%;
  
  left:0px;
}

</style>
