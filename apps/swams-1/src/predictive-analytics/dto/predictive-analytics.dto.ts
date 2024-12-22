import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreatePredictiveAnalyticsDto {
  @Field()
  @IsNotEmpty({ message: "Building ID is required." })
  @IsString({ message: "Building ID must be a string." })
  buildingId!: string;

  @Field()
  @IsNotEmpty({ message: "Date is required." })
  date!: Date;

  @Field()
  @IsNotEmpty({ message: "Prediction data is required." })
  prediction!: string;
}