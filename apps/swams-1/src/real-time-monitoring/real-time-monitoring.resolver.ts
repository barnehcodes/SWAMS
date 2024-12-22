import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RealTimeMonitoringService } from "./real-time-monitoring.service";
import { CreateRealTimeMonitoringDto } from "./dto/real-time-monitoring.dto";
import { RealTimeMonitoring } from "./entities/real-time-monitoring.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request } from "express";

@Resolver("RealTimeMonitoring")
export class RealTimeMonitoringResolver {
  constructor(private readonly realTimeMonitoringService: RealTimeMonitoringService) {}

  @Mutation(() => RealTimeMonitoring)
  @UseGuards(AuthGuard)
  async createRealTimeMonitoring(
    @Args("createRealTimeMonitoringDto") createRealTimeMonitoringDto: CreateRealTimeMonitoringDto,
    @Context() context: { req: Request }
  ) {
    return await this.realTimeMonitoringService.createRealTimeMonitoring(createRealTimeMonitoringDto);
  }

  @Query(() => [RealTimeMonitoring])
  @UseGuards(AuthGuard)
  async getRealTimeMonitoring() {
    return await this.realTimeMonitoringService.getRealTimeMonitoring();
  }

  @Mutation(() => RealTimeMonitoring)
  @UseGuards(AuthGuard)
  async deleteRealTimeMonitoring(@Args("id") id: string) {
    return await this.realTimeMonitoringService.deleteRealTimeMonitoring(id);
  }
}