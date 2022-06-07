<template>
     <div class=" bg-comment  ">
       <div class="flex justify-between ">
            <div >
                <span>&#128516;</span>
           <span>{{comment.name}}</span>
            </div>
           <span>{{comment.date}}</span>

           
       </div>
       <p>{{comment.comment}}</p>
       <p class="mt-2 title">{{comment.title}}</p>


     
     </div>

</template>
<script>

export default {
    components: { },
      props: {
          comment:{
              
          }
      },
  
   
}
</script>
<style scoped>
.flex-none{
    flex:none;
}
.bg-comment{
    background:#ffffff;
    min-height:90px;
    padding:10px;

}
span{
    font-size:0.7rem;
}
p{
    font-size:0.6rem;
}
.title{
font-size:0.5rem;
color:#ababab;
}
</style>
