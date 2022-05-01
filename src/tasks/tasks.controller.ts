import { Controller ,Get,Post,Put,Delete,Body,Param} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto'
import { TasksService } from './tasks.service';
// import {Task} from './interfaces/task.interface'
import { Task } from './task.entity';
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService:TasksService){}
    @Get()
    findAll(){
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id){
        return this.tasksService.findOne(id);
    }
    @Post()
    create(@Body() task:Task){
        return this.tasksService.createTask(task)
    }

    @Delete(':id')
    delete(@Param('id') id){
return this.tasksService.deleteTask(id)
    }

    @Put(':id')
    update(@Body() task:Task , @Param('id') id){
return this.tasksService.updateTask(task)
    }
}
