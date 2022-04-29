import { Injectable } from '@nestjs/common';
import {Task} from './interfaces/task.interface';
@Injectable()
export class TasksService {
private readonly tasks:Task[]=[
    {
        id:"1",
        name:"Periode1",
        startTime:"12:50",
        endTime:"13:00",
    },
    {
        id:"2",
        name:"Periode2",
        startTime:"14:50",
        endTime:"15:00",
    },
    {
        id:"3",
        name:"Periode3",
        startTime:"15:10",
        endTime:"15:20",
    }
];
findAll():Task[]{
    return this.tasks;
}
findOne(id:string):Task{
    return this.tasks.find(task=>task.id===id)
}
}
