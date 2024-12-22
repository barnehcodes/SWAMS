import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateWaterConsumptionDto {
  @Field()
  @IsNotEmpty({ message: "Building ID is required." })
  @IsString({ message: "Building ID must be a string." })
  buildingId!: string;

  @Field()
  @IsNotEmpty({ message: "Date is required." })
  date!: Date;

  @Field()
  @IsNotEmpty({ message: "Consumption is required." })
  @IsNumber({}, { message: "Consumption must be a number." })
  consumption!: number;
}