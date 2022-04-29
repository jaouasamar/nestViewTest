import { Controller ,Get,Post,Put,Delete,Body,Param} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto'
import { TasksService } from './tasks.service';
import {Task} from './interfaces/task.interface'
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService:TasksService){}
    @Get()
    findAll():Task[]{
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id):Task{
        return this.tasksService.findOne(id);
    }
    @Post()
    create(@Body() createItemDto:CreateTaskDto):string{
        return `Name:${createItemDto.name} startTime:${createItemDto.startTime} endTime:${createItemDto.endTime}`
    }

    @Delete(':id')
    delete(@Param('id') id):string{
return `taskDeleted${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto:CreateTaskDto , @Param('id') id):string{
return `Update Task${id} - Name ${updateItemDto.name}`;
    }
}
