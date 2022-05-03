<template>
<div class="d-flex justify-content-around task">

   <h3>{{task.name}}</h3>
   <div class="d-flex">
 <p>{{task.startTime}}-{{task.endTime}}</p>
 
    
   </div>
   <p>{{convertToHMS(this.timeSpent(task.endTime,task.startTime))}}</p>
  
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
    timeSpent: function (endTime,startTime) {
       
return (this.toSecondTransform(endTime))-(this.toSecondTransform(startTime))
          },
        toSecondTransform:function(time){
var t = time.slice(0,2)*3600+ time.slice(3,5)*60
// console.log(t)
return t
           
        },
     
        convertToHMS(value){
            const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS  
      }

        

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