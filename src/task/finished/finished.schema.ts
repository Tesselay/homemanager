import * as mongoose from 'mongoose';

export const FinishedSchema = new mongoose.Schema({
    body: String,
    created: String,
    finishBy: String, 
    finishedOn: String,
})