import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    body: String,
    done: Boolean,
    created: String, 
    finished: String,
})