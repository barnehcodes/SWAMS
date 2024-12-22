import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsDate } from "class-validator";

@InputType()
export class CreateRealTimeMonitoringDto {
  @Field()
  @IsNotEmpty({ message: "Building ID is required." })
  @IsString({ message: "Building ID must be a string." })
  buildingId!: string;

  @Field()
  @IsNotEmpty({ message: "Timestamp is required." })
  @IsDate({ message: "Timestamp must be a valid date." })
  timestamp!: Date;

  @Field()
  @IsNotEmpty({ message: "Data is required." })
  @IsString({ message: "Data must be a string." })
  data!: string;
}