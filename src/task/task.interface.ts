import { Document } from "mongoose";

export interface Task extends Document {
    readonly body: String,
    readonly created: String,
    readonly finishBy: String, 
    readonly done: Boolean,
    readonly finishedOn: String,
}