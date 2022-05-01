<template>
<div class="d-flex justify-content-around task">

   <h3>{{task.name}}</h3>
   <div class="d-flex">
 <p>{{task.startTime}}-{{task.endTime}}</p>
 
    
   </div>
   <p>duration</p>
  
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
            var diff = endTime- startTime;
var hours   = Math.floor(diff / 3.6e6);
var minutes = Math.floor((diff % 3.6e6) / 6e4);
var seconds = Math.floor((diff % 6e4) / 1000);
var duration = hours+":"+minutes+":"+seconds;
return duration
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