import { Module } from '@nestjs/common';

import { FinishedService } from './finished.service';
import { FinishedController } from './finished.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { FinishedSchema } from './finished.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Finished', schema: FinishedSchema }]),
  ],
  controllers: [FinishedController],
  providers: [FinishedService],
  exports: [FinishedService],
})
export class FinishedModule {}
