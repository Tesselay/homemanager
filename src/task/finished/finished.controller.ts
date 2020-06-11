import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Delete } from '@nestjs/common';
import { FinishedService } from "./finished.service";
import { CreateFinishedDTO } from "./create-finished.dto";
import { ValidateObjectId } from "../../shared/pipes/validate-object-id.pipes";


@Controller("tasks/finished")
export class FinishedController {

    constructor(private finishedService: FinishedService) {}

    // @Get("")
    // async getFinisheds(@Res() res) {
    //     const finisheds = await this.finishedService.getFinisheds();
    //     return res.status(HttpStatus.OK).json(finisheds);
    // }

    // @Get(":finishedID")
    // async getFinished(@Res() res, @Param("finishedID", new ValidateObjectId()) finishedID) {
    //     const finished = await this.finishedService.getFinished(finishedID);
    //     if (!finished) throw new NotFoundException("Finished task does not exist!");
    //     return res.status(HttpStatus.OK).json(finished);
    // }

    // @Post("post")
    // async addTask(@Res() res, @Body() createFinishedDTO: CreateFinishedDTO) {
    //     const newFinished = await this.finishedService.addFinished(createFinishedDTO);
    //     return res.status(HttpStatus.OK).json({
    //         message: "Finished task has been submitted successfully!",
    //         finished: newFinished
    //     })
    // }

    // @Put('edit/:finishedID')
    // async editFinished(
    //     @Res() res,
    //     @Param('finishedID', new ValidateObjectId()) finishedID,
    //     @Body() createFinishedDTO: CreateFinishedDTO
    // ) {
    //     const editedFinished = await this.finishedService.editFinished(finishedID, createFinishedDTO);
    //     if (!editedFinished) throw new NotFoundException('Finished task does not exist!');
    //     return res.status(HttpStatus.OK).json({
    //         message: 'Finished task has been successfully updated',
    //         finished: editedFinished
    //     })
    // }

    @Delete('delete/:finishedID')
    async deleteFinished(@Res() res, @Param('finishedID', new ValidateObjectId()) finishedID) {
        const deletedFinished = await this.finishedService.deleteFinished(finishedID);
        if (!deletedFinished) throw new NotFoundException('Finished task does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Finished task has been deleted!',
            finished: deletedFinished
        })
    }

    @Delete('delete')
    async deleteFinisheds(@Res() res) {
        await this.finishedService.deleteFinisheds();
        return res.status(HttpStatus.OK).json({
            message: 'All finished tasks have been deleted!'
        })
    }

}
