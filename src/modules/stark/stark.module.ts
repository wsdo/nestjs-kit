import { Module } from '@nestjs/common';
import { StarkController } from './stark.controller';
import { StarkService } from './stark.service';

@Module({
  imports: [],
  controllers: [StarkController],
  providers: [StarkService],
})
export class StarkModule {}
