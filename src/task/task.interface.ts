import { Document } from "mongoose";

export interface Task extends Document {
    readonly body: String,
    readonly done: Boolean,
    readonly created: String, 
    readonly finished: String,
}