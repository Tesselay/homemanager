import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { Task } from "./task.interface";
import { CreateTaskDTO } from "./create-task.dto";

@Injectable()
export class TaskService {

    constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) {} 

    async getTasks(): Promise<Task[]> {
        const tasks = await this.taskModel.find().exec();
        return tasks;
    }

    async getTask(taskId): Promise<Task> {
        const task = await this.taskModel.findById(taskId).exec();
        return task;
    }
    
    async addTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
        const newTask = await this.taskModel(createTaskDTO);
        return newTask.save();
    }

    async editTask(taskId, createTaskDTO: CreateTaskDTO): Promise<Task> {
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, createTaskDTO, { new: true });
        return updatedTask;
    }

    async deleteTask(taskId): Promise<any> {
        const deletedTask = await this.taskModel.findByIdAndRemove(taskId);
        return deletedTask;
    }

    async deleteTasks() {
        await this.taskModel.deleteMany({});
    }
    
}
