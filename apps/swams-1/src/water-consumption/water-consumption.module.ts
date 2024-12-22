import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WaterConsumptionService } from './water-consumption.service';
import { WaterConsumptionResolver } from './water-consumption.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../guards/auth.module';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [WaterConsumptionService, WaterConsumptionResolver, PrismaService],
})
export class WaterConsumptionModule {}