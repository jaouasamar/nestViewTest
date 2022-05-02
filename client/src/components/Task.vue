<template>
<div class="d-flex justify-content-around task">

   <h3>{{task.name}}</h3>
   <div class="d-flex">
 <p>{{task.startTime}}-{{task.endTime}}</p>
 
    
   </div>
   <p>duration:{{getDiff(task.startTime,task.endTime)}}</p>
  
</div>

</template>
<script>
export default{
    name:'Task',
    props:{
        task:Object
    },
    date:{
        
        diff:0,
       

    },
    methods: {
        getDiff: function (endTime,startTime) {
        //   console.log(endTime)
        //   console.log(startTime)

          },
    },
    
             mounted () {
         
      
},

   
}
</script>
<style scope>
.task{
    border-top:1px solid
}
</style>