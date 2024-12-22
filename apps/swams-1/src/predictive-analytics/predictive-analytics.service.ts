import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePredictiveAnalyticsDto } from "./dto/predictive-analytics.dto";

@Injectable()
export class PredictiveAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPredictiveAnalytics(createPredictiveAnalyticsDto: CreatePredictiveAnalyticsDto) {
    return await this.prisma.predictiveAnalytics.create({
      data: createPredictiveAnalyticsDto,
    });
  }

  async getPredictiveAnalytics() {
    return await this.prisma.predictiveAnalytics.findMany();
  }

  async deletePredictiveAnalytics(id: string) {
    return await this.prisma.predictiveAnalytics.delete({
      where: { id },
    });
  }
}