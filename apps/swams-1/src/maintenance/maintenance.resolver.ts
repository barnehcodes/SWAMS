import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MaintenanceService } from "./maintenance.service";
import { CreateMaintenanceResponse, DeleteMaintenanceResponse, LoggedInMaintenanceResponse } from "./types/maintenance.types";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request, Response } from "express";
import { CreateMaintenanceDto, DeleteMaintenanceDto } from "./dto/maintenance.dto";

@Resolver("Maintenance")
export class MaintenanceResolver {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Mutation(() => CreateMaintenanceResponse)
  @UseGuards(AuthGuard)
  async createMaintenance(
    @Context() context: { req: Request; res: Response },
    @Args("createMaintenanceDto") createMaintenanceDto: CreateMaintenanceDto
  ) {
    return this.maintenanceService.createMaintenance(createMaintenanceDto, context.req);
  }

  @Query(() => LoggedInMaintenanceResponse)
  @UseGuards(AuthGuard)
  async getLoggedInMaintenanceTasks(
    @Context() context: { req: any; res: Response }
  ) {
    return this.maintenanceService.getLoggedInMaintenanceTasks(context.req);
  }

  @Mutation(() => DeleteMaintenanceResponse)
  @UseGuards(AuthGuard)
  async deleteMaintenance(
    @Context() context: { req: any },
    @Args("deleteMaintenanceDto") deleteMaintenanceDto: DeleteMaintenanceDto
  ) {
    return this.maintenanceService.deleteMaintenance(deleteMaintenanceDto, context.req);
  }
}