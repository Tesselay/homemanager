import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { Task } from "./task.interface";
import { CreateTaskDTO } from "./create-task.dto";

@Injectable()
export class TaskService {

}
