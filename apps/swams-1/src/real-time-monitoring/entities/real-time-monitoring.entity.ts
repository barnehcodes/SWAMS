import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RealTimeMonitoring {
  @Field()
  id!: string;

  @Field()
  buildingId!: string;

  @Field()
  timestamp!: Date;

  @Field()
  data!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}