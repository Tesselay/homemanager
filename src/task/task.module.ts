import { Module } from '@nestjs/common';

import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";
import { TaskSchema } from './task.schema';
import { FinishedModule } from "./finished/finished.module";

import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
        FinishedModule
    ],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {}
