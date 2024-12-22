import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class HistoricalData {
  @Field()
  id!: string;

  @Field()
  buildingId!: string;

  @Field()
  date!: Date;

  @Field()
  data!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}