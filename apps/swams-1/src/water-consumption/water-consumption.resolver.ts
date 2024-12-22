import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { WaterConsumptionService } from "./water-consumption.service";
import { CreateWaterConsumptionDto } from "./dto/water-consumption.dto";
import { WaterConsumption } from "./entities/water-consumption.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request } from "express";

@Resolver("WaterConsumption")
export class WaterConsumptionResolver {
  constructor(private readonly waterConsumptionService: WaterConsumptionService) {}

  @Mutation(() => WaterConsumption)
  @UseGuards(AuthGuard)
  async createWaterConsumption(
    @Args("createWaterConsumptionDto") createWaterConsumptionDto: CreateWaterConsumptionDto,
    @Context() context: { req: Request }
  ) {
    return await this.waterConsumptionService.createWaterConsumption(createWaterConsumptionDto);
  }

  @Query(() => [WaterConsumption])
  @UseGuards(AuthGuard)
  async getWaterConsumption() {
    return await this.waterConsumptionService.getWaterConsumption();
  }
}