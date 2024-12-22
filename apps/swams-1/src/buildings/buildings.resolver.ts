import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BuildingsService } from "./buildings.service";
import { CreateBuildingResponse, DeleteBuildingResponse, LoggedInBuildingResponse } from "./types/buildings.types";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { Request, Response } from "express";
import { CreateBuildingDto, DeleteBuildingDto } from "./dto/buildings.dto";

@Resolver("Buildings")
export class BuildingsResolver {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Mutation(() => CreateBuildingResponse)
  @UseGuards(AuthGuard)
  async createBuilding(
    @Context() context: { req: Request; res: Response },
    @Args("createBuildingDto") createBuildingDto: CreateBuildingDto
  ) {
    return this.buildingsService.createBuilding(createBuildingDto, context.req);
  }

  @Query(() => LoggedInBuildingResponse)
  @UseGuards(AuthGuard)
  async getLoggedInBuilding(
    @Context() context: { req: Request; res: Response }
  ) {
    return this.buildingsService.getLoggedInBuilding(context.req);
  }

  @Mutation(() => DeleteBuildingResponse)
  @UseGuards(AuthGuard)
  async deleteBuilding(
    @Context() context: { req: Request },
    @Args("deleteBuildingDto") deleteBuildingDto: DeleteBuildingDto
  ) {
    return this.buildingsService.deleteBuilding(deleteBuildingDto, context.req);
  }
}