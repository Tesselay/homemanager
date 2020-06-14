import { Document } from 'mongoose';

export interface Task extends Document {
  readonly body: String;
  readonly created: String;
  readonly finishBy: String;
}
