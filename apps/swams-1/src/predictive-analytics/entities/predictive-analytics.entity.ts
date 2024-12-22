import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PredictiveAnalytics {
  @Field()
  id!: string;

  @Field()
  buildingId!: string;

  @Field()
  date!: Date;

  @Field()
  prediction!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}