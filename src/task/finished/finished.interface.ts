import { Document } from "mongoose";

export interface Finished extends Document {
    readonly body: String,
    readonly created: String,
    readonly finishBy: String, 
    readonly finishedOn: String,
}