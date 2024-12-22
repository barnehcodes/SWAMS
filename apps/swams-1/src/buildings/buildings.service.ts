import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBuildingDto, UpdateBuildingDto } from './dto/buildings.dto';
import { Building } from '@prisma/client';

@Injectable()
export class BuildingsService {
  constructor(private readonly prisma: PrismaService) {}

  async createBuilding(createBuildingDto: CreateBuildingDto): Promise<Building> {
    return this.prisma.building.create({
      data: createBuildingDto,
    });
  }

  async getBuilding(id: string): Promise<Building | null> {
    return this.prisma.building.findUnique({
      where: { id },
    });
  }

  async getAllBuildings(): Promise<Building[]> {
    return this.prisma.building.findMany();
  }

  async updateBuilding(id: string, updateBuildingDto: UpdateBuildingDto): Promise<Building> {
    return this.prisma.building.update({
      where: { id },
      data: updateBuildingDto,
    });
  }

  async deleteBuilding(id: string): Promise<Building> {
    return this.prisma.building.delete({
      where: { id },
    });
  }
}