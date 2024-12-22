import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { HistoricalDataService } from "./historical-data.service";
import { CreateHistoricalDataDto } from "./dto/historical-data.dto";
import { HistoricalData } from "./entities/historical-data.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request } from "express";

@Resolver("HistoricalData")
export class HistoricalDataResolver {
  constructor(private readonly historicalDataService: HistoricalDataService) {}

  @Mutation(() => HistoricalData)
  @UseGuards(AuthGuard)
  async createHistoricalData(
    @Args("createHistoricalDataDto") createHistoricalDataDto: CreateHistoricalDataDto,
    @Context() context: { req: Request }
  ) {
    return await this.historicalDataService.createHistoricalData(createHistoricalDataDto);
  }

  @Query(() => [HistoricalData])
  @UseGuards(AuthGuard)
  async getHistoricalData() {
    return await this.historicalDataService.getHistoricalData();
  }

  @Mutation(() => HistoricalData)
  @UseGuards(AuthGuard)
  async deleteHistoricalData(@Args("id") id: string) {
    return await this.historicalDataService.deleteHistoricalData(id);
  }
}