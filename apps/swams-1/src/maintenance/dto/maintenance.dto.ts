import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsDate, IsOptional } from "class-validator";

@InputType()
export class CreateMaintenanceDto {
  @Field()
  @IsNotEmpty({ message: "Task description is required." })
  @IsString({ message: "Task description must be a string." })
  description: string;

  @Field()
  @IsNotEmpty({ message: "Assigned employee ID is required." })
  @IsString({ message: "Assigned employee ID must be a string." })
  assignedEmployeeId: string;

  @Field()
  @IsNotEmpty({ message: "Building ID is required." })
  @IsString({ message: "Building ID must be a string." })
  buildingId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate({ message: "Scheduled date must be a valid date." })
  scheduledDate?: Date;
}

@InputType()
export class UpdateMaintenanceDto {
  @Field()
  @IsNotEmpty({ message: "Maintenance ID is required." })
  @IsString({ message: "Maintenance ID must be a string." })
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "Task description must be a string." })
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "Assigned employee ID must be a string." })
  assignedEmployeeId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "Building ID must be a string." })
  buildingId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate({ message: "Scheduled date must be a valid date." })
  scheduledDate?: Date;
}