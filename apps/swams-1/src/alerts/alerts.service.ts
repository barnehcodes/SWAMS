import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAlertDto } from "./dto/alerts.dto";

@Injectable()
export class AlertsService {
  constructor(private readonly prisma: PrismaService) {}

  async createAlert(createAlertDto: CreateAlertDto) {
    return await this.prisma.alert.create({
      data: createAlertDto,
    });
  }

  async getAlerts() {
    return await this.prisma.alert.findMany();
  }

  async deleteAlert(id: string) {
    return await this.prisma.alert.delete({
      where: { id },
    });
  }
}