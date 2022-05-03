<template>
 <div class="container">

<Header @add-task="AddTask"/>
<Tasks :tasks="tasks"/>





 </div>

</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import {server} from './utils/helper'
import axios from "axios"
export default {
  name: 'App',
  components: {
Header,
Tasks,

  },
  data(){
    return {
      tasks:[]
    }
  },
  methods:{
    AddTask(task){
      // console.log("post")
   axios.post(`${server.baseURL}/api/tasks`,task)
   this.getTasks()

    
 
  },
    getTasks(){
      axios.get(`${server.baseURL}/api/tasks`).then(data=>this.tasks=data.data)
    },
    getTotal(value){
      console.log("first")
     var s =0
    console.log(parseInt(value))
    //   return s+=parseInt(value)
    }
  },
  created(){
    // this.tasks=[
    //   {
    //     id:1,
    //     text:'Periode1',
    //     startTime:'10:45',
    //     endTime:'12:30',
    //   },
    //   {
    //     id:2,
    //     text:'Periode2',
    //     startTime:'12:30',
    //     endTime:'13:15',
    //   },
    // ]
    this.getTasks();
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
