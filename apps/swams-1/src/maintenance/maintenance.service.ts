import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMaintenanceDto, UpdateMaintenanceDto } from "./dto/maintenance.dto";
import { Maintenance } from "./entities/maintenance.entity";

@Injectable()
export class MaintenanceService {
  constructor(private readonly prisma: PrismaService) {}

  async createMaintenance(createMaintenanceDto: CreateMaintenanceDto): Promise<Maintenance> {
    return await this.prisma.maintenance.create({
      data: createMaintenanceDto,
    });
  }

  async getAllMaintenanceTasks(): Promise<Maintenance[]> {
    return await this.prisma.maintenance.findMany();
  }

  async getMaintenanceTaskById(id: string): Promise<Maintenance> {
    return await this.prisma.maintenance.findUnique({
      where: { id },
    });
  }

  async updateMaintenance(id: string, updateMaintenanceDto: UpdateMaintenanceDto): Promise<Maintenance> {
    return await this.prisma.maintenance.update({
      where: { id },
      data: updateMaintenanceDto,
    });
  }

  async deleteMaintenance(id: string): Promise<Maintenance> {
    return await this.prisma.maintenance.delete({
      where: { id },
    });
  }
}