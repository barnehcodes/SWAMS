import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PredictiveAnalyticsService } from "./predictive-analytics.service";
import { CreatePredictiveAnalyticsDto } from "./dto/predictive-analytics.dto";
import { PredictiveAnalytics } from "./entities/predictive-analytics.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request } from "express";

@Resolver("PredictiveAnalytics")
export class PredictiveAnalyticsResolver {
  constructor(private readonly predictiveAnalyticsService: PredictiveAnalyticsService) {}

  @Mutation(() => PredictiveAnalytics)
  @UseGuards(AuthGuard)
  async createPredictiveAnalytics(
    @Args("createPredictiveAnalyticsDto") createPredictiveAnalyticsDto: CreatePredictiveAnalyticsDto,
    @Context() context: { req: Request }
  ) {
    return await this.predictiveAnalyticsService.createPredictiveAnalytics(createPredictiveAnalyticsDto);
  }

  @Query(() => [PredictiveAnalytics])
  @UseGuards(AuthGuard)
  async getPredictiveAnalytics() {
    return await this.predictiveAnalyticsService.getPredictiveAnalytics();
  }

  @Mutation(() => PredictiveAnalytics)
  @UseGuards(AuthGuard)
  async deletePredictiveAnalytics(@Args("id") id: string) {
    return await this.predictiveAnalyticsService.deletePredictiveAnalytics(id);
  }
}