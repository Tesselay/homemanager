import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { Finished } from "./finished.interface";
import { CreateFinishedDTO } from "./create-finished.dto";

@Injectable()
export class FinishedService {

    constructor(@InjectModel("Finished") private readonly finishedModel: Model<Finished>) {} 

    async getFinisheds(): Promise<Finished[]> {
        const finisheds = await this.finishedModel.find().exec();
        return finisheds;
    }

    async getFinished(finishedId): Promise<Finished> {
        const finished = await this.finishedModel.findById(finishedId).exec();
        return finished;
    }
    
    async addFinished(createFinishedDTO: CreateFinishedDTO): Promise<Finished> {
        const newFinished = await this.finishedModel(createFinishedDTO);
        return newFinished.save();
    }

    async editFinished(finishedId, createFinishedDTO: CreateFinishedDTO): Promise<Finished> {
        const updatedFinished = await this.finishedModel.findByIdAndUpdate(finishedId, createFinishedDTO, { new: true });
        return updatedFinished;
    }

    async deleteFinished(finishedId): Promise<any> {
        const deletedFinished = await this.finishedModel.findByIdAndRemove(finishedId);
        return deletedFinished;
    }

    async deleteFinisheds() {
        await this.finishedModel.deleteMany({});
    }
    
}
