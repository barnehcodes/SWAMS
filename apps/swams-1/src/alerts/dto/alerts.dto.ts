import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateAlertDto {
  @Field()
  @IsNotEmpty({ message: "Building ID is required." })
  @IsString({ message: "Building ID must be a string." })
  buildingId!: string;

  @Field()
  @IsNotEmpty({ message: "Message is required." })
  @IsString({ message: "Message must be a string." })
  message!: string;

  @Field()
  @IsNotEmpty({ message: "Severity is required." })
  @IsString({ message: "Severity must be a string." })
  severity!: string;

  @Field()
  @IsBoolean({ message: "isActive must be a boolean." })
  isActive!: boolean;
}