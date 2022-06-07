<template>
 
   
     
     <div class="mt-3 flex flex-col  header-comment">
         <div class="flex">
             <span>100%</span>
             <span class="flex-100 bar-comment "><span class="bar-comment-percent"></span></span>
             <span>&#128516;</span>
         </div>
     
     </div>
   

</template>
<script>

export default {
   
      props: {
          title:{
              type:String
          }
      },
  
  
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
width:70%;
  background: #ff2200;
  left:0px;
}
.header-comment{
    height:120px;
    background:#ffffff;

    padding: 10px 20px;
}
</style>
