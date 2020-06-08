import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    body: String,
    created: String,
    finishBy: String, 
    done: Boolean,
    finishedOn: String,
})