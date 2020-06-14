import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

import { TaskService } from './task.service';
import { CreateTaskDTO } from './create-task.dto';

import { FinishedService } from './finished/finished.service';
import { CreateFinishedDTO } from './finished/create-finished.dto';

@Controller('tasks')
export class TaskController {
  constructor(
    private taskService: TaskService,
    private finishedService: FinishedService,
  ) {}

  @Get('')
  async getTasks(@Res() res) {
    const tasks = await this.taskService.getTasks();
    return res.status(HttpStatus.OK).json(tasks);
  }

  // @Get("task/:taskID")
  // async getTask(@Res() res, @Param("taskID", new ValidateObjectId()) taskID) {
  //     const task = await this.taskService.getTask(taskID);
  //     if (!task) throw new NotFoundException("Task does not exist!");
  //     return res.status(HttpStatus.OK).json(task);
  // }

  @Post('post')
  async addTask(@Res() res, @Body() createTaskDTO: CreateTaskDTO) {
    const newTask = await this.taskService.addTask(createTaskDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Task has been submitted successfully!',
      task: newTask,
    });
  }

  // @Put('edit/:taskID')
  // async editTask(
  //     @Res() res,
  //     @Param('taskID', new ValidateObjectId()) taskID,
  //     @Body() createTaskDTO: CreateTaskDTO
  // ) {
  //     const editedTask = await this.taskService.editTask(taskID, createTaskDTO);
  //     if (!editedTask) throw new NotFoundException('Task does not exist!');
  //     return res.status(HttpStatus.OK).json({
  //         message: 'Task has been successfully updated',
  //         task: editedTask
  //     })
  // }

  @Put('finish/:taskID')
  async finishTask(
    @Res() res,
    @Param('taskID', new ValidateObjectId()) taskID,
    @Body() createFinishedDTO: CreateFinishedDTO,
  ) {
    await this.finishedService.addFinished(createFinishedDTO);
    const finishedTask = await this.taskService.deleteTask(taskID);
    return res.status(HttpStatus.OK).json({
      message: 'Task has been finished succesfully!',
      task: finishedTask,
    });
  }

  @Delete('delete/:taskID')
  async deleteTask(
    @Res() res,
    @Param('taskID', new ValidateObjectId()) taskID,
  ) {
    const deletedTask = await this.taskService.deleteTask(taskID);
    if (!deletedTask) throw new NotFoundException('Task does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Task has been deleted!',
      task: deletedTask,
    });
  }

  @Delete('delete')
  async deleteTasks(@Res() res) {
    await this.taskService.deleteTasks();
    return res.status(HttpStatus.OK).json({
      message: 'All tasks have been deleted!',
    });
  }
}
