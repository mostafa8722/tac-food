<template>
 
     <div class="flex-header-container flex">
  <div class="flex-header-left"></div>
    <h3 v-show="title" class="header-title">{{title}}</h3>
  <div class="flex-header-right"></div>
</div>
  
</template>-

<script>
export default {
  props:["title"],
}
</script>
<style scoped>



.flex-header-container {
  display: flex;
  align-items: center;
}

.flex-header-left {
  background-color: #d7d7d7;
  width: 15px;
     height: 0.05rem;

}
.header-title{
background-color: #ffffff;
border-radius: 5px;
height: 30px;
width:100px;
 display: flex;
 justify-content: center;
text-align: center;
border: 1px solid #e6e6e6;  
font-size:0.95rem;  
color:#6b6b6b;

}
.flex-header-right {
   background-color: #d7d7d7;

  flex: 100%;
    height: 0.05rem;
}

</style>
