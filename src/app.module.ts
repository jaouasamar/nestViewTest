import { Task } from './tasks/task.entity';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule} from '@nestjs/serve-static'; 
import { join } from 'path';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'client/dist'), 
    }), 
    TypeOrmModule.forRoot(
      {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "",
        "database": "test",
        "entities": [Task],
        "synchronize": true
      }
    ),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
