import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBuildingDto {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  location!: string;

  @Field()
  @IsInt()
  floors!: number;
}

@InputType()
export class UpdateBuildingDto {
  @Field()
  @IsNotEmpty({ message: "Building ID is required." })
  id!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "Building name must be a string." })
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "Building address must be a string." })
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: "Building type must be a string." })
  type?: string;
}