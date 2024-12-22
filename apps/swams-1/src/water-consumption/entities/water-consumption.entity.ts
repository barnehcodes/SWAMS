import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class WaterConsumption {
  @Field()
  id!: string;

  @Field()
  buildingId!: string;

  @Field()
  date!: Date;

  @Field()
  consumption!: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}