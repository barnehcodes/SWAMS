import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateWaterConsumptionDto } from "./dto/water-consumption.dto";

@Injectable()
export class WaterConsumptionService {
  constructor(private readonly prisma: PrismaService) {}

  async createWaterConsumption(createWaterConsumptionDto: CreateWaterConsumptionDto) {
    return await this.prisma.waterConsumption.create({
      data: createWaterConsumptionDto,
    });
  }

  async getWaterConsumption() {
    return await this.prisma.waterConsumption.findMany();
  }

  async updateWaterConsumption(id: string, updateWaterConsumptionDto: CreateWaterConsumptionDto) {
    return await this.prisma.waterConsumption.update({
      where: { id },
      data: updateWaterConsumptionDto,
    });
  }

  async deleteWaterConsumption(id: string) {
    return await this.prisma.waterConsumption.delete({
      where: { id },
    });
  }
}