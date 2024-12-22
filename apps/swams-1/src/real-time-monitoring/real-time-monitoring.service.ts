import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRealTimeMonitoringDto } from "./dto/real-time-monitoring.dto";

@Injectable()
export class RealTimeMonitoringService {
  constructor(private readonly prisma: PrismaService) {}

  async createRealTimeMonitoring(createRealTimeMonitoringDto: CreateRealTimeMonitoringDto) {
    return await this.prisma.realTimeMonitoring.create({
      data: createRealTimeMonitoringDto,
    });
  }

  async getRealTimeMonitoring() {
    return await this.prisma.realTimeMonitoring.findMany();
  }

  async deleteRealTimeMonitoring(id: string) {
    return await this.prisma.realTimeMonitoring.delete({
      where: { id },
    });
  }
}