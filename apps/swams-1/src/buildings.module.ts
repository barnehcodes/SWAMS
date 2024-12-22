import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings/buildings.service';
import { BuildingsResolver } from './buildings/buildings.resolver';

@Module({
  providers: [BuildingsService, BuildingsResolver],
})
export class BuildingsModule {}