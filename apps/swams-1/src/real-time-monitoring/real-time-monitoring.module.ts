import { Module } from "@nestjs/common";
import { RealTimeMonitoringService } from "./real-time-monitoring.service";
import { RealTimeMonitoringResolver } from "./real-time-monitoring.resolver";
import { PrismaService } from "../prisma/prisma.service";
import { AuthModule } from '../guards/auth.module';

@Module({
  imports: [AuthModule],
  providers: [RealTimeMonitoringService, RealTimeMonitoringResolver, PrismaService],
})
export class RealTimeMonitoringModule {}