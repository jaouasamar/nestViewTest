import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
   
  ],
  controllers: [TasksController, TasksController],
  providers: [TasksService, TasksService],
})
export class TasksModule {}