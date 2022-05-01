<template>
<header>
 <h1>Today,{{day}} &nbsp;{{month}} </h1>
 <div>

 

  </div>
 <div id="boutns">
 <button type="button" class="btn btn-outline-danger me-2" @click="onStop()"> <font-awesome-icon icon="stop" color="red" class="me-2"/>Stop</button>
 <button type="button" class="btn btn-outline-success" @click="onStart()"><font-awesome-icon icon="stopwatch" color="green" class="me-2" />Start New </button>
 </div>
</header>
</template>
<script>

import {server} from '../utils/helper'
import axios from "axios"
export default {
    name:'Header',
      data: () => ({
          date: '',
          time: '',
          day:'',
          month:'',
          text:'',
          startTime:'',
          endTime:'',
          
         
        }),
         methods: {
          printDate: function () {
            return new Date().toLocaleDateString();
          },
          printTime: function () {
            return new Date().toLocaleTimeString();
          },
           printDay: function () {

           var day= new Date().toLocaleDateString().substring(0,2);
        //    console.log(day)
           if (day<10){
               day= "0"+parseInt(day);
           }
     return day
          },
           printMonth: function () {
            var m= new Date().getMonth();
            switch (m) {
                case 0:
                    return 'Jan';
                  case 1:
                    return 'Feb';
                  case 2:
                    return 'Mar';
                      case 3:
                    return 'Apr';
                      case 4:
                    return 'May';
                      case 5:
                    return 'Jun';
                      case 6:
                    return 'Jul';
                      case 7:
                    return 'Aug';
                      case 8:
                    return 'Sep';
                      case 9:
                    return 'Oct';
                      case 10:
                    return 'Nov';
                      case 11:
                    return 'Dec';

            
                default:
                    break;
            }
          },
          onStart(){
              let d = new Date();
            
                this.startTime= d.getHours() + ":" + d.getMinutes() +':'+d.getSeconds()
   
     console.log(this.startTime)
     return this.startTime;
},
getEndTime(){
    let d = new Date();
let endTime = d.getHours() + ":" + d.getMinutes() +':'+d.getSeconds()


     console.log(endTime)

   
return endTime
},
addTask(){
  const newTask = {
   
    name:'newTask',
        startTime: this.startTime,
        endTime: this.getEndTime(),
    
      }
      console.log(newTask)
      
   
      this.$emit('add-task',newTask)
     
},

      onStop(){
  
 
   this.addTask()
},

         },
             mounted () {
         
          this.time = this.printTime();
          this.day=this.printDay();
          this.month=this.printMonth();
          this.startTime=this.onStart();
          this.endTime=this.getEndTime();
},

}
</script>
<style scoped>
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>