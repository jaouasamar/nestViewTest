import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [ TasksController],
  providers: [TasksService],
})
export class TasksModule {}