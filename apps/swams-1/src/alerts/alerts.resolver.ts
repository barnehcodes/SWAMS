import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AlertsService } from "./alerts.service";
import { CreateAlertDto } from "./dto/alerts.dto";
import { Alert } from "./entities/alerts.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request } from "express";

@Resolver("Alert")
export class AlertsResolver {
  constructor(private readonly alertsService: AlertsService) {}

  @Mutation(() => Alert)
  @UseGuards(AuthGuard)
  async createAlert(
    @Args("createAlertDto") createAlertDto: CreateAlertDto,
    @Context() context: { req: Request }
  ) {
    return await this.alertsService.createAlert(createAlertDto);
  }

  @Query(() => [Alert])
  @UseGuards(AuthGuard)
  async getAlerts() {
    return await this.alertsService.getAlerts();
  }

  @Mutation(() => Alert)
  @UseGuards(AuthGuard)
  async deleteAlert(@Args("id") id: string) {
    return await this.alertsService.deleteAlert(id);
  }
}