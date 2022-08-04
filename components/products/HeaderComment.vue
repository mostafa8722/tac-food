<template>
 
       <div class="flex">
             <span class="item-percent">{{item.percent}}%</span>
             <span class="flex-100 bar-comment "><span class="bar-comment-percent" :style="`background:${item.color};width:${item.percent}%`"></span></span>
            <v-icon v-if="type=='low'" :color="item.color">mdi-emoticon-sad-outline</v-icon>
            <v-icon v-else-if="type=='middle'" :color="item.color">mdi-emoticon-neutral-outline</v-icon>
            <v-icon v-else :color="item.color">mdi-emoticon-happy-outline</v-icon>
         </div>
     
   

</template>
<script>

export default {
   
      props: {
          item:{
              type:Object,
              require:true
          },
            type:{
              type:String,
              require:true
          },
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
.item-percent{
   font-family: IranYekanFN !important;
   color:#afafaf;
   width: 30px;
   text-align: left;
}

</style>
