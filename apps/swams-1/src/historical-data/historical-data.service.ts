import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateHistoricalDataDto } from "./dto/historical-data.dto";

@Injectable()
export class HistoricalDataService {
  constructor(private readonly prisma: PrismaService) {}

  async createHistoricalData(createHistoricalDataDto: CreateHistoricalDataDto) {
    return await this.prisma.historicalData.create({
      data: createHistoricalDataDto,
    });
  }

  async getHistoricalData() {
    return await this.prisma.historicalData.findMany();
  }

  async deleteHistoricalData(id: string) {
    return await this.prisma.historicalData.delete({
      where: { id },
    });
  }
}