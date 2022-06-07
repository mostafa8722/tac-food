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
  background-color: #eee;
  width: 15px;
   height: 0.5px;

}
.header-title{
background-color: #ffffff;
border-radius: 5px;
padding : 5px;
min-width: 100px;
text-align: center;
border: 1px solid #eee;  
font-size:0.75rem;  
}
.flex-header-right {
   background-color: #eee;

  flex: 100%;
  height: 0.5px;
}

</style>
