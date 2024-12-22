import { Module } from "@nestjs/common";
import { HistoricalDataService } from "./historical-data.service";
import { HistoricalDataResolver } from "./historical-data.resolver";
import { PrismaService } from "../prisma/prisma.service";
import { AuthModule } from '../guards/auth.module';

@Module({
  imports: [AuthModule],
  providers: [HistoricalDataService, HistoricalDataResolver, PrismaService],
})
export class HistoricalDataModule {}