import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Task} from './task.entity'
@Injectable()
export class TasksService {

constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
){} 
findAll():Promise<Task[]>{
    return this.taskRepository.find();
}
async findOne(_id:number):Promise<Task[]>{
    return await this.taskRepository.find({
        select: ["name", "startTime", "endTime"],
        where: [{ "id": _id }]
    })
}
async updateTask(task: Task) {
    this.taskRepository.save(task)
}
async createTask(task: Task) {
    this.taskRepository.save(task)
}

async deleteTask(task: Task) {
    this.taskRepository.delete(task);
}
}
// private readonly tasks:Task[]=[
//     {
//         id:"1",
//         name:"Periode1",
//         startTime:"12:50",
//         endTime:"13:00",
//     },
//     {
//         id:"2",
//         name:"Periode2",
//         startTime:"14:50",
//         endTime:"15:00",
//     },
//     {
//         id:"3",
//         name:"Periode3",
//         startTime:"15:10",
//         endTime:"15:20",
//     }

// ];