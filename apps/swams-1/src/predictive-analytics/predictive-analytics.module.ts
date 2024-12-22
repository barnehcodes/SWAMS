import { Module } from "@nestjs/common";
import { PredictiveAnalyticsService } from "./predictive-analytics.service";
import { PredictiveAnalyticsResolver } from "./predictive-analytics.resolver";
import { PrismaService } from "../prisma/prisma.service";
import { AuthModule } from '../guards/auth.module';

@Module({
  imports: [AuthModule],
  providers: [PredictiveAnalyticsService, PredictiveAnalyticsResolver, PrismaService],
})
export class PredictiveAnalyticsModule {}